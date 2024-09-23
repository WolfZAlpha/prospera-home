/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// prospera defi dashboard example components
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import Footer from "../../../../examples/Footer";
import TeamProfileCard from "../../../../examples/Cards/TeamCards/TeamProfileCard";
import EventCard from "../../../../examples/Cards/EventCard";

// Teams page components
import Header from "../profile-overview/components/Header/index";
import Stories from "./components/Stories";
import Post from "./components/Post";

// Images
import team1 from "../../../../assets/images/avatar1.png";
import team2 from "../../../../assets/images/avatar2.png";
import team3 from "../../../../assets/images/avatar3.png";
import team4 from "../../../../assets/images/avatar4.png";
import team5 from "../../../../assets/images/avatar5.png";
import logoSlack from "../../../../assets/images/small-logos/logo-slack.svg";
import logoInvision from "../../../../assets/images/small-logos/logo-invision.svg";

function Teams() {
  // TeamProfileCard dropdown menu state
  const [marketingMenu, setMarketingMenu] = useState(null);
  const [designMenu, setDesignMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  const openMarketingMenu = (event) => setMarketingMenu(event.currentTarget);
  const closeMarketingMenu = () => setMarketingMenu(null);
  const openDesignMenu = (event) => setDesignMenu(event.currentTarget);
  const closeDesignMenu = () => setDesignMenu(null);

  // Dropdown menu for the digital marketing TeamProfileCard
  const renderMarketingMenu = (
    <Menu
      anchorEl={marketingMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(marketingMenu)}
      onClose={closeMarketingMenu}
      keepMounted
    >
      <MenuItem onClick={closeMarketingMenu}>Action</MenuItem>
      <MenuItem onClick={closeMarketingMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMarketingMenu}>Something else here</MenuItem>
    </Menu>
  );

  // Dropdown menu for the design TeamProfileCard
  const renderDesignMenu = (
    <Menu
      anchorEl={designMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(designMenu)}
      onClose={closeDesignMenu}
      keepMounted
    >
      <MenuItem onClick={closeDesignMenu}>Action</MenuItem>
      <MenuItem onClick={closeDesignMenu}>Another action</MenuItem>
      <MenuItem onClick={closeDesignMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <Header />
      <PDBox my={3}>
        <Stories />
      </PDBox>
      <PDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Post />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid item xs={12}>
              <PDBox mb={3}>
                <TeamProfileCard
                  title="digital marketing"
                  description="A group of people who collectively are responsible for all of the work necessary to produce working, validated assets."
                  industry="marketing team"
                  rating={4.5}
                  members={[
                    { image: team1, name: "Alexa Tompson" },
                    { image: team2, name: "Martin Doe" },
                    { image: team3, name: "Alexaner Smith" },
                    { image: team4, name: "Romina Hadid" },
                  ]}
                  dropdown={{
                    action: openMarketingMenu,
                    menu: renderMarketingMenu,
                  }}
                />
              </PDBox>
            </Grid>
            <Grid item xs={12}>
              <PDBox mb={3}>
                <TeamProfileCard
                  title="design"
                  description="Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too."
                  industry="design team"
                  rating={5}
                  members={[
                    { image: team1, name: "Alexa Tompson" },
                    { image: team2, name: "Martin Doe" },
                    { image: team3, name: "Alexaner Smith" },
                    { image: team4, name: "Romina Hadid" },
                  ]}
                  dropdown={{
                    action: openDesignMenu,
                    menu: renderDesignMenu,
                  }}
                />
              </PDBox>
            </Grid>
            <Grid item xs={12}>
              <PDBox mb={3}>
                <EventCard
                  id="902-128-281"
                  image={logoSlack}
                  title="slack meet"
                  dateTime="11:00 AM"
                  description="You have an upcoming meet for Marketing Planning"
                  action={{ type: "internal", route: "/", color: "info", label: "join" }}
                  members={[
                    { image: team1, name: "Alexa Tompson" },
                    { image: team2, name: "Martin Doe" },
                    { image: team3, name: "Alexaner Smith" },
                    { image: team5, name: "Romina Hadid" },
                  ]}
                />
              </PDBox>
            </Grid>

            <Grid item xs={12}>
              <EventCard
                id="111-968-981"
                image={logoInvision}
                title="invision"
                dateTime="4:45 PM"
                description={
                  <>
                    You have an upcoming video call for{" "}
                    <PDTypography component="span" variant="body2" color="white">
                      Vision Design
                    </PDTypography>{" "}
                    at 5:00 PM.
                  </>
                }
                action={{ type: "internal", route: "/", color: "info", label: "join" }}
                members={[
                  { image: team1, name: "Alexa Tompson" },
                  { image: team2, name: "Martin Doe" },
                  { image: team3, name: "Alexaner Smith" },
                  { image: team5, name: "Romina Hadid" },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Teams;
