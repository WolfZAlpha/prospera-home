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
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// prospera defi dashboard example components
import DefaultItem from "../../../../../examples/Items/DefaultItem";

// React icons
import { FaWallet } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function NextEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <PDBox pt={2} px={2}>
        <PDTypography variant="h6" fontWeight="medium" color="white">
          Next events
        </PDTypography>
      </PDBox>
      <PDBox p={2}>
        <DefaultItem
          icon={<FaWallet size="16px" color="white" />}
          title="Cyber Week"
          description="27 March 2020, at 12:30 PM"
        />
        <PDBox mt={1.8}>
          <DefaultItem
            icon={<IoNotifications size="18px" color="white" />}
            color="primary"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </PDBox>
        <PDBox mt={1.8}>
          <DefaultItem
            icon={<FaWallet size="16px" color="white" />}
            title="Cyber Week"
            description="27 March 2020, at 12:30 PM"
          />
        </PDBox>
        <PDBox mt={1.8}>
          <DefaultItem
            icon={<IoNotifications size="18px" color="white" />}
            color="primary"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default NextEvents;
