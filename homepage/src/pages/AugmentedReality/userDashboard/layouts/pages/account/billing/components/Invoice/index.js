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
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import { IoDocumentText } from "react-icons/io5";

function Invoice({ date, id, price, noGutter }) {
  return (
    <PDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="32px"
    >
      <PDBox lineHeight={1}>
        <PDTypography display="block" variant="button" fontWeight="medium" color="white">
          {date}
        </PDTypography>
        <PDTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </PDTypography>
      </PDBox>
      <PDBox display="flex" alignItems="center">
        <PDTypography variant="button" fontWeight="regular" color="text">
          {price}
        </PDTypography>
        <PDBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <IoDocumentText color="#fff" size="15px" />
          <PDTypography variant="button" fontWeight="medium" color="text">
            &nbsp;PDF
          </PDTypography>
        </PDBox>
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
