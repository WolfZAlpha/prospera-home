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
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import PDSwitch from "../../../../../../components/PDSwitch";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";

// Setting pages components
import TableCell from "../TableCell";

function Notifications() {
  return (
    <Card id="notifications">
      <PDBox lineHeight={1} mb="40px">
        <PDBox>
          <PDTypography variant="lg" color="white" fontWeight="bold">
            Notifications
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" color="text" fontWeight="regular">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox minWidth="auto" overflow={{ sm: "scroll", lg: "hidden" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <PDBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  SMS
                </TableCell>
              </TableRow>
            </PDBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <PDBox lineHeight={1.4}>
                    <PDTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Mentions
                    </PDTypography>
                    <PDTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </PDTypography>
                  </PDBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <PDBox lineHeight={1.4}>
                    <PDTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Comments
                    </PDTypography>
                    <PDTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </PDTypography>
                  </PDBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <PDBox lineHeight={1.4}>
                    <PDTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Follows
                    </PDTypography>
                    <PDTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </PDTypography>
                  </PDBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <PDSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 1, 0.5]} noBorder>
                  <PDTypography display="block" variant="button" color="white" fontWeight="regular">
                    Log in from a new device
                  </PDTypography>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <PDSwitch color="info" defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Notifications;
