import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password },
        { withCredentials: true }
      );

      // Destructure the response data
      const { email: userEmail, firstName, lastName, _id } = response.data.user;
      const accessToken = response.data.accessToken;

      localStorage.setItem("accessToken", accessToken);

      // Combine first name and last name for the full name
      const fullName = `${firstName} ${lastName}`;

      // Store data in local storage
      localStorage.setItem("userName", fullName);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userId", _id);

      // Log the stored data (optional)
      console.log("Stored in local storage:", {
        name: fullName,
        email: userEmail,
        id: _id,
      });

      // Update the user state (if using React state)
      setUser(response.data.user);

      setIsLoggedIn(true); // Set isLoggedIn to true on successful login

      // Return the response data (optional)
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      // Clear user data from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");

      // Update state
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const signup = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
