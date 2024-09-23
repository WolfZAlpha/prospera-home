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
import TableCell from "@mui/material/TableCell";

// prospera defi dashboard components
import PDTypography from "../../../components/PDTypography";
import PDBox from "../../../components/PDBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <PDBox display="flex" alignItems="center" width="max-content">
          <PDBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <PDBox display="flex" flexDirection="column" ml={3}>
            <PDTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </PDTypography>
            <PDTypography
              variant="button"
              color="white"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {content}
            </PDTypography>
          </PDBox>
        </PDBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <PDBox display="flex" flexDirection="column">
          <PDTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </PDTypography>
          <PDTypography
            variant="button"
            fontWeight="medium"
            color="white"
            textTransform="capitalize"
          >
            {content}
          </PDTypography>
        </PDBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
