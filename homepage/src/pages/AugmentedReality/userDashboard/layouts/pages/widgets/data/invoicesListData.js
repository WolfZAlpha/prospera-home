/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prosperas defi dashboard components
import PDTypography from "../../../../components/PDTypography";

// Icons
import { IoIosRocket, IoMdCube } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default [
  {
    color: "white",
    icon: <IoIosRocket color="white" size="19px" />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <PDTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </PDTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "white",
    icon: <IoBuild color="white" size="19px" />,
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <PDTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </PDTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "white",
    icon: <IoMdCube color="white" size="19px" />,
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <PDTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </PDTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "white",
    icon: <FaUser color="white" size="19px" />,
    name: "Happy users",
    description: (
      <PDTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </PDTypography>
    ),
    route: "/",
  },
];
