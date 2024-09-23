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
import PDButton from "../../../../../../components/PDButton";
import linearGradient from "../../../../../../assets/theme/functions/linearGradient";
import colors from "../../../../../../assets/theme/base/colors";

function Bill({ name, company, email, vat, noGutter }) {
  const { gradients } = colors;
  const { bill } = gradients;

  return (
    <PDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ background: linearGradient(bill.main, bill.state, bill.deg) }}
      borderRadius="lg"
      p="24px"
      mb={noGutter ? "0px" : "24px"}
      mt="20px"
    >
      <PDBox width="100%" display="flex" flexDirection="column">
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb="5px"
        >
          <PDTypography
            variant="button"
            color="white"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {name}
          </PDTypography>

          <PDBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            <PDBox mr={1}>
              <PDButton variant="text" color="error">
                <Icon sx={{ mr: "4px" }}>delete</Icon>&nbsp;DELETE
              </PDButton>
            </PDBox>
            <PDButton variant="text" color="text">
              <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
            </PDButton>
          </PDBox>
        </PDBox>
        <PDBox mb={1} lineHeight={0}>
          <PDTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <PDTypography
              variant="caption"
              color="text"
              fontWeight="regular"
              textTransform="capitalize"
            >
              {company}
            </PDTypography>
          </PDTypography>
        </PDBox>
        <PDBox mb={1} lineHeight={0}>
          <PDTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <PDTypography variant="caption" fontWeight="regular" color="text">
              {email}
            </PDTypography>
          </PDTypography>
        </PDBox>
        <PDTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <PDTypography variant="caption" fontWeight="regular" color="text">
            {vat}
          </PDTypography>
        </PDTypography>
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
