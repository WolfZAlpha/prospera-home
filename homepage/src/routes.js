/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

/** 
  All of the routes for the PROSPERA DEFI PLATFORM React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/company/about-us";
import ContactUs from "layouts/pages/support/contact-us";
import Faq from "layouts/pages/support/faq";
import Privacy from "layouts/pages/support/privacy";
import AugmentedRealityPage from "layouts/pages/augmented-reality";

// Account
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpCoverPage from "layouts/authentication/sign-up/cover";
import ResetPasswordPage from "layouts/authentication/reset-password/cover";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "company",
        collapse: [
          {
            name: "about us",
            route: "/pages/company/about-us",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "support",
        collapse: [
          {
            name: "contact us",
            route: "/pages/support/contact-us",
            component: <ContactUs />,
          },
          {
            name: "faq",
            route: "/pages/support/faq",
            component: <Faq />,
          },
          {
            name: "privacy",
            route: "/pages/support/privacy",
            component: <Privacy />,
          },
        ],
      },
      {
        name: "apps",
        collapse: [
          {
            name: "augmented reality",
            route: "/pages/augmented-reality",
            component: <AugmentedRealityPage />,
          },
        ],
      },
    ],
  },
  {
    name: "account",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        route: "/authentication/sign-in/illustration",
        component: <SignInIllustration />,
      },
      {
        name: "sign up",
        route: "/authentication/sign-up/cover",
        component: <SignUpCoverPage />,
      },
      {
        name: "reset password",
        route: "/authentication/reset-password/cover",
        component: <ResetPasswordPage />,
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
];

export default routes;
