import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
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

const ComparisonSection = styled(MKBox)({
  position: "relative",
  padding: "120px 0",
  color: "#ffffff",
  overflow: "hidden",
  backgroundSize: "contain",
  backgroundPosition: "center",
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
const colors = {
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
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
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
    <ComparisonSection>
      <StarryBackground />
      <Box maxWidth="lg" margin="auto" px={3} style={{ position: "relative", zIndex: 1 }}>
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
                    <Bar dataKey="Prospera" fill={colors.Prospera} name="PROSPERA">
                      <LabelList dataKey="Prospera" position="right" fill="#ffffff" />
                    </Bar>
                    <Bar dataKey="Competitor" fill={colors.Competitor} name={selectedCompetitor}>
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
            <span style={{ color: colors.Prospera }}>PROSPERA</span> vs.{" "}
            <span style={{ color: colors.Competitor }}>{selectedCompetitor}</span>
          </MKTypography>
        </Box>

        <Box mt={6} textAlign="center">
          <MKButton
            variant="contained"
            color="info"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "4px",
              background: "linear-gradient(45deg, #00ff00 30%, #00cc00 90%)",
              boxShadow: "0 3px 5px 2px rgba(0, 255, 0, .3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 10px 4px rgba(0, 255, 0, .3)",
              },
            }}
          >
            Learn More About PROSPERA
          </MKButton>
        </Box>
      </Box>
    </ComparisonSection>
  );
};

export default CompetitorComparison;
