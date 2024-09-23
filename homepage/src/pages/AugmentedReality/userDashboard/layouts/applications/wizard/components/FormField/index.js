/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDInput from "../../../../../components/PDInput";

function FormField({ label, ...rest }) {
  return (
    <>
      <PDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <PDTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
          color="white"
        >
          {label}
        </PDTypography>
      </PDBox>
      <PDInput
        sx={({ borders: { borderWidth }, palette: { borderCol } }) => ({
          border: `${borderWidth[1]} solid ${borderCol.main}`,
        })}
        {...rest}
      />
    </>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
