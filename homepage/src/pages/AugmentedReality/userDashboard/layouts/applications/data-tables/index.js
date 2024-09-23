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

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import DataTable from "../../../examples/Tables/DataTable";

// Data
import dataTableData from "./data/dataTableData";

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox pt={6} pb={3}>
        <PDBox mb={3}>
          <Card>
            <PDBox p={3} pl={0} lineHeight={1}>
              <PDTypography variant="h5" fontWeight="medium" color="white">
                Datatable Simple
              </PDTypography>
              <PDTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </PDTypography>
            </PDBox>
            <DataTable table={dataTableData} />
          </Card>
        </PDBox>
        <Card>
          <PDBox p={3} pl={0} lineHeight={1}>
            <PDTypography variant="h5" fontWeight="medium" color="white">
              Datatable Search
            </PDTypography>
            <PDTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </PDTypography>
          </PDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
