import React from "react";
import { Box, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

const WeatherWidget = ({ temperature, condition, icon }) => {
  return (
    <MKBox display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2">{temperature}</Typography>
      <Typography variant="h6" textTransform="uppercase">
        {condition}
      </Typography>
      <Box component="img" src={icon} width="30%" mt={2} />
    </MKBox>
  );
};

export default WeatherWidget;

WeatherWidget.propTypes = {
  temperature: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
