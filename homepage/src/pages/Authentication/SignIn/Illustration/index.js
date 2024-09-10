import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import { Grid, Switch } from "@mui/material";
import Icon from "@mui/material/Icon";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultNavbar from "components/DefaultNavbar";

// Routes
import routes from "routes";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const canvasRef = useRef(null);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Attempting to sign in with:", { emailOrUsername, password: "REDACTED" });

      const response = await login(emailOrUsername, password);

      console.log("Sign-in response:", JSON.stringify(response, null, 2));

      if (response.message === "Logged in successfully") {
        if (process.env.NODE_ENV === "development") {
          navigate("/pages/augmented-reality");
        } else {
          window.location.href = "https://ar.prosperadefi.com";
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        console.error("Error response:", JSON.stringify(err.response.data, null, 2));
      }
      setError(err.message || "An error occurred during sign in");
    }
  };

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
                Sign In
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="white" mb={3}>
                Enter your email/username and password to sign in
              </MKTypography>
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
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      style: { color: "white" },
                      startAdornment: (
                        <Icon fontSize="small" color="inherit">
                          email
                        </Icon>
                      ),
                    }}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="password"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      style: { color: "white" },
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
                    color="white"
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
                  <MKButton type="submit" variant="gradient" color="pros" fullWidth>
                    Sign In
                  </MKButton>
                </MKBox>
                <MKBox mt={3} textAlign="center">
                  <MKTypography variant="button" color="white">
                    Don&apos;t have an account?{" "}
                    <MKTypography
                      component={Link}
                      to="/authentication/sign-up/cover"
                      variant="button"
                      color="pros"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign up
                    </MKTypography>
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default SignIn;
