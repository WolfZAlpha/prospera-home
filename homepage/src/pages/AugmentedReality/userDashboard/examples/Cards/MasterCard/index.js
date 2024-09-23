/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import billingCard from "../../../assets/images/billing-background-card.png";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PropTypes from "prop-types";
import { RiMastercardFill } from "react-icons/ri";

function MasterCard({ color, number, valid, cvv }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card
      sx={{
        background: `url('${billingCard}')`,
        backdropfilter: "blur(31px)",
        backgroundSize: "cover",
      }}
    >
      <PDBox p={2} pt={0}>
        <PDBox
          color="white"
          lineHeight={0}
          display="flex"
          justifyContent="space-beetween"
          alignItems="center"
          width="100%"
          sx={{ width: "100%" }}
        >
          <PDTypography color="white" variant="lg" fontWeight="bold" mr="auto">
            Dashboard UI
          </PDTypography>
          <RiMastercardFill size="48px" color="white" />
        </PDBox>
        <PDTypography
          variant="h4"
          color="white"
          mt="auto"
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            mt: 8,
            pb: 1,
            [breakpoints.only("sm")]: {
              fontSize: "22px",
            },
            [breakpoints.only("lg")]: {
              fontSize: "20px",
            },
          })}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </PDTypography>
        <PDBox display="flex" justifyContent="space-between" alignItems="center">
          <PDBox display="flex" alignItems="center">
            <PDBox mr={3} lineHeight={1}>
              <PDTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                VALID THRU
              </PDTypography>
              <PDTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {valid}
              </PDTypography>
            </PDBox>
            <PDBox lineHeight={1}>
              <PDTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                CVV
              </PDTypography>
              <PDTypography variant="h6" color="white" fontWeight="medium">
                {cvv}
              </PDTypography>
            </PDBox>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["white", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  valid: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
};

export default MasterCard;
