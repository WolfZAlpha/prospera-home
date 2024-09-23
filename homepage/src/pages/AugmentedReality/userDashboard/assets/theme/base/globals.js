/** 
=========================================================
* PROSPERA DEFI USER DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import colors from "./colors";
import ParticleVortex from "../components/backgrounds/ParticleVortex";

const { info, dark } = colors;

export default {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    width: "100%",
    height: "100%",
    overflow: "fluid",
    backgroundColor: "#000",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
  // Add the ParticleVortex component to the body
  "#particle-vortex": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
};
