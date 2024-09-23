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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDAvatar from "../../../../../../components/PDAvatar";

// prospera defi dashboard base styles
import colors from "../../../../../../assets/theme/base/colors";
import borders from "../../../../../../assets/theme/base/borders";

import { AiOutlinePlus } from "react-icons/ai";

// prospera defi dashboard data variables
import storiesData from "./data/storiesData";

function Stories() {
  const { borderWidth } = borders;

  const renderStories = storiesData.map(({ image, name, color }) => (
    <Grid key={name} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <PDBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors[color].main}`}
        sx={{ cursor: "pointer" }}
      >
        <PDAvatar src={image} alt={name} />
      </PDBox>
      <PDBox mt={0.75} textAlign="center" lineHeight={1}>
        <PDTypography fontSize={12} color="text" fontWeight="regular">
          {name}
        </PDTypography>
      </PDBox>
    </Grid>
  ));

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.down("lg")]: {
          overflowX: "scroll",
        },
      })}
    >
      <PDBox width="100%">
        <Grid container justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <PDBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              sx={{ cursor: "pointer" }}
            >
              <AiOutlinePlus color="white" size="24px" />
            </PDBox>
            <PDBox mt={0.75} textAlign="center" lineHeight={1}>
              <PDTypography fontSize={12} color="text" fontWeight="regular">
                Add story
              </PDTypography>
            </PDBox>
          </Grid>
          {renderStories}
        </Grid>
      </PDBox>
    </Card>
  );
}

export default Stories;
