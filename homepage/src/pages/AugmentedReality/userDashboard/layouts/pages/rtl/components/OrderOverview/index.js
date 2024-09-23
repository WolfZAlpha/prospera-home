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

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// prospera defi dashboard example components
import TimelineItem from "../../../../../examples/Timeline/TimelineItem";
import AdobeXD from "../../../../../examples/Icons/AdobeXD";

// prospera defi dashboard theme imports
import palette from "../../../../../assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <PDBox mb="16px">
        <PDTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          نظرة عامة على الطلبات
        </PDTypography>
        <PDBox mb={2}>
          <PDBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <PDTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </PDTypography>
            <PDTypography variant="button" color="text" fontWeight="regular">
              هذا الشهر
            </PDTypography>
          </PDBox>
        </PDBox>
      </PDBox>
      <PDBox>
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="$2400, تغييرات في التصميم"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          icon={<IoLogoCss3 size="16px" color={palette.error.main} />}
          title="طلب جديد #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          icon={<FaShoppingCart size="16px" color={palette.lightblue.main} />}
          title="مدفوعات الخادم لشهر أبريل"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          icon={<BsCreditCardFill size="16px" color={palette.warning.main} />}
          title="تمت إضافة بطاقة جديدة للطلب #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title="تمت إضافة بطاقة جديدة للطلب #4395133"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem icon={<AdobeXD size="20px" />} title="طلب جديد #9583120" dateTime="17 DEC" />
      </PDBox>
    </Card>
  );
}

export default OrdersOverview;
