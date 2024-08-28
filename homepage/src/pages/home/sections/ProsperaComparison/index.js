import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Card, CardContent, Button, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from "recharts";
import * as THREE from "three";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import { ReactComponent as BlockchainAnimation } from "./blockchainanimation.svg";

const ProsperaComparisonSection = styled(MKBox)({
  position: "relative",
  padding: "120px 0",
  color: "#ffffff",
  overflow: "hidden",
  background: "black",
});

const TitleBackdrop = styled(Box)({
  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
  marginBottom: "40px",
  paddingBottom: "20px",
});

const ComparisonCard = styled(Card)({
  background: "rgba(10, 10, 10, 0.8)",
  backdropFilter: "blur(20px)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});

const CompanyButton = styled(Button)(({ active }) => ({
  color: active ? "#ffffff" : "#0088FE",
  background: active ? "#0088FE" : "transparent",
  border: `1px solid ${active ? "#0088FE" : "rgba(255, 255, 255, 0.3)"}`,
  borderRadius: "20px",
  padding: "5px 15px",
  margin: "0 5px",
  fontSize: "0.8rem",
  transition: "all 0.3s ease",
  "&:hover": {
    background: active ? "#0088FE" : "rgba(255, 255, 255, 0.1)",
  },
}));

const data = {
  "AI-Driven Strategies": {
    Prospera: 90,
    "Yearn Finance": 70,
    "Rari Capital": 70,
    BarnBridge: 60,
    "Alpha Finance": 60,
  },
  "Security Features": {
    Prospera: 100,
    "Yearn Finance": 80,
    "Rari Capital": 70,
    BarnBridge: 80,
    "Alpha Finance": 70,
  },
  "Staking Options": {
    Prospera: 80,
    "Yearn Finance": 90,
    "Rari Capital": 80,
    BarnBridge: 70,
    "Alpha Finance": 80,
  },
  "Deflationary Tokenomics": {
    Prospera: 90,
    "Yearn Finance": 70,
    "Rari Capital": 70,
    BarnBridge: 60,
    "Alpha Finance": 60,
  },
  "Community Engagement": {
    Prospera: 80,
    "Yearn Finance": 70,
    "Rari Capital": 80,
    BarnBridge: 70,
    "Alpha Finance": 70,
  },
};

const features = Object.keys(data);
const competitors = ["Yearn Finance", "Rari Capital", "BarnBridge", "Alpha Finance"];
const chartColors = {
  Prospera: "#00ff00",
  Competitor: "#0088FE",
};

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
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
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
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0 }}
    />
  );
};

const CompetitorComparison = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(competitors[0]);

  const chartData = features.map((feature) => ({
    name: feature,
    Prospera: data[feature].Prospera,
    Competitor: data[feature][selectedCompetitor],
  }));

  return (
    <Box>
      <TitleBackdrop>
        <MKTypography variant="h2" align="center" color="white" fontWeight="bold">
          PROSPERA: Redefining the Future of Finance
        </MKTypography>
      </TitleBackdrop>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ComparisonCard>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
                <MKTypography variant="h5" color="white" fontWeight="bold">
                  Performance Comparison
                </MKTypography>
              </Box>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" domain={[0, 100]} stroke="#ffffff" />
                  <YAxis dataKey="name" type="category" width={150} stroke="#ffffff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "4px",
                    }}
                  />
                  <Bar dataKey="Prospera" fill={chartColors.Prospera} name="PROSPERA">
                    <LabelList dataKey="Prospera" position="right" fill="#ffffff" />
                  </Bar>
                  <Bar dataKey="Competitor" fill={chartColors.Competitor} name={selectedCompetitor}>
                    <LabelList dataKey="Competitor" position="right" fill="#ffffff" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </ComparisonCard>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        {competitors.map((company) => (
          <CompanyButton
            key={company}
            active={company === selectedCompetitor}
            onClick={() => setSelectedCompetitor(company)}
          >
            {company}
          </CompanyButton>
        ))}
      </Box>

      <Box mt={2} textAlign="center">
        <MKTypography variant="h6" color="white">
          <span style={{ color: chartColors.Prospera }}>PROSPERA</span> vs.{" "}
          <span style={{ color: chartColors.Competitor }}>{selectedCompetitor}</span>
        </MKTypography>
      </Box>
    </Box>
  );
};

const StakingFeature = ({ title, description, icon, color }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderRadius: borders.borderRadius.lg,
        padding: 3,
        border: `1px solid ${color}`,
        boxShadow: `0 0 15px ${color}`,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: `0 0 25px ${color}`,
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {icon}
        <MKTypography variant="h6" color={color} ml={2} fontWeight="bold">
          {title}
        </MKTypography>
      </Box>
      <MKTypography variant="body2" color="white" fontSize="0.9rem">
        {description}
      </MKTypography>
    </Box>
  );
};

StakingFeature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

const ProsperaStaking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        background: "rgba(0, 0, 0, 0)",
        overflow: "hidden",
        position: "relative",
        "& .container": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& #redblocks > *": {
          transform: "translate3d(160px, -93px, 0)",
          animation: "moveblocks 4s 1s ease infinite",
          fill: "#01ff02",
        },
        "@keyframes moveblocks": {
          "0%": {
            transform: "translate3d(160px, -93px, 0)",
          },
          "50%, 100%": {
            transform: "translate(0)",
          },
        },
        "& #firstBlock": {
          transform: "translate3d(160px, -93px, 0)",
          animation: "firstBlock 4s 1s ease infinite",
          fill: "#01ff02",
        },
        "& #blockdis": {
          animation: "blockdis 4s 1s ease infinite",
        },
        "@keyframes blockdis": {
          "30%": {
            opacity: 1,
          },
          "40%, 100%": {
            opacity: 0,
            transform: "translate3d(-160px, 93px, 0)",
          },
        },
        "@keyframes firstBlock": {
          "0%, 15%": {
            opacity: 0,
          },
          "40%, 100%": {
            opacity: 1,
          },
        },
        "& #redblocksparticles g:nth-child(n) polygon": {
          opacity: 0.35,
          animation: "glow 4s 1s ease infinite",
          fill: "#01ff02",
        },
        "@keyframes glow": {
          "0%, 45%": {
            opacity: 0,
          },
          "60%, 100%": {
            opacity: 0.35,
          },
        },
        "& #redblocksparticles g:nth-child(n) g circle:nth-child(n)": {
          animation: "dots 4s calc(1050ms + (var(--i, 0) * 50ms)) ease infinite",
        },
        "@keyframes dots": {
          "0%, 35%": {
            transform: "translate(0)",
            opacity: 0,
          },
          "60%, 80%": {
            transform: "translate(55px, -35px)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(55px, -35px)",
            opacity: 0,
          },
        },
        "& #purplebg > *": {
          animation: "up 2s calc(500ms * var(--i, 0)) ease infinite alternate",
        },
        "@keyframes up": {
          to: {
            transform: "translate(0, -25px)",
          },
        },
        "& #bottomparticles > *, & #bottomparticles2 > *, & #redglowparticles > *": {
          animation:
            "particles 4s calc(300ms * var(--i, 0)) ease infinite alternate, p 2s ease infinite alternate",
        },
        "@keyframes particles": {
          "0%, 100%": {
            transform: "translate(0)",
          },
          "50%": {
            transform: "translate(10px, 15px)",
          },
        },
        "@keyframes p": {
          "85%, 100%": {
            opacity: 0,
          },
        },
        "& .particlespoly": {
          animation: "p 2s ease infinite alternate",
        },
        "& #d-app g:nth-child(n), & #d-apps2 g:nth-child(n)": {
          animation: "updown 2s calc(200ms * var(--i, 0)) ease-in-out infinite alternate",
        },
        "& #d-apps2wrapper g:nth-child(3) g > circle:nth-child(n), & #d-appswrapper g:nth-child(2) g > circle:nth-child(n)":
          {
            animation: "updown 2s calc(50ms * var(--i, 0)) ease infinite alternate",
          },
        "@keyframes updown": {
          "100%": {
            transform: "translate(0, -20px)",
          },
        },
        "& #Layer_1 > g:nth-child(2) > g:nth-child(18) > g:nth-child(12)": {
          animation: "arrows 1s ease-in-out infinite alternate, p 2s ease infinite alternate",
        },
        "@keyframes arrows": {
          to: {
            transform: "translate(25px, 25px)",
          },
        },
        "& #Layer_1 > g:nth-child(2) > g:nth-child(17) > g:nth-child(13)": {
          animation: "arrows2 1s ease-in-out infinite alternate, p 2s ease infinite alternate",
        },
        "@keyframes arrows2": {
          to: {
            transform: "translate(-25px, -25px)",
          },
        },
        "& #Layer_1 > g:nth-child(2) > g:nth-child(17) > g:nth-child(12)": {
          animation: "arrows 1s ease-in-out infinite alternate, p 2s ease infinite alternate",
        },
        html: {
          background: "rgba(12, 0, 25, 0)",
        },
        "& #redblocks polygon, & #redblocksparticles polygon": {
          fill: "#01ff02",
        },
        "& #redglowparticles polygon": {
          fill: "#01ff02",
        },
        "& #bottomparticles polygon, & #bottomparticles2 polygon": {
          fill: "#01ff02",
        },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <MKBox mb={4}>
            <MKTypography
              variant="h2"
              color="white"
              textGradient
              fontWeight="bold"
              sx={{
                backgroundImage: `linear-gradient(to right, ${colors.pros.main}, ${colors.pros.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PROSPERA Staking Mechanism
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={2}>
              Unlock AI-driven investments and earn quarterly revenue shares with our innovative
              staking system.
            </MKTypography>
          </MKBox>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StakingFeature
                title="Dynamic Rewards"
                description="Optimal rewards distribution based on active stakers and total staked amount."
                icon={
                  <i
                    className="fas fa-chart-line"
                    style={{ fontSize: "1.5rem", color: colors.pros.main }}
                  />
                }
                color={colors.pros.main}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StakingFeature
                title="Flexible Options"
                description="Choose Locked (60k $PROS) or Flexible (70k $PROS) staking to suit your needs."
                icon={
                  <i
                    className="fas fa-lock-open"
                    style={{ fontSize: "1.5rem", color: colors.pros.main }}
                  />
                }
                color={colors.pros.main}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StakingFeature
                title="Quarterly RevShare"
                description="Earn a portion of the platform's quarterly profits through revenue sharing."
                icon={
                  <i
                    className="fas fa-money-bill-wave"
                    style={{ fontSize: "1.5rem", color: colors.pros.main }}
                  />
                }
                color={colors.pros.main}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StakingFeature
                title="Fair Distribution"
                description="Accurate and equitable distribution of rewards to all participants."
                icon={
                  <i
                    className="fas fa-balance-scale"
                    style={{ fontSize: "1.5rem", color: colors.pros.main }}
                  />
                }
                color={colors.pros.main}
              />
            </Grid>
          </Grid>
          <MKBox mt={4} textAlign="center">
            <MKButton
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
              Join Whitelist Now
            </MKButton>
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <MKBox
            sx={{
              width: "100%",
              height: isMobile ? "300px" : "400px",
              position: "relative",
              overflow: "hidden",
              borderRadius: borders.borderRadius.lg,
              boxShadow: boxShadows.lg,
              background: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(10px)",
            }}
          >
            <BlockchainAnimation style={{ width: "100%", height: "100%" }} />
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
  );
};

const ProsperaComparison = () => {
  return (
    <ProsperaComparisonSection>
      <StarryBackground />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <CompetitorComparison />
        <ProsperaStaking />
      </Container>
    </ProsperaComparisonSection>
  );
};

export default ProsperaComparison;
