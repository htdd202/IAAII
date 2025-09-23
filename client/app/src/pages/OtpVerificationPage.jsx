import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Logo from "../assets/logo.jsx";
import axios from "axios";

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  // Timer for OTP expiration
  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      if (error) setError("");
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);
      inputRefs.current[5].focus();
    }
  };

  const handleResendOtp = async () => {
    // Simulate API call to resend OTP
    setTimeLeft(30);
    setCanResend(false);

    // You would add actual resend logic here
    console.log("Resending OTP to", email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setIsVerifying(true);

    try {
      // Call the OTP verification API
      const response = await axios.post(
        "http://localhost:5000/api/users/verify-otp",
        {
          email,
          otp: Number(otpValue),
        }
      );

      const { resetToken } = response.data; // Retrieve resetToken from response
      navigate("/reset-password", { state: { resetToken } }); // Pass resetToken to ResetPasswordPage
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-block">
            <Logo className="mx-auto h-16 w-auto" />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Verification Code
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We sent a verification code to{" "}
            <span className="font-medium">{email}</span>
          </p>
        </motion.div>

        <motion.div
          className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            onPaste={handlePaste}
          >
            <div>
              <label
                htmlFor="otp-input"
                className="block text-sm font-medium text-gray-700 mb-3 text-center"
              >
                Enter the 6-digit code
              </label>

              <div className="flex justify-center space-x-2 sm:space-x-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-10 h-12 sm:w-12 sm:h-14 text-center border ${
                      error ? "border-red-300" : "border-gray-300"
                    } rounded-md shadow-sm text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-[#F47B20]`}
                    autoComplete="off"
                  />
                ))}
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-red-600 text-center"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-600">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[#F47B20] hover:text-[#e06610] font-medium focus:outline-none"
                  >
                    Resend code
                  </button>
                ) : (
                  <span>
                    Resend code in{" "}
                    <span className="font-semibold">{timeLeft}</span> seconds
                  </span>
                )}
              </p>
            </div>

            <div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 text-base"
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    "Verify"
                  )}
                </Button>
              </motion.div>
            </div>

            <div className="text-center">
              <Link
                to="/login"
                className="text-sm font-medium text-[#F47B20] hover:text-[#e06610]"
              >
                Return to login
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
