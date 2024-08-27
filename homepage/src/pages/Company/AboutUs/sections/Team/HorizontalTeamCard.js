// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ image, name, position, description }) {
  return (
    <Card
      sx={{
        mt: 3,
        backgroundColor: "black", // Ensure the card background is black
        borderRadius: "16px", // Rounded corners for the card
        boxShadow:
          "0 0 20px 5px rgba(0, 255, 255, 0.5), 0 0 20px 5px rgba(255, 0, 255, 0.5), 0 0 20px 5px rgba(255, 255, 0, 0.5)", // Multi-color glow effect
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2} sx={{ backgroundColor: "black" }}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              sx={{
                boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.3)", // Optional: image shadow for depth
              }}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto", backgroundColor: "black" }}>
          {" "}
          {/* Ensure the grid's background is black */}
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5" color="pros">
              {" "}
              {/* Use the "PROS" color */}
              {name}
            </MKTypography>
            <MKTypography variant="h6" color="white" mb={1}>
              {" "}
              {/* Set the subtitle color to white */}
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="white">
              {" "}
              {/* Set the description text to white */}
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "pros", // Ensure "pros" is defined in your theme
      "black",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
