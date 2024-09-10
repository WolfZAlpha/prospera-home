import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import * as THREE from "three";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import { ReactComponent as BlockchainAnimation } from "./blockchainanimation.svg";
import Table from "./Table";
import alphaFinanceLogo from "./companyImages/alpha-logo-vertical.svg";
import barnBridgeLogo from "./companyImages/barnbridge.png";
import prosperaLogo from "./companyImages/prospera.png";
import rariCapitalLogo from "./companyImages/rariCapital.jpeg";
import yearnFinanceLogo from "./companyImages/yfi.png";

const ProsperaComparisonSection = styled(MKBox)({
  position: "relative",
  padding: "120px 0",
  color: "#000000",
  overflow: "hidden",
  background: "black",
});

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
  const createDataRow = (company, tokenImageUrl, data) => ({
    company: [tokenImageUrl, company],
    ai_driven_strategies: (
      <MKBox>
        <MKTypography variant="h6" color="#01ff02">
          {data.ai_driven_strategies.score}
        </MKTypography>
        <MKTypography variant="caption" color="white">
          {data.ai_driven_strategies.description}
        </MKTypography>
      </MKBox>
    ),
    security_features: (
      <MKBox>
        <MKTypography variant="h6" color="#01ff02">
          {data.security_features.score}
        </MKTypography>
        <MKTypography variant="caption" color="white">
          {data.security_features.description}
        </MKTypography>
      </MKBox>
    ),
    staking_options: (
      <MKBox>
        <MKTypography variant="h6" color="#01ff02">
          {data.staking_options.score}
        </MKTypography>
        <MKTypography variant="caption" color="white">
          {data.staking_options.description}
        </MKTypography>
      </MKBox>
    ),
    deflationary_tokenomics: (
      <MKBox>
        <MKTypography variant="h6" color="#01ff02">
          {data.deflationary_tokenomics.score}
        </MKTypography>
        <MKTypography variant="caption" color="white">
          {data.deflationary_tokenomics.description}
        </MKTypography>
      </MKBox>
    ),
    community_engagement: (
      <MKBox>
        <MKTypography variant="h6" color="#01ff02">
          {data.community_engagement.score}
        </MKTypography>
        <MKTypography variant="caption" color="white">
          {data.community_engagement.description}
        </MKTypography>
      </MKBox>
    ),
  });

  const companyData = {
    Prospera: {
      tokenImageUrl: prosperaLogo,
      ai_driven_strategies: {
        score: 90,
        description: "Advanced AI algorithms for predictive analytics.",
      },
      security_features: {
        score: 100,
        description: "Best-in-class security with multi-layer encryption.",
      },
      staking_options: {
        score: 80,
        description: "Competitive staking returns with flexible options.",
      },
      deflationary_tokenomics: {
        score: 90,
        description: "Strong deflationary mechanics reducing token supply.",
      },
      community_engagement: {
        score: 80,
        description: "Active community with regular updates and events.",
      },
    },
    "Yearn Finance": {
      tokenImageUrl: yearnFinanceLogo,
      ai_driven_strategies: {
        score: 70,
        description: "Basic AI implementation with limited predictive power.",
      },
      security_features: {
        score: 80,
        description: "Strong security but occasional vulnerabilities.",
      },
      staking_options: { score: 90, description: "High staking rewards but higher risks." },
      deflationary_tokenomics: {
        score: 70,
        description: "Moderate deflationary model, not aggressive.",
      },
      community_engagement: {
        score: 70,
        description: "Good engagement but less frequent updates.",
      },
    },
    "Alpha Finance": {
      tokenImageUrl: alphaFinanceLogo,
      ai_driven_strategies: {
        score: 60,
        description: "Lacks sophisticated AI; mostly manual strategies.",
      },
      security_features: {
        score: 70,
        description: "Decent security, but lacks advanced protection.",
      },
      staking_options: { score: 80, description: "Balanced staking with average returns." },
      deflationary_tokenomics: {
        score: 60,
        description: "Weak deflationary features, minimal impact.",
      },
      community_engagement: {
        score: 70,
        description: "Average community involvement, less active.",
      },
    },
    "Rari Capital": {
      tokenImageUrl: rariCapitalLogo,
      ai_driven_strategies: { score: 70, description: "Moderate AI use but not fully optimized." },
      security_features: {
        score: 70,
        description: "Standard security protocols without extra layers.",
      },
      staking_options: {
        score: 80,
        description: "Standard staking features with moderate returns.",
      },
      deflationary_tokenomics: {
        score: 70,
        description: "Standard model with some deflationary aspects.",
      },
      community_engagement: {
        score: 80,
        description: "Engaged community with decent interaction.",
      },
    },
    BarnBridge: {
      tokenImageUrl: barnBridgeLogo,
      ai_driven_strategies: {
        score: 60,
        description: "Minimal AI, relying more on traditional methods.",
      },
      security_features: { score: 80, description: "Secure but not as robust as others." },
      staking_options: { score: 70, description: "Limited staking options with lower returns." },
      deflationary_tokenomics: {
        score: 60,
        description: "Minimal deflationary approach, focuses on other mechanisms.",
      },
      community_engagement: {
        score: 70,
        description: "Community is less active, fewer engagement opportunities.",
      },
    },
  };

  const rows = Object.entries(companyData).map(([company, data]) =>
    createDataRow(company, data.tokenImageUrl, data)
  );

  const columns = [
    { name: "company", align: "left" },
    { name: "ai_driven_strategies", align: "center" },
    { name: "security_features", align: "center" },
    { name: "staking_options", align: "center" },
    { name: "deflationary_tokenomics", align: "center" },
    { name: "community_engagement", align: "center" },
  ];

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MKBox mb={4}>
            <MKTypography variant="h3" color="white" textAlign="center" fontWeight="bold">
              PROSPERA Competitor Analysis
            </MKTypography>
          </MKBox>
          <MKBox mb={4}>
            <Table columns={columns} rows={rows} />
          </MKBox>
          <MKBox mb={4}>
            <MKTypography variant="caption" color="white" textAlign="left">
              The data used for the competitor analysis in the visualizations was constructed based
              on a hypothetical comparison designed to illustrate how Prospera could be positioned
              against other competitors like Yearn Finance, Alpha Finance, Rari Capital, and
              BarnBridge. The analysis was completed by various A.I chatBots such as ChatGPT4o,
              Claude.ai, and dolphin.
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="caption" color="white" textAlign="left">
              Based on the above data, Prospera consistently ranks at or near the top across all
              categories, particularly excelling in Security Features and AI-Driven Strategies with
              scores of 100% and 90%, respectively. Yearn Finance performs well in Staking Options
              (90%) but lags slightly in Deflationary Tokenomics and Community Engagement. Rari
              Capital and Alpha Finance show similar performance across most categories, while
              BarnBridge has strong Security Features but generally scores lower in other areas.
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
};

const StakingFeature = ({ title, description, icon, color, titleColor }) => {
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
        <MKTypography variant="h6" color={titleColor} ml={2} fontWeight="bold">
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
  titleColor: PropTypes.string.isRequired,
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
          { animation: "updown 2s calc(50ms * var(--i, 0)) ease infinite alternate" },
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
                titleColor="#01ff02"
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
                titleColor="#01ff02"
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
                titleColor="#01ff02"
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
                titleColor="#01ff02"
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
              Join ICO Now
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
