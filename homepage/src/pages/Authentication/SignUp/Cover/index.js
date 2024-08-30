import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication layout components
import CoverLayout from "pages/Authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

// Context
import { AuthContext } from "contexts/AuthContext";

function Cover() {
  const navigate = useNavigate();
  const { login, loading, error: authError } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    arbitrumWallet: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms and Conditions");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://api.prosperadefi.com/api/auth/register", {
        data: {
          attributes: {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
            arbitrumWallet: formData.arbitrumWallet,
          },
        },
      });

      if (response.data.message === "Registered successfully") {
        // Store the token
        localStorage.setItem("token", response.data.token);
        // Update auth context
        await login(formData.email, formData.password);
        // Redirect to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Or any loading component you prefer
  }

  if (authError) {
    return <div>Error: {authError.message}</div>; // Or any error component you prefer
  }

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            Enter your details to register
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
          <MKBox component="form" role="form" onSubmit={handleSubmit}>
            <MKBox mb={2}>
              <MKInput
                type="text"
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="text"
                label="Username"
                name="username"
                fullWidth
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="email"
                label="Email"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="password"
                label="Password"
                name="password"
                fullWidth
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="password"
                label="Confirm Password"
                name="password_confirmation"
                fullWidth
                value={formData.password_confirmation}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="text"
                label="Arbitrum Wallet Address"
                name="arbitrumWallet"
                fullWidth
                value={formData.arbitrumWallet}
                onChange={handleInputChange}
                required
              />
            </MKBox>
            <MKBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                name="agreeToTerms"
              />
              <MKTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MKTypography>
              <MKTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MKTypography>
            </MKBox>
            {error && (
              <MKTypography variant="caption" color="error" fontWeight="light">
                {error}
              </MKTypography>
            )}
            <MKBox mt={3} mb={1}>
              <MKButton type="submit" variant="gradient" color="info" fullWidth>
                Sign Up
              </MKButton>
            </MKBox>
            <MKBox mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                Already have an account?{" "}
                <MKTypography
                  component={Link}
                  to="/authentication/sign-in/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MKTypography>
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
