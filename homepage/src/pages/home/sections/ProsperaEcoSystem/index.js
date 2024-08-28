import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import bgImage from "./pebg.png";
import colors from "assets/theme/base/colors";

const FeatureBox = ({ title, description, color, sx }) => (
  <Box
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(10px)",
      borderRadius: "10px",
      padding: "20px",
      border: `1px solid ${color}`,
      boxShadow: `0 0 15px ${color}`,
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: `0 0 25px ${color}`,
      },
      ...sx,
    }}
  >
    <MKTypography variant="h6" color={colors.pros.main} mb={2} fontWeight="bold">
      {title}
    </MKTypography>
    <MKTypography variant="body2" color="white" fontSize="0.9rem">
      {description}
    </MKTypography>
  </Box>
);

FeatureBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

const OrbitingParticles = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    const colors = [0x00ff00, 0x00ffff, 0xff00ff];
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 1;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = new THREE.Color(colors[i % 3]);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    gsap.to(particles.rotation, {
      duration: 20,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });

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

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute" }} />;
};

const ProsperaText = () => (
  <Box sx={{ textAlign: "center" }}>
    <MKTypography variant="h4" textGradient color="pros" fontWeight="bold">
      PROSPERA
    </MKTypography>
    <MKTypography variant="body2" color="white">
      The technical stack powering all PROSPERA products.
    </MKTypography>
  </Box>
);

function ProsperaEcoSystem() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MKBox
      component="section"
      my={6}
      py={6}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: 2, borderLeft: "4px solid #00ff00" }}>
              <MKTypography variant="h6" color="pros" fontWeight="bold">
                PROSPERA Ecosystem
              </MKTypography>
            </Box>
            <MKTypography variant="h4" fontWeight="bold" color="white" mt={2}>
              Unlock the Future of Finance with PROSPERA
            </MKTypography>
            <MKTypography variant="body2" fontWeight="600" color="white" mt={2}>
              Access elite hedge fund strategies, harness the power of AI-driven investments, and
              earn quarterly revenue shares, all within a deflationary tokenomics model designed for
              long-term value.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: isMobile ? "left" : "right" }}>
            <MKTypography variant="body2" fontWeight="600" color="white">
              The <span style={{ color: colors.pros.main }}>PROSPERA</span> Ecosystem is engineered
              to revolutionize DeFi, offering unparalleled AI-driven strategies, democratized access
              to elite financial tools, and a unique deflationary model. Don&apos;t miss out on the
              future of finance - join <span style={{ color: colors.pros.main }}>PROSPERA</span>{" "}
              today and secure your place in the next generation of wealth creation.
            </MKTypography>
            <Button
              variant="joinico"
              href="https://www.prosperaico.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                backgroundColor: "black",
                color: colors.pros.main,
                border: `1px solid ${colors.pros.main}`,
                boxShadow: `0 0 15px ${colors.pros.main}`,
                "&:hover": {
                  backgroundColor: "black",
                  animation: "float 0.3s ease-in-out infinite alternate",
                },
                "@keyframes float": {
                  "0%": { transform: "translateY(0px)" },
                  "100%": { transform: "translateY(-5px)" },
                },
              }}
            >
              Join The ICO
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 6, position: "relative", height: isMobile ? "auto" : "600px" }}>
        {!isMobile && <OrbitingParticles />}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <ProsperaText />
          </Box>
        )}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {isMobile ? (
            <>
              <Grid item xs={12}>
                <ProsperaText />
              </Grid>
              <Grid item xs={12}>
                <FeatureBox
                  title="Democratized Hedge Fund Access"
                  description="Empowering everyone, from seasoned investors to newcomers. PROSPERA breaks down barriers to sophisticated investment opportunities."
                  color="#01ff02"
                />
              </Grid>
              <Grid item xs={12}>
                <FeatureBox
                  title="Quarterly Revenue Sharing"
                  description="Become a true stakeholder. Participate in our Quarterly RevShare program and earn a portion of the platform's revenue."
                  color="#01ff02"
                />
              </Grid>
              <Grid item xs={12}>
                <FeatureBox
                  title="AI-Driven Investment Strategies"
                  description="Powered by OmniMind_Nexus, our cutting-edge AI with a 99.3% win rate in market predictions."
                  color="#01ff02"
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={4}>
                <FeatureBox
                  title="Democratized Hedge Fund Access"
                  description="Empowering everyone, from seasoned investors to newcomers. PROSPERA breaks down barriers to sophisticated investment opportunities."
                  color="#01ff02"
                />
              </Grid>
              <Grid item xs={12} md={4} />
              <Grid item xs={12} md={4}>
                <FeatureBox
                  title="AI-Driven Investment Strategies"
                  description="Powered by OmniMind_Nexus, our cutting-edge AI with a 99.3% win rate in market predictions."
                  color="#01ff02"
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "300px",
                  }}
                >
                  <FeatureBox
                    title="Quarterly Revenue Sharing"
                    description="Become a true stakeholder. Participate in our Quarterly RevShare program and earn a portion of the platform's revenue."
                    color="#01ff02"
                  />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProsperaEcoSystem;
