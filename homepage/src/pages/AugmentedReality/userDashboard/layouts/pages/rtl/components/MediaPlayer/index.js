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
import PDButton from "../../../../../components/PDButton";

// Images
// import curved1 from "assets/images/curved-images/curved1.jpg";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        // backgroundImage: `${linearGradient(
        //   rgba(gradients.dark.main, 0.85),
        //   rgba(gradients.dark.state, 0.85)
        // )}, url(${curved1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <PDBox p={3} position="relative" lineHeight={0}>
        <PDTypography variant="h5" color="white" fontWeight="bold">
          نوع من البلوز
        </PDTypography>
        <PDTypography variant="button" color="white" fontWeight="medium">
          ديفتونز
        </PDTypography>
        <PDBox display="flex" mt={3} pt={1}>
          <PDBox display="flex" alignItems="center" justifyContent="center">
            <PDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </PDButton>
            <PDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </PDButton>
            <PDButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </PDButton>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default MediaPlayer;
