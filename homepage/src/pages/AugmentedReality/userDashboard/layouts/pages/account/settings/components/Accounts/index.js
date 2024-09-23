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
import Icon from "@mui/material/Icon";

import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDAvatar from "../../../../../../components/PDAvatar";
import PDInput from "../../../../../../components/PDInput";
import PDButton from "../../../../../../components/PDButton";
import PDSwitch from "../../../../../../components/PDSwitch";

// Images
import logoSlack from "../../../../../../assets/images/small-logos/logo-slack.svg";
import logoSpotify from "../../../../../../assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "../../../../../../assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "../../../../../../assets/images/small-logos/logo-asana.svg";
import colors from "../../../../../../assets/theme/base/colors";

function Accounts() {
  const [slack2FA, setSlack2FA] = useState(true);
  const [spotify2FA, setSpotify2FA] = useState(true);
  const [atlassian2FA, setAtlassian2FA] = useState(true);
  const [asana2FA, setAsana2FA] = useState(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  const { inputColors, grey } = colors;

  return (
    <Card id="accounts">
      <PDBox lineHeight={1} mb="40px">
        <PDBox mb="4px">
          <PDTypography variant="lg" color="white" fontWeight="bold">
            Accounts
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" color="text" fontWeight="regular">
          Here you can setup and manage your integration settings.
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <PDBox display="flex" alignItems="center">
            <PDAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <PDBox ml={2}>
              <PDTypography variant="h6" color="white" fontWeight="medium">
                Slack
              </PDTypography>
              <PDBox display="flex" alignItems="flex-end">
                <PDTypography variant="button" color="text" fontWeight="regular">
                  Show less
                </PDTypography>
                <PDTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </PDTypography>
              </PDBox>
            </PDBox>
          </PDBox>
          <PDBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <PDBox lineHeight={0} mx={2}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                {slack2FA ? "Enabled" : "Disabled"}
              </PDTypography>
            </PDBox>
            <PDBox mr={1}>
              <PDSwitch color="info" checked={slack2FA} onChange={handleSetSlack2FA} />
            </PDBox>
          </PDBox>
        </PDBox>
        <PDBox ml={2} lineHeight={1} pl={{ sm: 0, md: 6 }} mt="16px">
          <PDTypography variant="button" color="text" fontWeight="regular">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </PDTypography>
          <PDBox
            bgColor={inputColors.backgroundColor}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <PDTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </PDTypography>
            <PDBox
              width={{ xs: "100%", sm: "25%", md: "15%" }}
              mt={{ xs: 1, sm: 0 }}
              borderColor={grey[600]}
            >
              <Tooltip title="Copy" placement="top">
                <PDInput size="small" value="1172913" sx={{ borderColor: grey[600] }} />
              </Tooltip>
            </PDBox>
          </PDBox>
          <PDBox
            bgColor={inputColors.backgroundColor}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ sm: "column", md: "row" }}
            my={3}
            py={1}
            pl={{ sm: 1, md: 2 }}
            pr={1}
          >
            <PDTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </PDTypography>
            <PDBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ sm: "column", md: "row" }}
            >
              <PDBox mr={2} mb={{ sm: 1, md: 0 }} lineHeight={0}>
                <PDTypography variant="button" fontWeight="medium" color="text">
                  hello@vision-ui.com
                </PDTypography>
              </PDBox>
              <PDButton variant="gradient" color="error" size="small">
                delete
              </PDButton>
            </PDBox>
          </PDBox>
        </PDBox>
        <Divider light />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <PDBox display="flex" alignItems="center">
            <PDAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <PDBox ml={2} lineHeight={0}>
              <PDTypography variant="h6" color="white" fontWeight="medium">
                Spotify
              </PDTypography>
              <PDTypography variant="button" color="text" fontWeight="regular">
                Music
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <PDBox lineHeight={0} mx={2}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                {spotify2FA ? "Enabled" : "Disabled"}
              </PDTypography>
            </PDBox>
            <PDBox mr={1}>
              <PDSwitch color="info" checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </PDBox>
          </PDBox>
        </PDBox>
        <Divider light />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <PDBox display="flex" alignItems="center">
            <PDAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <PDBox ml={2} lineHeight={0}>
              <PDTypography variant="h6" color="white" fontWeight="medium">
                Atlassian
              </PDTypography>
              <PDTypography variant="button" color="text" fontWeight="regular">
                Payment vendor
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <PDBox lineHeight={0} mx={2}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </PDTypography>
            </PDBox>
            <PDBox mr={1}>
              <PDSwitch color="info" checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </PDBox>
          </PDBox>
        </PDBox>
        <Divider light />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <PDBox display="flex" alignItems="center">
            <PDAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <PDBox ml={2} lineHeight={0}>
              <PDTypography variant="h6" color="white" fontWeight="medium">
                Asana
              </PDTypography>
              <PDTypography variant="button" color="text" fontWeight="regular">
                Organize your team
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <PDBox lineHeight={0} mx={2}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                {asana2FA ? "Enabled" : "Disabled"}
              </PDTypography>
            </PDBox>
            <PDBox mr={1}>
              <PDSwitch color="info" checked={asana2FA} onChange={handleSetAsana2FA} />
            </PDBox>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Accounts;
