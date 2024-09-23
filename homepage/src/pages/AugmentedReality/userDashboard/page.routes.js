/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

/** 
  All of the routes for the page layout of prospera defi dashboard are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// prospera defi dashboard icons
import { IoDocument, IoBuild, IoHome, IoPerson, IoPeople } from "react-icons/io5";
import { FaGlobe, FaCalendarAlt } from "react-icons/fa";
import { MdSpaceDashboard, MdTableRows } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";

import colors from "./assets/theme/base/colors";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
      },
      { name: "ANALYTICS", key: "user", route: "/dashboards/user" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <IoPeople size="16px" color="white" />,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <IoPerson size="16px" color="white" />,
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/pages/profile/profile-overview",
      },
      {
        name: "Teams",
        key: "teams",
        route: "/pages/profile/teams",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/pages/profile/all-projects",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <FaGlobe size="16px" color="white" />,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Alerts",
        key: "alerts",
        route: "/pages/alerts",
      },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <IoBuild size="16px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <IoDocument size="16px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-in/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-in/illustration",
      },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-up/illustration",
      },
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        icon: <MdSpaceDashboard size="16px" color={colors.info.main} />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        icon: <RiProfileLine size="16px" color={colors.info.main} />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        icon: <MdTableRows size="16px" color={colors.info.main} />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        icon: <FaCalendarAlt size="16px" color={colors.info.main} />,
      },
    ],
  },
];

export default pageRoutes;
