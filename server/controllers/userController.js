import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import dotenv from "dotenv";
import OTP from "../models/OtpModel.js";
import { sendOTPEmail } from "../utils/emailServices.js";
import { sendFormEmail } from "../utils/emailServices.js";

dotenv.config();

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// 📌 **User Registration**
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 📌 **User Login**
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const { accessToken, refreshToken } = generateTokens(user);

    // Send refresh token as HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Prevent client-side access
      secure: process.env.NODE_ENV === "production", // Use secure flag in production
      sameSite: "Strict", // Protect against CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ accessToken, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Logout controller
export const logout = async (req, res) => {
  try {
    res.cookie("refreshToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 📌 **Refresh Token**
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(401).json({ message: "No refresh token provided" });

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err)
          return res.status(403).json({ message: "Invalid refresh token" });

        const newTokens = generateTokens({ _id: decoded.userId });
        res.json(newTokens);
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Forgot password controller
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate OTP
    const otp = generateOTP();

    // Save OTP to database
    await OTP.create({
      email,
      otp,
    });

    // Send OTP via email
    const emailSent = await sendOTPEmail(email, otp);

    if (emailSent) {
      res.json({
        message: "OTP sent to your email",
        email, // Return email for frontend reference
      });
    } else {
      res.status(500).json({ message: "Failed to send OTP email" });
    }
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP controller
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the most recent OTP for this email
    const otpRecord = await OTP.findOne({ email }).sort({ createdAt: -1 });

    if (!otpRecord) {
      return res.status(400).json({ message: "OTP expired or not found" });
    }

    // Verify OTP
    if (otpRecord.otp !== otp) {
      // Delete invalid OTP after 3 failed attempts (you could add attempts counter)
      await OTP.deleteOne({ _id: otpRecord._id });
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Delete all existing OTPs for this email for security
    await OTP.deleteMany({ email });

    // Generate a temporary token for password reset
    const resetToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "10m",
    });

    res.json({
      message: "OTP verified successfully",
      resetToken,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Reset password controller
export const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    // Verify reset token
    const decoded = jwt.verify(resetToken, process.env.ACCESS_TOKEN_SECRET);
    const email = decoded.email;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      // Clean up any remaining OTPs
      await OTP.deleteMany({ email });
      return res.status(404).json({ message: "User not found" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    // Clean up any remaining OTPs for this email
    await OTP.deleteMany({ email });

    res.json({ message: "Password reset successful" });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid or expired reset token" });
    }
    console.error("Password reset error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const submitForm = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    // Send form data via email
    const emailSent = await sendFormEmail(formData);

    if (emailSent) {
      res.status(200).json({ message: "Form submitted successfully" });
    } else {
      res.status(500).json({ message: "Failed to send form email" });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
