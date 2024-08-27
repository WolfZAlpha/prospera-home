import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultInfoCard({ icon, title, description, direction, small, glowColor }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <MKBox
        lineHeight={1}
        p={direction === "center" ? 2 : 0}
        textAlign={direction}
        sx={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${glowColor}`,
          boxShadow: `0 0 15px ${glowColor}`,
          transition: "all 0.3s ease-in-out",
          borderRadius: 2,
          p: 3,
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            boxShadow: `0 0 25px ${glowColor}`,
          },
        }}
      >
        <MKBox
          sx={{
            color: glowColor,
            fontSize: direction === "center" ? "3rem" : "2.5rem",
            mb: 1,
            filter: `drop-shadow(0 0 5px ${glowColor})`,
          }}
        >
          {icon}
        </MKBox>
        <MKTypography
          variant="h5"
          fontWeight="bold"
          mt={direction === "center" ? 1 : 2}
          mb={1.5}
          color="white"
        >
          {title}
        </MKTypography>
        <MKTypography
          variant={small ? "button" : "body2"}
          color="text"
          pr={direction === "left" ? 6 : 0}
          pl={direction === "right" ? 6 : 0}
          sx={{ color: "rgba(255,255,255,0.8)" }}
        >
          {description}
        </MKTypography>
      </MKBox>
    </motion.div>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  direction: "left",
  small: false,
  glowColor: "#00FFFF",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
  glowColor: PropTypes.string,
};

export default DefaultInfoCard;
