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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Images
import team1 from "../../../../../../assets/images/avatar1.png";
import team2 from "../../../../../../assets/images/avatar2.png";
import team4 from "../../../../../../assets/images/avatar4.png";
import team5 from "../../../../../../assets/images/avatar5.png";
import bruceMars from "../../../../../../assets/images/avatar7.png";
import team6 from "../../../../../../assets/images/avatar8.png";
import workSpace from "../../../../../../assets/images/teams-image.png";
import PDAvatar from "../../../../../../components/PDAvatar";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDButton from "../../../../../../components/PDButton";
import PDInput from "../../../../../../components/PDInput";
import PDTypography from "../../../../../../components/PDTypography";
import { useState } from "react";

function Post() {
  const [comments] = useState([
    {
      image: bruceMars,
      name: "michael lewis",
      text: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
      like: 3,
      share: 2,
    },
    {
      image: team6,
      name: "jessica stones",
      text: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy.",
      like: 10,
      share: 1,
    },
  ]);

  const renderComments = comments.map(({ image, name, text, like, share }, key) => (
    <PDBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
      <PDBox flexShrink={0}>
        <PDAvatar src={image} alt={name} />
      </PDBox>
      <PDBox flexGrow={1} ml={2}>
        <PDTypography variant="button" fontWeight="medium" color="white" textTransform="capitalize">
          {name}
        </PDTypography>
        <PDBox mt={1} mb={2} lineHeight={0.75}>
          <PDTypography variant="button" fontWeight="regular" color="text">
            {text}
          </PDTypography>
        </PDBox>
        <PDBox display="flex" flexWrap="wrap" alignItems="center">
          <PDBox display="flex" alignItems="center" mr={1}>
            <PDTypography component="a" href="#" variant="body2" color="text">
              <Icon>thumb_up</Icon>&nbsp;
            </PDTypography>
            <PDTypography variant="button" fontWeight="regular" color="text">
              {like} likes
            </PDTypography>
          </PDBox>
          <PDBox display="flex" alignItems="center">
            <PDTypography component="a" href="#" variant="body2" color="text">
              <Icon>share</Icon>&nbsp;
            </PDTypography>
            <PDTypography variant="button" fontWeight="regular" color="text">
              {share} shares
            </PDTypography>
          </PDBox>
        </PDBox>
      </PDBox>
    </PDBox>
  ));

  return (
    <Card>
      <PDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <PDAvatar src={team4} alt="profile-image" variant="rounded" />
        <PDBox mx={2} lineHeight={1}>
          <PDTypography component="a" href="#" variant="button" color="white" fontWeight="regular">
            Esthera Jackson
          </PDTypography>
          <PDTypography component="div" variant="button" color="text" fontWeight="regular">
            3 days ago
          </PDTypography>
        </PDBox>
        <PDBox ml={{ xs: 0, sm: "auto" }}>
          <PDButton
            color="info"
            size="small"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;
            <PDTypography color="white" fontSize={10} textTransform="capitalise" fontWeight="bold">
              follow
            </PDTypography>
          </PDButton>
        </PDBox>
      </PDBox>
      <Divider light sx={{ my: "22px" }} />
      <PDBox>
        <PDBox mb={3}>
          <PDTypography fontSize={14} fontWeight="regular" color="text">
            Personal profiles are the perfect way for you to grab their attention and persuade
            recruiters to continue reading your CV because you’re telling them from the off exactly
            why they should hire you.
          </PDTypography>
        </PDBox>
        <PDBox
          component="img"
          src={workSpace}
          backgroundSize="cover"
          borderRadius="12px"
          width="100%"
        />
        <PDBox mt={3} mb={1} px={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <PDBox display="flex" alignItems="center">
                <PDBox display="flex" alignItems="center" mr={2}>
                  <PDTypography component="a" href="#" variant="body2" color="text">
                    <Icon color="info">thumb_up</Icon>&nbsp;
                  </PDTypography>
                  <PDTypography variant="button" fontWeight="regular" color="text">
                    150
                  </PDTypography>
                </PDBox>
                <PDBox display="flex" alignItems="center" mr={2}>
                  <PDTypography component="a" href="#" variant="body2" color="text">
                    <Icon>mode_comment</Icon>&nbsp;
                  </PDTypography>
                  <PDTypography variant="button" fontWeight="regular" color="text">
                    36
                  </PDTypography>
                </PDBox>
                <PDBox display="flex" alignItems="center" mr={2}>
                  <PDTypography component="a" href="#" variant="body2" color="text">
                    <Icon>share</Icon>&nbsp;
                  </PDTypography>
                  <PDTypography variant="button" fontWeight="regular" color="text">
                    12
                  </PDTypography>
                </PDBox>
              </PDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <PDBox
                display={{ xs: "none", sm: "flex" }}
                justifyContent="flex-end"
                alignItems="center"
                width="100%"
              >
                <PDAvatar src={team5} alt="person 1" size="xs" />
                <PDAvatar src={team2} alt="person 2" size="xs" />
                <PDAvatar src={team1} alt="person 3" size="xs" />
                <PDBox pl={1}>
                  <PDTypography variant="caption" color="text" fontWeight="medium">
                    and 30+ more
                  </PDTypography>
                </PDBox>
              </PDBox>
            </Grid>
          </Grid>
          <Divider light />
          {renderComments}
          <PDBox display="flex" alignItems="center" mt={3}>
            <PDBox flexShrink={0} mr={2}>
              <PDAvatar src={team4} alt="profile picture" />
            </PDBox>
            <PDBox flexGrow={1}>
              <PDInput placeholder="Write your comment..." size="large" />
            </PDBox>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Post;
