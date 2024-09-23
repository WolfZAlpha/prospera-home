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
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDBadge from "../../../../../../components/PDBadge";

function Sessions() {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <PDBox lineHeight={1} mb="40px">
        <PDBox>
          <PDTypography variant="lg" color="white" fontWeight="bold">
            Sessions
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDBox display="flex" alignItems="center" mb={{ sm: "6px", md: "0px" }}>
            <PDBox textAlign="center" color="white" px={{ sm: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </PDBox>
            <PDBox height="100%" ml={2} lineHeight={1.4} mr={2}>
              <PDTypography display="block" variant="button" fontWeight="regular" color="white">
                Bucharest 68.133.163.201
              </PDTypography>
              <PDTypography variant="caption" color="text">
                Your current session
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            display="flex"
            alignItems="center"
            width={{ sm: "100%", md: "auto" }}
            justifyContent={{ sm: "flex-end", md: "auto" }}
          >
            <PDBadge
              variant="contained"
              size="sm"
              badgeContent="active"
              color="green"
              sx={{ fontSize: "10px" }}
              container
            />
            <PDBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                EU
              </PDTypography>
            </PDBox>
            <PDTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </PDTypography>
          </PDBox>
        </PDBox>
        <Divider light />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDBox display="flex" alignItems="center" mr={2}>
            <PDBox textAlign="center" color="white" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </PDBox>
            <PDBox ml={2}>
              <PDTypography display="block" variant="body2" fontWeight="regular" color="white">
                Chrome on macOS
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            width={{ sm: "100%", md: "auto" }}
            display="flex"
            alignItems="center"
            justifyContent={{ sm: "flex-end", md: "auto" }}
          >
            <PDBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                US
              </PDTypography>
            </PDBox>
            <PDTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </PDTypography>
          </PDBox>
        </PDBox>
        <Divider light />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDBox display="flex" alignItems="center" mr={2}>
            <PDBox textAlign="center" color="white" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">phone_iphone</Icon>
            </PDBox>
            <PDBox ml={2}>
              <PDTypography display="block" variant="body2" fontWeight="regular" color="white">
                Safari on iPhone
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox
            width={{ sm: "100%", md: "auto" }}
            display="flex"
            alignItems="center"
            justifyContent={{ sm: "flex-end", md: "auto" }}
          >
            <PDBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                US
              </PDTypography>
            </PDBox>
            <PDTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </PDTypography>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Sessions;
