/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PROSPERA DEFI PLATFORM React examples
import HorizontalTeamCard from "./HorizontalTeamCard";

// Images
import team1 from "./TeamPics/z.jpg";
import team2 from "./TeamPics/7w.jpg";
import team3 from "./TeamPics/ck.jpg";
import team4 from "./TeamPics/ro.jpg";

function Team() {
  const cardStyle = (theme) => ({
    "& .MuiCard-root": {
      backgroundColor: theme.palette.black.main,
      boxShadow: `0 0 20px ${theme.functions.rgba("#01ff02", 0.4)}`,
      border: `${theme.borders.borderWidth[1]} solid ${theme.functions.rgba("#01ff02", 0.2)}`,
      transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
      transformOrigin: "50% 0",
      backfaceVisibility: "hidden",
      willChange: "transform, box-shadow",
      transition: "transform 200ms ease-out, box-shadow 200ms ease-out",

      "&:hover": {
        transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        boxShadow: `0 0 30px ${theme.functions.rgba("#01ff02", 0.6)}`,
      },

      "& .MuiTypography-root": {
        color: theme.palette.white.main,
      },
    },
  });

  return (
    <MKBox
      component="section"
      position="relative"
      py={12}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The PROSPERA Team
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} sx={cardStyle}>
              <HorizontalTeamCard
                image={team1}
                name="Z"
                position={{ color: "pros", label: "Founder/Lead Dev & A.I Engineer" }}
                description="You conquer, or you're crushed—there’s no mercy for the weak, and no place in history for the defeated. PROSPERA will shatter the status-quo."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} sx={cardStyle}>
              <HorizontalTeamCard
                image={team2}
                name="70neW0lf"
                position={{ color: "pros", label: "CFO" }}
                description="All encompasing financial applications are the norm for Web2, and for Web3 to compete, you do need a DeFi protocol that bridges the gap."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }} sx={cardStyle}>
              <HorizontalTeamCard
                image={team3}
                name="Connor Kemet"
                position={{ color: "pros", label: "COO" }}
                description="I'm the new guy."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }} sx={cardStyle}>
              <HorizontalTeamCard
                image={team4}
                name="RandOver"
                position={{ color: "pros", label: "CMO" }}
                description="I'm the newest guy."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
