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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDAvatar from "../../../../../components/PDAvatar";
import PDButton from "../../../../../components/PDButton";

// Image
import team1 from "../../../../../assets/images/team-1.jpg";
import team2 from "../../../../../assets/images/team-2.jpg";
import team3 from "../../../../../assets/images/team-3.jpg";
import team4 from "../../../../../assets/images/team-4.jpg";
import team5 from "../../../../../assets/images/team-5.jpg";

function Header() {
  const avatarStyles = {
    border: ({ borders: { borderWidth }, palette: { grey } }) =>
      `${borderWidth[2]} solid ${grey[700]}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <PDBox display="flex" alignItems="center">
      <PDBox mt={0.5} pr={1}>
        <PDBox mb={1} lineHeight={0}>
          <PDTypography variant="caption" color="secondary" fontWeight="medium" color="white">
            Team members:
          </PDTypography>
        </PDBox>
        <PDBox display="flex">
          <PDAvatar src={team1} alt="team-1" size="sm" sx={avatarStyles} />
          <PDAvatar src={team2} alt="team-1" size="sm" sx={avatarStyles} />
          <PDAvatar src={team3} alt="team-1" size="sm" sx={avatarStyles} />
          <PDAvatar src={team4} alt="team-1" size="sm" sx={avatarStyles} />
          <PDAvatar src={team5} alt="team-1" size="sm" sx={avatarStyles} />
        </PDBox>
      </PDBox>
      <PDBox height="75%" alignSelf="flex-end">
        <Divider light orientation="vertical" />
      </PDBox>
      <PDBox pl={1}>
        <PDButton variant="contained" color="info" iconOnly>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        </PDButton>
      </PDBox>
    </PDBox>
  );
}

export default Header;
