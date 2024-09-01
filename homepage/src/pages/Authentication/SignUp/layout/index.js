/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function CoverLayout({ children }) {
  return (
    <MKBox width="100%" height="100vh" mx="auto">
      <MKBox position="absolute" top={0} left={0} zIndex={1} width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.prosperaico.com",
            label: "join ico",
            color: "pros",
          }}
          sticky
        />
      </MKBox>
      {children}
    </MKBox>
  );
}

CoverLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
