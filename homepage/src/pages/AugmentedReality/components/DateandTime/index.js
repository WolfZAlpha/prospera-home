import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const HorizontalBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
  background: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(10px)",
  color: "white",
  borderRadius: theme.shape.borderRadius,
}));

const CentralBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.8)",
  borderRadius: "50%",
  width: "150px",
  height: "150px",
  padding: theme.spacing(2),
}));

const WeatherIcon = styled("img")({
  width: "24px",
  height: "24px",
});

const DateandTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: 0, icon: "01d", condition: "", forecast: [] });
  const [cryptoData, setCryptoData] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      const fetchWeather = async () => {
        const options = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
          params: { q: `${location.latitude},${location.longitude}`, days: "5" },
          headers: {
            "x-rapidapi-key": "bcf64a680amsh624e3c7b0b87265p1e61e1jsn443bdf2df9d0",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          setWeather({
            temp: response.data.current.temp_c,
            icon: response.data.current.condition.icon,
            condition: response.data.current.condition.text,
            forecast: response.data.forecast.forecastday.slice(1, 6).map((day) => ({
              date: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
              icon: day.day.condition.icon,
              maxTemp: day.day.maxtemp_c,
            })),
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeather();
    }
  }, [location]);

  useEffect(() => {
    // Simulated crypto data fetch
    setCryptoData([
      { name: "BTC", value: 50000 },
      { name: "ETH", value: 3000 },
      { name: "XRP", value: 1 },
    ]);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <HorizontalBar>
      <Box sx={{ width: "30%", height: 100 }}>
        <ResponsiveContainer>
          <LineChart data={cryptoData}>
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <CentralBox>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {formatTime(dateTime)}
        </Typography>
        <Typography variant="body2">{formatDate(dateTime)}</Typography>
      </CentralBox>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "30%" }}>
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <WeatherIcon src={weather.icon} alt="Current weather" />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {weather.temp}°C
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {weather.forecast.map((day, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: 1 }}
            >
              <Typography variant="caption">{day.date}</Typography>
              <WeatherIcon src={day.icon} alt={`Forecast for ${day.date}`} />
              <Typography variant="caption">{Math.round(day.maxTemp)}°C</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </HorizontalBar>
  );
};

export default DateandTime;
