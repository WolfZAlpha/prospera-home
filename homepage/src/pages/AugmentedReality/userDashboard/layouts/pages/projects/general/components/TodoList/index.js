/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";

// General page components
import Todo from "../Todo";

function TodoList() {
  return (
    <Card>
      <PDBox display="flex" justifyContent="space-between" alignItems="center">
        <PDTypography variant="lg" fontWeight="bold" color="white">
          To do List
        </PDTypography>
        <PDTypography variant="button" fontWeight="regular" color="text">
          23 - 30 March 2020
        </PDTypography>
      </PDBox>
      <Divider />
      <PDBox>
        <PDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Todo
            title="Check status"
            date="24 March 2019"
            project="2414_VR4sf3#"
            company="Creative Tim"
            defaultChecked
          />
          <Todo
            color="warning"
            title="Management discussion"
            date="24 March 2019"
            project="4411_8sIsdd23"
            company="Apple"
            defaultChecked
          />
          <Todo
            color="primary"
            title="New channel distribution"
            date="25 March 2019"
            project="827d_kdl33D1s"
            company="Slack"
            defaultChecked
          />
          <Todo
            color="success"
            title="IOS App development"
            date="26 March 2019"
            project="88s1_349DA2sa"
            company="Facebook"
            noDivider
          />
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default TodoList;
