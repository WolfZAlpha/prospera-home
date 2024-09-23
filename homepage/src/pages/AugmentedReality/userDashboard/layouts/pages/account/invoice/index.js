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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PDButton from "../../../../components/PDButton";

// prospera defi dashboard base styles
import borders from "../../../../assets/theme/base/borders";
import colors from "../../../../assets/theme/base/colors";

// prospera defi dashboard example components
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../../examples/Footer";

function Invoice() {
  const { borderWidth } = borders;
  const { grey } = colors;
  const borderBottom = `${borderWidth[1]} solid ${grey[500]}`;

  return (
    <DashboardLayout stickyNavbar>
      <DashboardNavbar />
      <PDBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={8}>
            <Card>
              {/* Invoice header */}
              <PDBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item sm={12} md={5}>
                    <PDBox mb="30px">
                      <PDTypography
                        variant="lg"
                        textGradient={true}
                        color="logo"
                        letterSpacing={2}
                        fontWeight="medium"
                        sx={{
                          margin: "0 auto",
                        }}
                      >
                        VISION UI PRO
                      </PDTypography>
                    </PDBox>

                    <PDTypography variant="button" color="white" lineHeight={0} fontWeight="medium">
                      St. Independence Embankment,
                      <br /> 050105 Bucharest, Romania
                    </PDTypography>
                    <PDBox mt={1} mb={2}>
                      <PDTypography display="block" variant="caption" color="white">
                        tel: +4 (074) 1090873
                      </PDTypography>
                    </PDBox>
                  </Grid>
                  <Grid item sm={12} md={7} lg={3}>
                    <PDBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <PDBox mt={1}>
                        <PDTypography variant="button" color="white" fontWeight="medium">
                          Billed to: John Doe
                        </PDTypography>
                      </PDBox>
                      <PDBox mb={1}>
                        <PDTypography variant="caption" color="white">
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </PDTypography>
                      </PDBox>
                    </PDBox>
                  </Grid>
                </Grid>
                <PDBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item sm={12} md={4}>
                      <PDTypography variant="caption" color="white" fontWeight="regular">
                        Invoice no
                      </PDTypography>
                      <PDTypography fontSize={14} color="white" fontWeight="medium">
                        #0453119
                      </PDTypography>
                    </Grid>
                    <Grid item sm={12} md={7} lg={5}>
                      <PDBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <PDBox width="50%">
                          <PDTypography variant="caption" color="white" fontWeight="regular">
                            Invoice date:
                          </PDTypography>
                        </PDBox>
                        <PDBox width="50%">
                          <PDTypography variant="button" color="white" fontWeight="medium">
                            06/03/2019
                          </PDTypography>
                        </PDBox>
                      </PDBox>
                      <PDBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <PDBox width="50%">
                          <PDTypography variant="caption" color="white" fontWeight="medium">
                            Due date:
                          </PDTypography>
                        </PDBox>
                        <PDBox width="50%">
                          <PDTypography variant="button" fontWeight="medium" color="white">
                            11/03/2019
                          </PDTypography>
                        </PDBox>
                      </PDBox>
                    </Grid>
                  </Grid>
                </PDBox>
              </PDBox>

              {/* Invoice table */}
              <PDBox p={3}>
                <PDBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <PDBox component="thead">
                      <TableRow>
                        <PDBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="xxs" color="text" fontWeight="medium">
                            ITEM
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="xxs" color="text" fontWeight="medium">
                            QUANTITY
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="xxs" color="text" fontWeight="medium">
                            RATE
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="xxs" color="text" fontWeight="medium">
                            AMOUNT
                          </PDTypography>
                        </PDBox>
                      </TableRow>
                    </PDBox>
                    <TableBody>
                      <TableRow>
                        <PDBox
                          component="td"
                          textAlign="left"
                          p={1}
                          py={2}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            Premium Support
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            1
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            $ 9.00
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            $ 9.00
                          </PDTypography>
                        </PDBox>
                      </TableRow>
                      <TableRow>
                        <PDBox
                          component="td"
                          textAlign="left"
                          p={1}
                          py={2}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            Vision UI Design System PRO
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            3
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            $ 100.00
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="body2" color="white">
                            $ 300.00
                          </PDTypography>
                        </PDBox>
                      </TableRow>
                      <TableRow>
                        <PDBox component="td" textAlign="left" p={1}>
                          <PDTypography variant="body2" color="white">
                            Parts for service
                          </PDTypography>
                        </PDBox>
                        <PDBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <PDTypography variant="body2" color="white">
                            1
                          </PDTypography>
                        </PDBox>
                        <PDBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <PDTypography variant="body2" color="white">
                            $ 89.00
                          </PDTypography>
                        </PDBox>
                        <PDBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <PDTypography variant="body2" color="white">
                            $ 89.00
                          </PDTypography>
                        </PDBox>
                      </TableRow>
                      <TableRow>
                        <PDBox component="td" textAlign="left" p={1} borderBottom={borderBottom} />
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="lg" color="white" fontWeight="medium">
                            Total
                          </PDTypography>
                        </PDBox>
                        <PDBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <PDTypography variant="lg" color="white" fontWeight="medium">
                            $ 698
                          </PDTypography>
                        </PDBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </PDBox>
              </PDBox>

              {/* Invoice footer */}
              <PDBox p={3} mt={7}>
                <Grid container>
                  <Grid item sm={12} lg={5}>
                    <PDTypography variant="lg" color="white" fontWeight="medium">
                      Thank you!
                    </PDTypography>
                    <PDBox mt={1} mb={2} lineHeight={0}>
                      <PDTypography variant="caption" fontWeight="regular" color="white">
                        If you encounter any issues related to the invoice you can contact us at:
                      </PDTypography>
                    </PDBox>
                    <PDTypography
                      component="span"
                      variant="button"
                      fontWeight="regular"
                      color="white"
                    >
                      email:{" "}
                      <PDTypography
                        component="span"
                        variant="button"
                        color="white"
                        fontWeight="medium"
                      >
                        support@creative-tim.com
                      </PDTypography>
                    </PDTypography>
                  </Grid>
                  <Grid item sm={12} lg={7}>
                    <PDBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <PDButton
                        variant="contained"
                        color="info"
                        sx={{ minWidth: "100px" }}
                        onClick={() => window.print(this)} // minify the sidebar before the print and set the navbar to be unfixed
                      >
                        print
                      </PDButton>
                    </PDBox>
                  </Grid>
                </Grid>
              </PDBox>
            </Card>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Invoice;
