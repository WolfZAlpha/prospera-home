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

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";

// Billing page components
import Bill from "../Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <PDBox>
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Billing Information
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default BillingInformation;
