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
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// prospera defi dashboard components
import PDBox from "../PDBox";
import PDTypography from "../PDTypography";

// prospera defi dashboard base styles
import typography from "../../assets/theme/base/typography";

// Custom styles for the PDSnackbar
import PDSnackbarIconRoot from "./PDSnackbarIconRoot";

function PDSnackbar({ color, icon, title, dateTime, content, close, ...rest }) {
  const { size } = typography;
  let titleColor = "white";
  let dateTimeColor = "white";
  let dividerColor = true;

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <PDBox
        bgColor={color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="lg"
        p={1}
      >
        <PDBox display="flex" justifyContent="space-between" alignItems="center" p={1.5}>
          <PDBox display="flex" alignItems="center" lineHeight={0}>
            <PDSnackbarIconRoot fontSize="small" ownerState={{ color }}>
              {icon}
            </PDSnackbarIconRoot>
            <PDTypography variant="button" fontWeight="medium" color={titleColor}>
              {title}
            </PDTypography>
          </PDBox>
          <PDBox display="flex" alignItems="center" lineHeight={0}>
            <PDTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </PDTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </PDBox>
        </PDBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <PDBox p={1.5} color={color === "light" ? "text" : "white"} fontSize={size.sm}>
          {content}
        </PDBox>
      </PDBox>
    </Snackbar>
  );
}

// Setting default values for the props of PDSnackbar
PDSnackbar.defaultProps = {
  color: "info",
};

// Typechecking props for PDSnackbar
PDSnackbar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default PDSnackbar;
