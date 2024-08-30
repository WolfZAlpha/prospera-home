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

  const setAuthToken = useCallback((token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, []);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      try {
        const response = await axios.get(`${API_URL}/api/auth/check`, {
          withCredentials: true,
        });
        const userData = response.data.user;
        setUser(userData);
        console.log("User authenticated:", userData);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setError(error);
        setAuthToken(null);
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [setAuthToken]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (emailOrUsername, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          data: {
            attributes: {
              emailOrUsername,
              password,
            },
          },
        },
        { withCredentials: true }
      );
      const { user: userData, token } = response.data;
      setAuthToken(token);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("User logged in:", userData);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true });
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
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
