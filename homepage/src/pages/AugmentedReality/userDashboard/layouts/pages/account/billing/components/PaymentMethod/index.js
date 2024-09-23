/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDButton from "../../../../../../components/PDButton";

// prospera defi dashboard base styles
import borders from "../../../../../../assets/theme/base/borders";

// Images
import colors from "../../../../../../assets/theme/base/colors";

// prospera defi dashboard assets
import radialGradient from "../../../../../../assets/theme/functions/radialGradient";
import palette from "../../../../../../assets/theme/base/colors";

// prospera defi dashboard component exemples
import Mastercard from "../../../../../../examples/Icons/Mastercard";
import Visa from "../../../../../../examples/Icons/Visa";

function PaymentMethod() {
  const { borderWidth, borderColor } = borders;
  const { grey } = colors;

  return (
    <Card id="delete-account">
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <PDTypography variant="lg" fontWeight="bold" color="white">
          Payment Method
        </PDTypography>
        <PDButton variant="contained" color="info">
          ADD NEW CARD
        </PDButton>
      </PDBox>
      <PDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PDBox
              border="2px solid"
              borderRadius="20px"
              borderColor={grey[600]}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="22px 20px"
            >
              <Mastercard width="21px" />
              <PDTypography pl={2} variant="button" color="white" fontWeight="medium">
                7812 2139 0823 XXXX
              </PDTypography>
              <PDBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer", color: "#fff" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </PDBox>
            </PDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <PDBox
              border="2px solid"
              borderRadius="20px"
              borderColor={grey[600]}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="22px 20px"
            >
              <Visa width="25px" />
              <PDTypography pl={2} variant="button" color="white" fontWeight="medium">
                7812 2139 0823 XXXX
              </PDTypography>
              <PDBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer", color: "#fff" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </PDBox>
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </Card>
  );
}

export default PaymentMethod;
