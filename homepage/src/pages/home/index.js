/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// PROSPERA DEFI PLATFORM React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "./sections/footer";

// Presentation page sections
import ProsperaEcoSystem from "pages/home/sections/ProsperaEcoSystem";
import Roadmap from "./sections/Roadmap";
import ProsperaComparison from "./sections/ProsperaComparison";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import ParticleVortex from "../../assets/images/backgrounds/HeroBackgrounds/ParticleVortex";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StarryBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });

    const starVertices = [];
    for (let i = 0; i < 20000; i++) {
      // Doubled from 10000 to 20000
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0002;
      stars.rotation.z += 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        pointerEvents: "none",
      }}
    />
  );
};

function Presentation() {
  return (
    <>
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
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* ParticleVortex */}
        <ParticleVortex
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        {/* Main content */}
        <MKBox
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <Container>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} lg={8} textAlign="center">
                <MKTypography
                  variant="h1"
                  color="white"
                  mb={3}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  PROSPERA{" "}
                  <MKBadge
                    badgeContent="$pros"
                    size="lg"
                    variant="contained"
                    color="pros"
                    container
                    sx={{ verticalAlign: "super" }}
                  />
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                  Welcome to the Future of DEFI.
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Bottom elements */}
        <MKBox
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            pb: 3,
            px: 3,
          }}
        >
          {/* Scroll down indicator */}
          <MKBox
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "black",
              color: "pros",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%": {
                  boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
                },
                "70%": {
                  boxShadow: "0 0 0 10px rgba(255, 255, 255, 0)",
                },
                "100%": {
                  boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
                },
              },
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ArrowDownwardIcon sx={{ color: "white" }} />
          </MKBox>

          {/* Bridge to Arbitrum button */}
          <MKButton
            variant="joinico"
            color="black"
            component="a"
            href="https://bridge.arbitrum.io/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              boxShadow: "0 0 10px white",
              "&:hover": {
                backgroundColor: "black",
                boxShadow: "0 0 20px white",
              },
            }}
          >
            Bridge To Arbitrum
          </MKButton>
        </MKBox>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 0,
          mb: 4,
          backgroundColor: ({ palette: { black }, functions: { rgba } }) => rgba(black.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <StarryBackground />
        <ProsperaComparison />
        <ProsperaEcoSystem />
        <Roadmap />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
