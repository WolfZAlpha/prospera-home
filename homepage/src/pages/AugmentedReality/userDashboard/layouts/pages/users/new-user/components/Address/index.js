/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDInput from "../../../../../../components/PDInput";

// NewUser page components
import FormField from "../FormField";

function Address({ formData }) {
  const [state, setState] = useState("...");
  const { formField, values, errors, touched } = formData;
  const { address1, address2, city, zip } = formField;
  const { address1: address1V, address2: address2V, city: cityV, zip: zipV } = values;

  const handleSetState = (event) => setState(event.target.value);

  return (
    <PDBox>
      <PDTypography variant="lg" color="white" fontWeight="bold">
        Address
      </PDTypography>
      <PDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label={address1.label}
              name={address1.name}
              value={address1V}
              placeholder={address1.placeholder}
              error={errors.address1 && touched.address1}
              success={address1V.length > 0 && !errors.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <PDBox mt={-1.625}>
              <FormField
                label={address2.label}
                name={address2.name}
                value={address2V}
                placeholder={address2.placeholder}
              />
            </PDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={city.label}
              name={city.name}
              value={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <PDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <PDTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                State
              </PDTypography>
            </PDBox>
            <Select input={<PDInput />} value={state} onChange={handleSetState}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="10">Hello 10</MenuItem>
              <MenuItem value="11">Hello 11</MenuItem>
              <MenuItem value="12">Hello 12</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              label={zip.label}
              name={zip.name}
              value={zipV}
              placeholder={zip.placeholder}
              error={errors.zip && touched.zip}
              success={zipV.length > 0 && !errors.zip}
            />
          </Grid>
        </Grid>
      </PDBox>
    </PDBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
