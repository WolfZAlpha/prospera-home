/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PDInput from "../../../../components/PDInput";
import PDButton from "../../../../components/PDButton";
import PDSwitch from "../../../../components/PDSwitch";

// prospera defi dashboard custom components
import GradientBorder from "../../../../examples/GradientBorder";

// prospera defi dashboard assets
import radialGradient from "../../../../assets/theme/functions/radialGradient";
import palette from "../../../../assets/theme/base/colors";
import borders from "../../../../assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "../../components/CoverLayout";

// Images
import bgImage from "../../../../assets/images/background-cover-auth-signin.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Enter your email and password to sign in"
      image={bgImage}
      premotto={"INSPIRED BY THE FUTURE:"}
      motto={"PROSPERA DEFI DASHBOARD"}
    >
      <PDBox component="form" role="form">
        <PDBox mb={2}>
          <PDBox mb={1} ml={0.5}>
            <PDTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </PDTypography>
          </PDBox>
          <GradientBorder
            minWidth="100%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <PDInput
              type="email"
              placeholder="Your email..."
              sx={({ typography: { size } }) => ({
                fontSize: size.sm,
              })}
            />
          </GradientBorder>
        </PDBox>
        <PDBox mb={2}>
          <PDBox mb={1} ml={0.5}>
            <PDTypography component="label" variant="button" color="white" fontWeight="medium">
              Password
            </PDTypography>
          </PDBox>
          <GradientBorder
            minWidth="100%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <PDInput
              type="password"
              placeholder="Your password..."
              sx={({ typography: { size } }) => ({
                fontSize: size.sm,
              })}
            />
          </GradientBorder>
        </PDBox>
        <PDBox display="flex" alignItems="center">
          <PDSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <PDTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Remember me
          </PDTypography>
        </PDBox>
        <PDBox mt={4} mb={1}>
          <PDButton color="info" fullWidth>
            SIGN IN
          </PDButton>
        </PDBox>
        <PDBox mt={3} textAlign="center">
          <PDTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <PDTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="white"
              fontWeight="medium"
            >
              Sign up
            </PDTypography>
          </PDTypography>
        </PDBox>
      </PDBox>
    </CoverLayout>
  );
}

export default SignIn;
