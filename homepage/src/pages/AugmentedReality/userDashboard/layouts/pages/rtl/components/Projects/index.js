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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// prospera defi dashboard example components
import Table from "../../../../../examples/Tables/Table";

// Data
import data from "./data";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>عمل</MenuItem>
      <MenuItem onClick={closeMenu}>عمل آخر</MenuItem>
      <MenuItem onClick={closeMenu}>شيء آخر</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <PDBox>
          <PDTypography color="white" variant="lg" mb="6px" gutterBottom>
            المشاريع
          </PDTypography>
          <PDBox display="flex" alignItems="center" lineHeight={0}>
            <BsCheckCircleFill color="green" size="15px" />
            <PDTypography variant="button" fontWeight="regular" color="text" ml="5px">
              &nbsp;<strong>30 انتهى</strong> هذا الشهر
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </PDBox>
        {renderMenu}
      </PDBox>
      <PDBox
        sx={{
          "& th": {
            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor.grey}`,
          },
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor.grey}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </PDBox>
    </Card>
  );
}

export default Projects;
