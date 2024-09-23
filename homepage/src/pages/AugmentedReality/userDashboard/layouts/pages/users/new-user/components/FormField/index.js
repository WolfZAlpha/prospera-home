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

// formik components
import { ErrorMessage, Field } from "formik";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDInput from "../../../../../../components/PDInput";

function FormField({ label, name, ...rest }) {
  return (
    <PDBox mb={1.5}>
      <PDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <PDTypography
          component="label"
          variant="caption"
          color="white"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </PDTypography>
      </PDBox>
      <Field {...rest} name={name} as={PDInput} />
      <PDBox mt={0.75}>
        <PDTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </PDTypography>
      </PDBox>
    </PDBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
