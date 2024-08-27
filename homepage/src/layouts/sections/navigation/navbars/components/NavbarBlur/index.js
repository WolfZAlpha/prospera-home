/* eslint-disable no-param-reassign */
/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// PROSPERA DEFI PLATFORM examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarBlur() {
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://www.creative-tim.com/product/material-kit-pro-react",
        label: "buy now",
        color: "info",
      }}
      relative
      center
    />
  );
}

export default NavbarBlur;
