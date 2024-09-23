import React, { useState, useEffect } from "react";
import axios from "axios";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { styled } from "@mui/material/styles";

// Import custom weather icons
import cloudyDay1 from "./images/cloudy-day-1.svg";
import cloudyNight1 from "./images/cloudy-night-1.svg";
import cloudyNight2 from "./images/cloudy-night-2.svg";
import cloudyNight3 from "./images/cloudy-night-3.svg";
import cloudy from "./images/cloudy.svg";
import day from "./images/day.svg";
import night from "./images/night.svg";
import rainy1 from "./images/rainy-1.svg";
import rainy2 from "./images/rainy-2.svg";
import rainy3 from "./images/rainy-3.svg";
import rainy4 from "./images/rainy-4.svg";
import rainy7 from "./images/rainy-7.svg";
import snowy1 from "./images/snowy-1.svg";
import snowy2 from "./images/snowy-2.svg";
import snowy3 from "./images/snowy-3.svg";
import snowy4 from "./images/snowy-4.svg";
import snowy6 from "./images/snowy-6.svg";
import thunder from "./images/thunder.svg";

// Mapping weather descriptions to custom icons
const weatherIconMap = {
  "Partly cloudy": cloudyDay1,
  Cloudy: cloudy,
  Overcast: cloudy,
  Clear: day,
  Sunny: day,
  "Patchy rain possible": rainy1,
  "Light rain": rainy2,
  "Moderate rain": rainy3,
  "Heavy rain": rainy4,
  "Torrential rain": rainy7,
  "Patchy snow possible": snowy1,
  "Light snow": snowy2,
  "Moderate snow": snowy3,
  "Heavy snow": snowy4,
  "Thundery outbreaks possible": thunder,
  Thunderstorms: thunder,
  Mist: cloudy,
  Fog: cloudy,
  "Patchy freezing drizzle possible": snowy6,
  Blizzard: snowy6,
  "Night Clear": night,
  "Night Partly cloudy": cloudyNight1,
  "Night Cloudy": cloudyNight2,
  "Night Overcast": cloudyNight3,
};

const WeatherIcon = styled("img")({
  width: "32px", // Set the desired width of the icon
  height: "32px", // Set the desired height of the icon
  marginRight: "8px", // Space between the icon and text
});

const WeatherForecast = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: "http://api.weatherstack.com/current",
        params: {
          access_key: "6129fb1c316f470d2f3a45c1c1b487ee",
          query: "fetch:ip",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);

        if (response.data.current) {
          setWeather(response.data);
        } else {
          setError("No weather data available");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching weather data");
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const weatherDescription = weather?.current?.weather_descriptions[0] || "";
  const weatherIcon = weatherIconMap[weatherDescription] || day; // Default to day icon

  return (
    <MKBox display="flex" flexDirection="column" alignItems="flex-end" sx={{ color: "white" }}>
      {weather ? (
        <>
          <MKBox display="flex" alignItems="center">
            <WeatherIcon src={weatherIcon} alt="Weather Icon" />
            <MKTypography
              variant="body2"
              sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
            >
              {weather.location.name}, {weather.location.region}, {weather.location.country}
            </MKTypography>
          </MKBox>
          <MKTypography
            variant="body2"
            sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
          >
            {weather.current.temperature}°C | {weatherDescription}
          </MKTypography>
          <MKTypography
            variant="body2"
            sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
          >
            Feels like: {weather.current.feelslike}°C
          </MKTypography>
          <MKTypography
            variant="body2"
            sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
          >
            Wind: {weather.current.wind_speed} km/h {weather.current.wind_dir}
          </MKTypography>
          <MKTypography
            variant="body2"
            sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
          >
            Humidity: {weather.current.humidity}%
          </MKTypography>
        </>
      ) : (
        <MKTypography
          variant="body2"
          sx={{ fontFamily: "Helvetica Monospaced, sans-serif", color: "#f5f5f5" }}
        >
          Loading weather data...
        </MKTypography>
      )}
    </MKBox>
  );
};

export default WeatherForecast;
