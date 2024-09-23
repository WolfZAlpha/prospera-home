import React, { useState, useContext, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Grid, Checkbox } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import CoverLayout from "./layout";
import { AuthContext } from "contexts/AuthContext";
import { BetaContext } from "contexts/BetaContext";
import { getTokenBalance, checkTokenHolding } from "services/api";
import MatrixRain from "./background";

function Cover() {
  const navigate = useNavigate();
  const { loading, error: authError, register } = useContext(AuthContext);
  const { isBetaMode, requestWhitelist } = useContext(BetaContext);

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRequestWhitelist = useCallback(async () => {
    try {
      await requestWhitelist(formData.arbitrumWallet);
      setPopupContent(`
        <p>Your whitelist request has been submitted.</p>
        <p>Please check back later for approval status.</p>
        <button onclick="window.closePopup()">Close</button>
      `);
      setShowPopup(true);
    } catch (error) {
      setPopupContent(`
        <p>Error requesting whitelist access: ${error.message}</p>
        <button onclick="window.closePopup()">Close</button>
      `);
      setShowPopup(true);
    }
  }, [formData.arbitrumWallet, requestWhitelist]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    navigate("/authentication/sign-in/illustration");
  }, [navigate]);

  useEffect(() => {
    window.handleRequestWhitelist = handleRequestWhitelist;
    window.closePopup = closePopup;

    return () => {
      delete window.handleRequestWhitelist;
      delete window.closePopup;
    };
  }, [handleRequestWhitelist, closePopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Form submission started");

    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms and Conditions");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    try {
      console.log("Submitting registration data:", {
        ...formData,
        password: "[REDACTED]",
        password_confirmation: "[REDACTED]",
      });

      const response = await register(formData);

      console.log("Registration response:", response);

      if (response && response.message === "Registered successfully") {
        const hasTokens = await checkTokenHolding(formData.arbitrumWallet);
        const tokenBalance = await getTokenBalance(formData.arbitrumWallet);

        console.log("Token holding check:", { hasTokens, tokenBalance });

        if (isBetaMode) {
          if (hasTokens) {
            setPopupContent(`
              <p>Welcome to PROSPERA! You hold ${tokenBalance} $PROS tokens.</p>
              <p>The platform is currently in beta mode. Would you like to request whitelist access?</p>
              <button onclick="window.handleRequestWhitelist()">Request Whitelist Access</button>
            `);
          } else {
            setPopupContent(`
              <p>Welcome to PROSPERA! You currently hold ${tokenBalance} $PROS tokens.</p>
              <p>To participate in the beta, you need at least 5000 $PROS tokens.</p>
              <p>Head over to our ICO page to purchase more $PROS tokens.</p>
              <a href="https://www.prosperaico.com" target="_blank" rel="noopener noreferrer">
                <button>Go to ICO Page</button>
              </a>
            `);
          }
        } else {
          setPopupContent(`
            <p>Welcome to PROSPERA! You've successfully registered.</p>
            <p>You currently hold ${tokenBalance} $PROS tokens.</p>
            <button onclick="window.closePopup()">Go to Sign In</button>
          `);
        }

        setShowPopup(true);
      } else {
        console.warn("Unexpected registration response:", response);
        setError("An unexpected error occurred during registration. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response) {
        console.error("Error response:", err.response);
        setError(
          err.response.data?.message || "An error occurred during registration. Please try again."
        );
      } else if (err.request) {
        console.error("No response received:", err.request);
        setError(
          "No response received from the server. Please check your internet connection and try again."
        );
      } else {
        console.error("Error setting up request:", err.message);
        setError("An error occurred while setting up the request. Please try again.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authError) {
    return <div>Error: {authError.message}</div>;
  }

  return (
    <>
      <MatrixRain />
      <CoverLayout>
        <MKBox
          width="100%"
          position="absolute"
          bottom={16}
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <Card
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              boxShadow: "0 8px 32px 0 rgba(1, 255, 2, 0.37)",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="pros"
              borderRadius="lg"
              coloredShadow="pros"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Join PROSPERA
              </MKTypography>
              <MKTypography display="block" variant="button" color="white" my={1}>
                Enter your details to register
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox component="form" role="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MKInput
                      type="text"
                      label="Name"
                      name="name"
                      fullWidth
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput
                      type="text"
                      label="Username"
                      name="username"
                      fullWidth
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      type="email"
                      label="Email"
                      name="email"
                      fullWidth
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput
                      type="password"
                      label="Password"
                      name="password"
                      fullWidth
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput
                      type="password"
                      label="Confirm Password"
                      name="password_confirmation"
                      fullWidth
                      value={formData.password_confirmation}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      type="text"
                      label="Arbitrum Wallet Address"
                      name="arbitrumWallet"
                      fullWidth
                      value={formData.arbitrumWallet}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                </Grid>
                <MKBox display="flex" alignItems="center" ml={-1} mt={2}>
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
                    color="pros"
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
                  <MKButton type="submit" variant="gradient" color="pros" fullWidth>
                    Sign Up
                  </MKButton>
                </MKBox>
                <MKBox mt={3} mb={1} textAlign="center">
                  <MKTypography variant="button" color="text">
                    Already have an account?{" "}
                    <MKTypography
                      component={Link}
                      to="/authentication/sign-in/illustration"
                      variant="button"
                      color="pros"
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
        </MKBox>
        {showPopup && (
          <MKBox
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
          >
            <Card
              sx={{
                maxWidth: "400px",
                width: "100%",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                boxShadow: "0 8px 32px 0 rgba(1, 255, 2, 0.37)",
              }}
            >
              <MKBox p={3}>
                <MKTypography
                  variant="body1"
                  color="white"
                  dangerouslySetInnerHTML={{ __html: popupContent }}
                />
              </MKBox>
            </Card>
          </MKBox>
        )}
      </CoverLayout>
    </>
  );
}

export default Cover;
