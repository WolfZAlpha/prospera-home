/** 
=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.
*/

import Default from "./layouts/dashboards/default";
import USER from "./layouts/dashboards/user";
import ProfileOverview from "./layouts/pages/profile/profile-overview";
import Teams from "./layouts/pages/profile/teams";
import AllProjects from "./layouts/pages/profile/all-projects";
import Reports from "./layouts/pages/users/reports";
import NewUser from "./layouts/pages/users/new-user";
import Settings from "./layouts/pages/account/settings";
import Billing from "./layouts/pages/account/billing";
import Invoice from "./layouts/pages/account/invoice";
import General from "./layouts/pages/projects/general";
import Timeline from "./layouts/pages/projects/timeline";
import Widgets from "./layouts/pages/widgets";
import Charts from "./layouts/pages/charts";
import Alerts from "./layouts/pages/alerts";
import PricingPage from "./layouts/pages/pricing-page";
import RTL from "./layouts/pages/rtl";
import Kanban from "./layouts/applications/kanban";
import Wizard from "./layouts/applications/wizard";
import DataTables from "./layouts/applications/data-tables";
import Calendar from "./layouts/applications/calendar";
import SignInBasic from "./layouts/authentication/sign-in/basic";
import SignInCover from "./layouts/authentication/sign-in/cover";
import SignInIllustration from "./layouts/authentication/sign-in/illustration";
import SignUpBasic from "./layouts/authentication/sign-up/basic";
import SignUpCover from "./layouts/authentication/sign-up/cover";
import SignUpIllustration from "./layouts/authentication/sign-up/illustration";

import { IoDocument, IoBuild, IoDocuments, IoHome } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="15px" color="inherit" />,
    collapse: [
      {
        name: "Main Dashboard",
        key: "default",
        route: "dashboards/default",
        component: <Default />,
      },
      {
        name: "Analytics",
        key: "user",
        route: "dashboards/user",
        component: <USER />,
      },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "pages/profile/profile-overview",
            component: <ProfileOverview />,
          },
          {
            name: "Teams",
            key: "teams",
            route: "pages/profile/teams",
            component: <Teams />,
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "pages/profile/all-projects",
            component: <AllProjects />,
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "Reports",
            key: "reports",
            route: "pages/users/reports",
            component: <Reports />,
          },
          {
            name: "New User",
            key: "new-user",
            route: "pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "pages/account/invoice",
            component: <Invoice />,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "General",
            key: "general",
            route: "pages/projects/general",
            component: <General />,
          },
          {
            name: "Timeline",
            key: "timeline",
            route: "pages/projects/timeline",
            component: <Timeline />,
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "pages/pricing-page",
        component: <PricingPage />,
      },
      {
        name: "RTL",
        key: "rtl",
        route: "pages/rtl",
        component: <RTL />,
      },
      {
        name: "Widgets",
        key: "widgets",
        route: "pages/widgets",
        component: <Widgets />,
      },
      {
        name: "Charts",
        key: "charts",
        route: "pages/charts",
        component: <Charts />,
      },
      {
        name: "Alerts",
        key: "alerts",
        route: "pages/alerts",
        component: <Alerts />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <IoBuild size="15px" color="inherit" />,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "applications/kanban",
        component: <Kanban />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "applications/wizard",
        component: <Wizard />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "applications/data-tables",
        component: <DataTables />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "applications/calendar",
        component: <Calendar />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <IoDocuments size="15px" color="inherit" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "authentication/sign-up/basic",
            component: <SignUpBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "authentication/sign-up/cover",
            component: <SignUpCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "authentication/sign-up/illustration",
            component: <SignUpIllustration />,
          },
        ],
      },
    ],
  },
];

export default routes;
