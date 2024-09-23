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
import bgMusic from "../../../../../assets/images/music-background.png";

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
      sx={{
        backgroundImage: `url(${bgMusic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PDBox pb={3} position="relative" lineHeight={0} display="flex" flexDirection="column">
        <PDTypography variant="lg" fontSize={{ lg: 16, xl: 18 }} color="white" fontWeight="bold">
          Some Kind Of Blues
        </PDTypography>
        <PDTypography variant="button" color="white" fontWeight="regular">
          Deftones
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
