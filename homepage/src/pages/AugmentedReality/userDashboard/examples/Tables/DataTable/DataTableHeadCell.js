/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";

// prospera defi dashboard base styles
import colors from "../../../assets/theme/base/colors";
import typography from "../../../assets/theme/base/typography";
import borders from "../../../assets/theme/base/borders";

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  const { light, secondary, grey } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  return (
    <PDBox
      component="th"
      width={width}
      borderBottom={`${borderWidth[1]} solid ${grey[700]}`}
      py={1.5}
      px={3}
    >
      <PDBox
        {...rest}
        position="relative"
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="white !important"
        opacity={0.7}
        className={`text-uppercase ${sorted && "cursor-pointer user-select-none"}`}
      >
        {children}
        {sorted && (
          <PDBox
            fontSize={size.lg}
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
          >
            <PDBox
              position="absolute"
              top={-6}
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </PDBox>
            <PDBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </PDBox>
          </PDBox>
        )}
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableHeadCell;
