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
import Icon from "@mui/material/Icon";

// Theme colors
import colors from "../../../../../assets/theme/base/colors";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// prospera defi dashboard example components
import TimelineItem from "../../../../../examples/Timeline/TimelineItem";

// Icons
import { AiFillCheckCircle, AiFillHtml5 } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart, FaDropbox, FaUser } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { SiAdobexd } from "react-icons/si";

function OrdersOverview() {
  const { success, primary, info, error, lightblue, warning } = colors;

  return (
    <Card>
      <PDBox>
        <PDTypography variant="lg" fontWeight="bold" color="white">
          Orders overview
        </PDTypography>
        <PDBox mt="4px">
          <PDTypography variant="button" color="text" fontWeight="regular">
            <PDTypography display="inline" variant="body2" verticalAlign="middle">
              <AiFillCheckCircle size="15px" color={success.main} />
            </PDTypography>
            &nbsp;
            <PDTypography variant="button" color="text" fontWeight="medium">
              +30%
            </PDTypography>{" "}
            this month
          </PDTypography>
        </PDBox>
      </PDBox>
      <PDBox mt="32px">
        <TimelineItem
          color="success"
          icon={<IoMdNotifications color={info.main} size="20px" />}
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<AiFillHtml5 color={error.main} size="20px" />}
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="info"
          icon={<FaShoppingCart color={lightblue.main} size="20px" />}
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="warning"
          icon={<MdPayment color={warning.main} size="20px" />}
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="primary"
          icon={<FaDropbox color={primary.main} size="20px" />}
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<SiAdobexd color={error.main} size="20px" />}
          title="New order #9851258"
          dateTime="18 DEC 4:41 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<FaUser color={warning.main} size="20px" />}
          title="Server payments for April"
          dateTime="16 DEC 9:34 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
      </PDBox>
    </Card>
  );
}

export default OrdersOverview;
