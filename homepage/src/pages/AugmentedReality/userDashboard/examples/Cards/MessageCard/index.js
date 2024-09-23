/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";

function MessageCard({ image, text, action }) {
  return (
    <Card>
      <PDBox>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <PDBox
              component="img"
              src={image}
              alt="message-image"
              borderRadius="lg"
              shadow="md"
              width="100%"
              display="inherit"
            />
          </Grid>
          <Grid item xs={8}>
            <PDBox mb={2} lineHeight={1.4}>
              <PDTypography
                fontSize={16}
                color="white"
                sx={({ breakpoints }) => ({
                  [breakpoints.only("sm")]: {
                    fontSize: "14px",
                  },
                })}
                fontWeight="regular"
              >
                {text}
              </PDTypography>
            </PDBox>
            {action.type === "internal" ? (
              <PDButton
                component={Link}
                to={action.route}
                color={action.color}
                variant="contained"
                width="135px"
                height="35px"
                size="small"
              >
                {action.label}
              </PDButton>
            ) : (
              <PDButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color}
                variant="contained"
                width="135px"
                height="35px"
                size="small"
              >
                {action.label}
              </PDButton>
            )}
          </Grid>
        </Grid>
      </PDBox>
    </Card>
  );
}

// Typechecking props for the MessageCard
MessageCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "info",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageCard;
