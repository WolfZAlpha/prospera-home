/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { Award, Diamond, Rocket } from "lucide-react";

const badges = [
  { id: "first-stake", icon: Award, title: "First to Stake" },
  { id: "diamond-hands", icon: Diamond, title: "Diamond Hands" },
  { id: "to-the-moon", icon: Rocket, title: "To the Moon" },
];

const AchievementBadges = ({ earnedBadges }) => {
  console.log("Rendering AchievementBadges", { badges, earnedBadges });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
      {badges.map((badge) => {
        const BadgeIcon = badge.icon;
        const isEarned = earnedBadges.includes(badge.id);

        console.log(`Rendering badge: ${badge.id}`, { isEarned, icon: !!BadgeIcon });

        return (
          <Box
            key={badge.id}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Avatar
              sx={{
                bgcolor: "common.black",
                color: "#01ff02",
                width: 60,
                height: 60,
                mb: 2,
                border: "2px solid #01ff02",
                boxShadow: `
                  0 0 10px rgba(1, 255, 2, 0.5),
                  0 0 20px rgba(1, 255, 2, 0.3),
                  inset 0 0 15px rgba(1, 255, 2, 0.5)
                `,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: `
                    0 0 15px rgba(1, 255, 2, 0.7),
                    0 0 25px rgba(1, 255, 2, 0.5),
                    inset 0 0 20px rgba(1, 255, 2, 0.7)
                  `,
                },
              }}
            >
              {BadgeIcon ? <BadgeIcon size={32} /> : badge.id}
            </Avatar>
            <Typography
              variant="caption"
              sx={{
                color: "common.white",
                textAlign: "center",
                maxWidth: 80,
                textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                fontWeight: "bold",
              }}
            >
              {badge.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default AchievementBadges;
