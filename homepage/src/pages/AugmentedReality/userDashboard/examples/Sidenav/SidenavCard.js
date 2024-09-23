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
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";
import { AiFillStar } from "react-icons/ai";

// Dashboard UI Dashboard PRO React components
import PDButton from "../../components/PDButton";
import PDBox from "../../components/PDBox";
import PDTypography from "../../components/PDTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "./styles/sidenavCard";

// Dashboard UI from prospera defi dashboard context
import { useDashboardUIController } from "../../context";
import colors from "../../assets/theme/base/colors";

function SidenavCard() {
  const [controller] = useDashboardUIController();
  const { miniSidenav, sidenavColor, transparentSidenav } = controller;
  const { info } = colors;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor, transparentSidenav })}>
        <PDBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <AiFillStar color={info.main} />
        </PDBox>
        <PDBox lineHeight={1}>
          <PDTypography variant="h6" color="white">
            Need help?
          </PDTypography>
          <PDBox mb={1.825} mt={-1}>
            <PDTypography variant="caption" color="white" fontWeight="regular">
              Please check our docs
            </PDTypography>
          </PDBox>
          <PDButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/Dashboard-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            DOCUMENTATION
          </PDButton>
        </PDBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
