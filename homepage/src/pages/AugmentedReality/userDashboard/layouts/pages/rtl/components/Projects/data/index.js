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
import Tooltip from "@mui/material/Tooltip";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDAvatar from "../../../../../../components/PDAvatar";
import PDProgress from "../../../../../../components/PDProgress";

// Images
import AdobeXD from "../../../../../../examples/Icons/AdobeXD";
import Atlassian from "../../../../../../examples/Icons/Atlassian";
import Slack from "../../../../../../examples/Icons/Slack";
import Spotify from "../../../../../../examples/Icons/Spotify";
import Jira from "../../../../../../examples/Icons/Jira";
import Invision from "../../../../../../examples/Icons/Invision";
import logoSlack from "../../../../../../assets/images/small-logos/logo-slack.svg";
import logoSpotify from "../../../../../../assets/images/small-logos/logo-spotify.svg";
import logoJira from "../../../../../../assets/images/small-logos/logo-jira.svg";
import logoInvesion from "../../../../../../assets/images/small-logos/logo-invision.svg";
import avatar1 from "../../../../../../assets/images/avatar1.png";
import avatar2 from "../../../../../../assets/images/avatar2.png";
import avatar3 from "../../../../../../assets/images/avatar3.png";
import avatar4 from "../../../../../../assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <PDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "شركات", align: "left" },
      { name: "أفراد", align: "left" },
      { name: "تبرع", align: "center" },
      { name: "انتهاء", align: "center" },
    ],

    rows: [
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              إصدار Vision UI XD
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
              [avatar4, "Jessica Doe"],
            ])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              إضافة مسار التقدم
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            $3,000
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <Slack size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              إصلاح أخطاء النظام الأساسي
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            غير مضبوط
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              إطلاق تطبيق الهاتف المحمول الخاص بنا
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            $20,500
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <Jira size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              أضف صفحة الأسعار الجديدة
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            $500
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
      {
        شركات: (
          <PDBox display="flex" alignItems="center">
            <Invision size="20px" />
            <PDTypography pl="16px" color="white" variant="button" fontWeight="medium">
              إعادة تصميم متجر جديد على الإنترنت
            </PDTypography>
          </PDBox>
        ),
        أفراد: (
          <PDBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar4, "Jessica Doe"],
            ])}
          </PDBox>
        ),
        تبرع: (
          <PDTypography variant="button" color="white" fontWeight="bold">
            $2,000
          </PDTypography>
        ),
        انتهاء: (
          <PDBox width="8rem" textAlign="left">
            <PDTypography color="white" variant="button" fontWeight="bold">
              100%
            </PDTypography>
            <PDProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        ),
      },
    ],
  };
}
