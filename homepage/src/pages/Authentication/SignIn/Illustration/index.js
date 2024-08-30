import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";

// @mui material components
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication layout components
import IllustrationLayout from "pages/Authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/backgrounds/DesktopBackgrounds/EvilFaces/EvilFace1.png";

function Illustration() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Attempting to sign in with:", { emailOrUsername, password });

      const response = await login(emailOrUsername, password);

      console.log("Sign-in response:", response);

      if (response.message === "Logged in successfully") {
        navigate("/pages/augmented-reality");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred during sign in");
    }
  };

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email/username and password to sign in"
      illustration={{
        image: bgImage,
        title: "PROSPERA DEFI",
        description: "Enter the future of decentralized finance",
      }}
    >
      <MKBox component="form" role="form" onSubmit={handleSignIn}>
        <MKBox mb={2}>
          <MKInput
            type="text"
            label="Email or Username"
            fullWidth
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <Icon fontSize="small" color="inherit">
                  email
                </Icon>
              ),
            }}
          />
          <MKInput
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <Icon fontSize="small" color="inherit">
                  lock
                </Icon>
              ),
            }}
          />
        </MKBox>
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MKTypography>
        </MKBox>
        {error && (
          <MKTypography variant="caption" color="error" fontWeight="light">
            {error}
          </MKTypography>
        )}
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" size="large" fullWidth type="submit">
            Sign In
          </MKButton>
        </MKBox>
        <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MKTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </IllustrationLayout>
  );
}

export default Illustration;
