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

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";

// prospera defi dashboard base styles
import colors from "../../../assets/theme/base/colors";
import typography from "../../../assets/theme/base/typography";
import borders from "../../../assets/theme/base/borders";

function DataTableBodyCell({ noBorder, align, children }) {
  const { light, grey } = colors;
  const { size } = typography;
  const { borderWidth } = borders;

  return (
    <PDBox
      component="td"
      textAlign={align}
      fontSize={size.sm}
      borderBottom={noBorder ? "none" : `${borderWidth[1]} solid ${grey[700]}`}
      py={1.5}
      px={3}
    >
      <PDBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableBodyCell;
