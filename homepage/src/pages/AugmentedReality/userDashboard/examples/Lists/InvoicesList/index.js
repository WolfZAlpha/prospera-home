/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import colors from "../../../assets/theme/base/colors";

function InvoicesList({ title, invoices }) {
  const { info } = colors;
  const renderItems = invoices.map(({ color, icon, name, description, route }, key) => (
    <PDBox
      key={name}
      component="li"
      py="6px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      mb={invoices.length - 1 === key ? 0 : 1}
    >
      <PDBox display="flex" alignItems="center">
        <PDBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={info.main}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="38px"
          height="38px"
          mr={2}
        >
          {icon}
        </PDBox>
        <PDBox display="flex" flexDirection="column">
          <PDTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </PDTypography>
          <PDTypography variant="caption" color="text">
            {description}
          </PDTypography>
        </PDBox>
      </PDBox>
      <PDBox display="flex">
        <PDTypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </PDTypography>
      </PDBox>
    </PDBox>
  ));

  return (
    <Card>
      <PDBox mb="28px">
        <PDTypography variant="lg" color="white" fontWeight="bold" textTransform="capitalize">
          {title}
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Typechecking props for the InvoicesList
InvoicesList.propTypes = {
  title: PropTypes.string.isRequired,
  invoices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InvoicesList;
