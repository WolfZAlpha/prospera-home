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

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDSwitch from "../../../../../../components/PDSwitch";
import PDTypography from "../../../../../../components/PDTypography";
import colors from "../../../../../../assets/theme/base/colors";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [mails, setMails] = useState(false);

  return (
    <Card sx={{ minHeight: "490px" }}>
      <PDBox mb="26px">
        <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          platform settings
        </PDTypography>
      </PDBox>
      <PDBox lineHeight={1.25}>
        <PDTypography
          variant="xxs"
          fontWeight="medium"
          mb="20px"
          color="text"
          textTransform="uppercase"
        >
          account
        </PDTypography>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch color="info" checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch
              color="info"
              checked={answersPost}
              onChange={() => setAnswersPost(!answersPost)}
            />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch
              sx={{ background: "#1B1F3D", color: "#fff" }}
              color="info"
              checked={mentionsMe}
              onChange={() => setMentionsMe(!mentionsMe)}
            />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox mb="6px">
          <PDTypography variant="xxs" fontWeight="medium" color="text" textTransform="uppercase">
            application
          </PDTypography>
        </PDBox>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch
              color="info"
              checked={newLaunches}
              onChange={() => setNewLaunches(!newLaunches)}
            />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch
              color="info"
              checked={productUpdate}
              onChange={() => setProductUpdate(!productUpdate)}
            />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex" mb="14px">
          <PDBox mt={0.25}>
            <PDSwitch
              color="info"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex">
          <PDBox mt={0.25}>
            <PDSwitch color="info" checked={mails} onChange={() => setMails(!mails)} />
          </PDBox>
          <PDBox width="80%" ml={2}>
            <PDTypography variant="button" fontWeight="regular" color="text">
              Receive mails weekly
            </PDTypography>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default PlatformSettings;
