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

// icons
import { IoMdNotifications } from "react-icons/io";
import { IoWallet } from "react-icons/io5";

function UpcomingEvents() {
  return (
    <Card sx={{ height: "100%", pt: "28px" }}>
      <PDBox display="flex" flexDirection="column" lineHeight={1} mb="24px">
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Upcoming events
        </PDTypography>
        <PDTypography variant="button" color="text" fontWeight="regular">
          Joined
        </PDTypography>
      </PDBox>
      <PDBox>
        <DefaultItem
          color="info"
          icon={<IoWallet color="white" size="22px" />}
          title="Cyber Week"
          description="27 March 2020, at 12:30 PM"
        />
        <PDBox mt={3.5}>
          <DefaultItem
            color="info"
            icon={<IoMdNotifications color="white" size="22px" />}
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default UpcomingEvents;
