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
import Link from "@mui/material/Link";

// prospera defi dashboard components
import PDBox from "../../components/PDBox";
import PDTypography from "../../components/PDTypography";

// prospera defi dashboard base styles
import typography from "../../assets/theme/base/typography";

function Footer({ links }) {
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <PDBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <PDTypography variant="button" fontWeight="medium" color="white">
            {link.name}
          </PDTypography>
        </Link>
      </PDBox>
    ));

  return (
    <PDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <PDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, All Rights Reserved. Made
        <PDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}></PDBox>
        by
        <Link href={"https://www.prosperadefi.com/"} target="_blank">
          <PDTypography variant="button" fontWeight="medium" color="white">
            &nbsp;PROSPERA&nbsp;
          </PDTypography>
        </Link>
        &
        <Link href={"https://www.cybercapitalinvestments.com/"} target="_blank">
          <PDTypography variant="button" fontWeight="medium" color="white">
            &nbsp;CCI&nbsp;
          </PDTypography>
        </Link>
      </PDBox>
      <PDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  links: [
    { href: "https://www.prosperadefi.com/", name: "PROSPERA" },
    { href: "https://www.prosperaico.com/", name: "ICO" },
    { href: "https://www.prosperadefi.com/blog", name: "Blog" },
    { href: "https://www.prosperadefi.com/docs", name: "Documentation" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
