import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
  50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const flowAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const RoadmapSection = styled("section")({
  padding: "0px 0",
  background: "#000000",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
});

const LandscapeContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  zIndex: 1,
});

const FlowingLine = styled("svg")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
});

const AnimatedPath = styled("path")({
  fill: "none",
  stroke: "rgba(0, 255, 255, 0.2)",
  strokeWidth: "2",
  strokeDasharray: "1000",
  strokeDashoffset: "1000",
  animation: `${flowAnimation} 20s linear infinite`,
});

const RoadmapContainer = styled(Container)({
  position: "relative",
  zIndex: 3,
});

const RoadmapItem = styled(Box)(({ theme, color }) => ({
  background: "rgba(0, 0, 0, 0.7)",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  border: `1px solid ${color}`,
  transition: "all 0.5s ease",
  animation: `${floatAnimation} 6s ease-in-out infinite, ${glowAnimation} 3s ease-in-out infinite`,
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto, sans-serif",
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: "#01ff02",
  textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
}));

const StageList = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  padding: 0,
  margin: 0,
  "& li": {
    fontFamily: "Roboto, sans-serif",
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.pxToRem(10),
    position: "relative",
    paddingLeft: theme.spacing(3),
    color: "#ffffff",
    "&::before": {
      content: '"▹"',
      color: "#01ff02",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: theme.typography.pxToRem(18),
    },
  },
}));

const WireframeLandscape = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawLandscape = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 20;
      const amplitude = 100;
      const frequency = 0.01;

      ctx.strokeStyle = "#01ff02";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        for (let z = 0; z < canvas.height + gridSize; z += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(z - canvas.height / 2, 2)
          );
          const y = amplitude * Math.sin(frequency * distanceFromCenter + time * 0.001);

          // Apply perspective transformation
          const scale = 1 + z / canvas.height;
          const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2;
          const projectedY = canvas.height / 2 - y * scale + z / 2;

          if (z === 0) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }
        ctx.stroke();
      }

      // Draw perpendicular lines
      for (let z = 0; z < canvas.height + gridSize; z += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(z - canvas.height / 2, 2)
          );
          const y = amplitude * Math.sin(frequency * distanceFromCenter + time * 0.001);

          // Apply perspective transformation
          const scale = 1 + z / canvas.height;
          const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2;
          const projectedY = canvas.height / 2 - y * scale + z / 2;

          if (x === 0) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawLandscape);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawLandscape(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

const Roadmap = () => {
  const roadmapData = [
    {
      stage: "Stage 1",
      date: "Q2 - 2024",
      items: [
        "Ideation",
        "Proof of Concept",
        "Business Deck",
        "Security Audit",
        "ERC-20 Token on Arbitrum",
      ],
      color: "#01ff02",
    },
    {
      stage: "Stage 2",
      date: "Q3 - 2024",
      items: [
        "ICO - Mainnet Launch",
        "Whitepaper Release",
        "Cross-Chain Interoperability",
        "Smart Contract Upgrade",
        "Staking Contract Implementation",
      ],
      color: "#01ff02",
    },
    {
      stage: "Stage 3",
      date: "Q4 - 2024",
      items: [
        "Decentralized Finance Expansion",
        "Proof of Concept - Complete",
        "Privacy Enhancements",
        "Ecosystem Expansion",
        "PROSPERA Mobile App",
      ],
      color: "#01ff02",
    },
    {
      stage: "Stage 4",
      date: "Q1 - 2025",
      items: [
        "Websuite Expansion",
        "Scalability Improvements",
        "Global Community Expansion",
        "Hard-Money Crypto-Lending Beta-Test",
        "Legal Expansion",
      ],
      color: "#01ff02",
    },
    {
      stage: "Stage 5",
      date: "Q2 - 2025",
      items: [
        "Scalability Improvements",
        "User-Friendly Wallet Application",
        "Real-World Banking Wallet/Integration",
        "Achievement Sustainable Ecosystem",
        "Third Q-Div RevShare Dispersement to Stakers",
      ],
      color: "#01ff02",
    },
    {
      stage: "Stage 6",
      date: "Q3 - 2025",
      items: [
        "Global Expansion and Adoption",
        "Integrate RWA Components",
        "Websuite Expansion #2",
        "All Omnichain Expansion ICO's complete",
        "Fourth Q-Div RevShare Dispersement to Stakers",
      ],
      color: "#01ff02",
    },
  ];

  return (
    <RoadmapSection id="roadmap">
      <LandscapeContainer>
        <WireframeLandscape />
      </LandscapeContainer>
      <FlowingLine viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <AnimatedPath d="M0,500 Q250,300 500,500 T1000,500" />
        <AnimatedPath d="M0,600 Q250,400 500,600 T1000,600" style={{ animationDelay: "-5s" }} />
        <AnimatedPath d="M0,400 Q250,200 500,400 T1000,400" style={{ animationDelay: "-10s" }} />
      </FlowingLine>
      <RoadmapContainer>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "Roboto, sans-serif",
            color: "#01ff02",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            marginBottom: 4,
            textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          }}
        >
          Roadmap to the Future
        </Typography>
        <Typography
          variant="h6"
          align="center"
          paragraph
          sx={{
            fontFamily: "Roboto, sans-serif",
            color: "#ffffff",
            marginBottom: 6,
            maxWidth: "800px",
            margin: "0 auto 60px",
          }}
        >
          Embark on a journey through our visionary blockchain infrastructure, paving the way for
          unprecedented growth and innovation.
        </Typography>
        <Grid container spacing={4} position="relative">
          {roadmapData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 4 }}>
              <RoadmapItem color={item.color}>
                <StageTitle>
                  {item.stage} <br /> {item.date}
                </StageTitle>
                <StageList>
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </StageList>
              </RoadmapItem>
            </Grid>
          ))}
        </Grid>
      </RoadmapContainer>
    </RoadmapSection>
  );
};

export default Roadmap;
