/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function MiniReviewCard({ color, review, author }) {
  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      coloredShadow={color === "transparent" ? "none" : color}
      p={3}
    >
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={2}
      >
        &quot;{review}&quot;
      </MKTypography>
      <MKBox display="flex" alignItems="center" mt={3}>
        <MKAvatar src={author.image} alt={author.name} shadow="md" />
        <MKBox pl={1.5} lineHeight={1}>
          <MKTypography
            display="block"
            variant="button"
            fontWeight="bold"
            color={color === "transparent" || color === "light" ? "dark" : "white"}
          >
            {author.name}
          </MKTypography>
          <MKTypography
            variant="caption"
            fontWeight="regular"
            color={color === "transparent" || color === "light" ? "text" : "white"}
          >
            {author.date}
          </MKTypography>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Setting default values for the props of MiniReviewCard
MiniReviewCard.defaultProps = {
  color: "transparent",
};

// Typechecking props for the MiniReviewCard
MiniReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  review: PropTypes.string.isRequired,
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniReviewCard;
