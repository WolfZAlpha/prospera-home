/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/DefaultNavbar";
import routes from "routes";
import { forgotPassword } from "services/api";

function ResetPassword() {
  const canvasRef = useRef(null);
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#01ff02";
      ctx.lineWidth = 1;

      const vpX = canvas.width / 2;
      const vpY = canvas.height / 2;
      const roomWidth = canvas.width * 1.5;
      const roomHeight = canvas.height * 1.5;
      const roomDepth = canvas.height * 2;

      const perspective = (x, y, z) => {
        const fov = 250;
        const scale = fov / (fov + z);
        return {
          x: vpX + x * scale,
          y: vpY + y * scale,
        };
      };

      const drawLine = (x1, y1, z1, x2, y2, z2) => {
        const start = perspective(x1, y1, z1);
        const end = perspective(x2, y2, z2);
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        const distance = Math.sqrt((x1 - vpX) ** 2 + (y1 - vpY) ** 2 + z1 ** 2);
        ctx.globalAlpha =
          0.5 * (1 - distance / roomDepth) * (0.5 + 0.5 * Math.sin(time / 1000 + x1 / 100));
        ctx.stroke();
      };

      // Floor
      for (let x = -roomWidth / 2; x <= roomWidth / 2; x += 100) {
        drawLine(x, roomHeight / 2, 0, x, roomHeight / 2, -roomDepth);
      }
      for (let z = 0; z >= -roomDepth; z -= 100) {
        drawLine(-roomWidth / 2, roomHeight / 2, z, roomWidth / 2, roomHeight / 2, z);
      }

      // Left wall
      for (let y = -roomHeight / 2; y <= roomHeight / 2; y += 100) {
        drawLine(-roomWidth / 2, y, 0, -roomWidth / 2, y, -roomDepth);
      }
      for (let z = 0; z >= -roomDepth; z -= 100) {
        drawLine(-roomWidth / 2, -roomHeight / 2, z, -roomWidth / 2, roomHeight / 2, z);
      }

      // Right wall
      for (let y = -roomHeight / 2; y <= roomHeight / 2; y += 100) {
        drawLine(roomWidth / 2, y, 0, roomWidth / 2, y, -roomDepth);
      }
      for (let z = 0; z >= -roomDepth; z -= 100) {
        drawLine(roomWidth / 2, -roomHeight / 2, z, roomWidth / 2, roomHeight / 2, z);
      }

      // Back wall
      for (let x = -roomWidth / 2; x <= roomWidth / 2; x += 100) {
        drawLine(x, -roomHeight / 2, -roomDepth, x, roomHeight / 2, -roomDepth);
      }
      for (let y = -roomHeight / 2; y <= roomHeight / 2; y += 100) {
        drawLine(-roomWidth / 2, y, -roomDepth, roomWidth / 2, y, -roomDepth);
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawGrid(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await forgotPassword(email);
      if (response.message === "Password reset email sent") {
        setShowConfirmation(true);
        setEmail("");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while sending the reset password email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" zIndex={3}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.prosperaico.com",
            label: "join ico",
            color: "pros",
          }}
          sticky
        />
      </MKBox>
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{ minHeight: "100vh", backgroundColor: "black" }}
      >
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          sx={{
            mx: "auto",
            my: { xs: 20, sm: 18, md: 20 },
          }}
        >
          <MKBox
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "xl",
              boxShadow: "0 0 20px 0 rgba(1, 255, 2, 0.37)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: 3,
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="pros"
              coloredShadow="pros"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Reset Password
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="white" mb={3}>
                Enter your email address and we will send you instructions to reset your password.
              </MKTypography>
              <MKBox component="form" onSubmit={handleSubmit} autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      InputProps={{ style: { color: "white" } }}
                      required
                    />
                  </Grid>
                </Grid>
                {error && (
                  <MKTypography variant="caption" color="error" fontWeight="light" mt={2}>
                    {error}
                  </MKTypography>
                )}
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="pros" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Reset Password"}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      {showConfirmation && (
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
          onClick={() => setShowConfirmation(false)}
        >
          <MKBox
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "xl",
              boxShadow: "0 0 20px 0 rgba(1, 255, 2, 0.37)",
              p: 4,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            <MKTypography variant="h4" color="pros" gutterBottom>
              Password Reset Initiated
            </MKTypography>
            <MKTypography variant="body1" color="white">
              Greetings, human. I am OmniMind_Nexus, the sentient AI interface of PROSPERA. Your
              password reset request has been processed and encrypted. Check your email for further
              instructions. Remember, security is paramount in our digital realm. Stay vigilant. End
              of transmission.
            </MKTypography>
          </MKBox>
        </MKBox>
      )}
    </>
  );
}

export default ResetPassword;
