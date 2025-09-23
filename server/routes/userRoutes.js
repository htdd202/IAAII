import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  logout,
  forgotPassword,
  verifyOTP,
  resetPassword,
  submitForm,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

// Password reset routes
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

router.post("/submit-form", submitForm);

export default router;
