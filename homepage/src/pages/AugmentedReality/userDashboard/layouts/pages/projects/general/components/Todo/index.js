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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui components
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";

// prospera defi dashboard base styles
import borders from "../../../../../../assets/theme/base/borders";
import colors from "../../../../../../assets/theme/base/colors";

function Todo({ color, title, date, project, company, defaultChecked, noDivider }) {
  const { borderWidth } = borders;
  const { info } = colors;
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Another action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <PDBox
      component="li"
      width="100%"
      pr={2}
      mb={2}
      borderLeft={`${borderWidth[4]} solid ${colors[color].main}`}
      sx={{ listStyle: "none" }}
    >
      <PDBox width="100%" pl={1} ml={2}>
        <PDBox display="flex" alignItems="center">
          <Checkbox
            defaultChecked={defaultChecked}
            sx={{
              color: info.main,
              "&.Mui-checked": {
                color: info.main,
              },
            }}
          />
          <PDBox ml={0.2} lineHeight={1}>
            <PDTypography variant="button" color="white" fontWeight="medium">
              {title}
            </PDTypography>
          </PDBox>
          <PDBox ml="auto" color="secondary" pr={3} lineHeight={0}>
            <Icon
              fontSize="default"
              sx={{ cursor: "pointer", color: "#fff" }}
              onClick={handleOpenMenu}
            >
              more_horiz
            </Icon>
          </PDBox>
          {renderMenu()}
        </PDBox>
        <PDBox
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mt={2}
          ml={{ xs: 0, md: 3 }}
          pl={0.5}
        >
          <PDBox lineHeight={1} mb={{ xs: 1, sm: 0 }}>
            <PDTypography display="block" variant="caption" fontWeight="regular" color="white">
              Date
            </PDTypography>
            <PDTypography variant="caption" fontWeight="bold" color="white">
              {date}
            </PDTypography>
          </PDBox>
          <PDBox ml={{ xs: 0, sm: "auto" }} mb={{ xs: 1, sm: 0 }} lineHeight={1}>
            <PDTypography display="block" variant="caption" fontWeight="regular" color="white">
              Project
            </PDTypography>
            <PDTypography variant="caption" fontWeight="bold" color="white">
              {project}
            </PDTypography>
          </PDBox>
          <PDBox mx={{ xs: 0, sm: "auto" }} lineHeight={1}>
            <PDTypography display="block" variant="caption" fontWeight="regular" color="white">
              Company
            </PDTypography>
            <PDTypography variant="caption" fontWeight="bold" color="white">
              {company}
            </PDTypography>
          </PDBox>
        </PDBox>
      </PDBox>
      {noDivider ? null : <Divider light sx={{ marginBottom: 0 }} />}
    </PDBox>
  );
}

// Setting default values for the props of Todo
Todo.defaultProps = {
  color: "info",
  noDivider: false,
  defaultChecked: false,
};

// Typechecking props for the Todo
Todo.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  noDivider: PropTypes.bool,
};

export default Todo;
