import React from "react";
import { Container, Grid, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Lightbulb, TrendingUp, Shield, RefreshCcw } from "lucide-react";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "./DefaultInfoCard";

const aiModelData = [
  { name: "V1", winRate: 82 },
  { name: "V2", winRate: 91.35 },
  { name: "V3", winRate: 99.3 },
];

const omnv3PerformanceData = [
  { month: "Feb", value: 4280.37 },
  { month: "Mar", value: 176000 },
  { month: "Apr", value: 500000 },
  { month: "May", value: 1200000 },
  { month: "Jun", value: 2000000 },
  { month: "Jul", value: 2800000 },
  { month: "Aug", value: 3200000 },
];

const DynamicBackground = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      zIndex: -1,
    }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#000000" />
      <g fill="none" stroke="#00FFFF" strokeWidth="2">
        <path d="M0 0 L100% 100%" opacity="0.2">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0 0 L100% 100%;
              M-10% -10% L110% 110%;
              M0 0 L100% 100%
            "
          />
        </path>
      </g>
      <g fill="none" stroke="#FF00FF" strokeWidth="2">
        <path d="M100% 0 L0 100%" opacity="0.2">
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            values="
              M100% 0 L0 100%;
              M110% -10% L-10% 110%;
              M100% 0 L0 100%
            "
          />
        </path>
      </g>
    </svg>
  </Box>
);

function Information() {
  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        position: "relative",
        color: "white",
        overflow: "hidden",
        minHeight: "100vh",
        backgroundColor: "#000000",
      }}
    >
      <DynamicBackground />
      <Container maxWidth="lg">
        <MKTypography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 6,
            color: "#00FFFF",
            textShadow: "0 0 10px rgba(0,255,255,0.5)",
          }}
        >
          Revolutionizing DeFi with PROSPERA
        </MKTypography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MKTypography variant="h4" gutterBottom sx={{ color: "#00FFFF" }}>
              About PROSPERA
            </MKTypography>
            <MKTypography variant="body1" paragraph sx={{ color: "rgba(255,255,255,0.8)" }}>
              PROSPERA introduces a revolutionary approach to hedge fund access through
              cryptocurrency. Our platform leverages advanced AI and blockchain technology to
              democratize sophisticated investment strategies, previously reserved for
              high-net-worth individuals and institutional investors. With PROSPERA, retail
              investors can now participate in high-yield investments, breaking down traditional
              barriers and promoting financial inclusivity.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box height={300} sx={{ filter: "drop-shadow(0 0 10px rgba(0,255,255,0.3))" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aiModelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#00FFFF" />
                  <YAxis stroke="#00FFFF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid #00FFFF",
                      boxShadow: "0 0 10px rgba(0,255,255,0.3)",
                    }}
                    itemStyle={{ color: "#00FFFF" }}
                  />
                  <Bar
                    dataKey="winRate"
                    fill="#00FFFF"
                    shape={({ x, y, width, height }) => (
                      <rect x={x} y={y} width={width} height={height} fill="#00FFFF" />
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <MKTypography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "rgba(255,255,255,0.7)" }}
            >
              AI Model Performance Comparison
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <MKTypography
              variant="h4"
              gutterBottom
              sx={{ color: "#01ff02", textShadow: "0 0 10px rgba(1,255,2,0.5)" }}
            >
              OMNv3 Live Environment Test Results
            </MKTypography>
            <MKTypography variant="body1" paragraph sx={{ color: "rgba(255,255,255,0.8)" }}>
              PROSPERA&apos;s OMNv3 (OmniMind_Nexus) has demonstrated exceptional performance in a
              live testing environment. Starting with $4,280.37 in February 2024, it rapidly grew to
              $176,000 by March and continued its impressive growth, reaching over $3.2 million by
              August. This showcases our AI&apos;s unparalleled ability to generate returns in
              real-world market conditions.
            </MKTypography>
            <Box height={300} sx={{ filter: "drop-shadow(0 0 10px rgba(1,255,2,0.3))" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={omnv3PerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#01ff02" />
                  <YAxis
                    stroke="#01ff02"
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid #01ff02",
                      boxShadow: "0 0 10px rgba(1,255,2,0.3)",
                    }}
                    itemStyle={{ color: "#01ff02" }}
                    formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#01ff02"
                    strokeWidth={2}
                    dot={{ fill: "#01ff02", stroke: "#01ff02", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <DefaultInfoCard
                  icon={<Lightbulb size={40} color="#00FFFF" />}
                  title="AI-Powered Strategies"
                  description="Utilizing advanced artificial intelligence to optimize investment strategies and maximize returns."
                  direction="center"
                  glowColor="#00FFFF"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DefaultInfoCard
                  icon={<TrendingUp size={40} color="#FF00FF" />}
                  title="Quarterly RevShare"
                  description="Participate in our revolutionary revenue sharing model, distributing profits to token holders."
                  direction="center"
                  glowColor="#FF00FF"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DefaultInfoCard
                  icon={<Shield size={40} color="#01ff02" />}
                  title="Advanced Security"
                  description="State-of-the-art security measures including blacklist and pause functions to protect user assets."
                  direction="center"
                  glowColor="#01ff02"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DefaultInfoCard
                  icon={<RefreshCcw size={40} color="#FFA500" />}
                  title="Dynamic Staking"
                  description="Innovative staking mechanism with flexible and locked options for optimized rewards."
                  direction="center"
                  glowColor="#FFA500"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
