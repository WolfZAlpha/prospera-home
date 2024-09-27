import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import config from "../../config";

export const AuthContext = createContext();

const API_URL = config.apiUrl;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setAuthToken = useCallback((token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      document.cookie = `token=${token}; domain=.prosperadefi.com; path=/; max-age=${
        60 * 60 * 24 * 7
      }; secure; samesite=strict`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      document.cookie =
        "token=; domain=.prosperadefi.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      localStorage.removeItem("token");
    }
  }, []);

  const checkAuth = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      try {
        const response = await axios.get(`${API_URL}/api/auth/check`, {
          withCredentials: true,
        });
        const userData = response.data.user;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("User authenticated:", userData);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setError(error);
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
    setLoading(false);
    setIsInitialized(true);
  }, [setAuthToken]);

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      await checkAuth();
      setIsLoading(false);
    };
    initAuth();
  }, [checkAuth]);

  const login = async (emailOrUsername, password) => {
    try {
      console.log("Login attempt. Payload:", { emailOrUsername, password: "REDACTED" });
      console.log("API URL being used:", `${API_URL}/api/v1/auth/login`);
      const response = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        {
          emailOrUsername,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login response:", JSON.stringify(response.data, null, 2));
      const { user: userData, token } = response.data;
      setAuthToken(token);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
      console.log("User logged in:", userData);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        console.error("Error response:", JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/register`,
        {
          data: {
            attributes: userData,
          },
        },
        { withCredentials: true }
      );
      const { user: registeredUser, token } = response.data;
      setAuthToken(token);
      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
      localStorage.setItem("token", token);
      console.log("User registered:", registeredUser);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/api/v1/auth/logout`, {}, { withCredentials: true });
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    error,
    isInitialized,
    isLoading,
    login,
    logout,
    register,
    checkAuth,
  };

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
