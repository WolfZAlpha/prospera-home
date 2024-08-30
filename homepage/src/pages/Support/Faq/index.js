/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PROSPERA DEFI PLATFORM React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "../Footer";
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

// HelpCenter page components
import FaqCollapse from "pages/Support/Faq/components/FaqCollapse";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.prosperaico.com",
          label: "join ico",
          color: "pros",
        }}
        sticky
      />
      <MKBox component="section" pt={20} pb={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    FAQ
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  <MKTypography variant="h5" my={3}>
                    Basics
                  </MKTypography>
                  <FaqCollapse
                    title="How to buy Prospera tokens?"
                    open={collapse === 1}
                    onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                  >
                    It&apos;s simple! Connect your wallet to our platform and purchase any amount of
                    $PROS tokens directly. You can participate in our ICO and join the growing
                    Prospera community.
                  </FaqCollapse>
                  <FaqCollapse
                    title="What is the value of Prospera tokens?"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    The value of $PROS tokens varies by tier: Tier 1 - $0.02, Tier 2 - $0.08, Tier 3
                    - $0.16, and the listing price is $0.20.
                  </FaqCollapse>
                  <FaqCollapse
                    title="What is the utility of $PROS tokens?"
                    open={collapse === 3}
                    onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
                  >
                    $PROS tokens provide access to our AI-driven hedge fund strategies, allowing
                    holders to participate in revenue sharing (RevShare) and earn passive daily
                    yields. Token holders also benefit from real-world rewards, including quarterly
                    dividends paid in USDC.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How are coins distributed?"
                    open={collapse === 4}
                    onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
                  >
                    Coins are distributed at the time of purchase to your wallet.
                  </FaqCollapse>
                  <FaqCollapse
                    title="What are the tokenomics of the project?"
                    open={collapse === 5}
                    onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                  >
                    Our tokenomics are designed for long-term sustainability, including deflationary
                    mechanisms such as transaction burns. For detailed information, please refer to
                    the tokenomics section on our homepage.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Why the Arbitrum blockchain?"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    Arbitrum is ideal for DeFi projects due to its scalability, security, and low
                    transaction costs. It provides the perfect foundation for the Prospera platform.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Why $PROS?"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    $PROS is pushing DeFi into the real world, offering investors the opportunity to
                    access sophisticated hedge fund strategies typically reserved for institutional
                    investors.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Staking & Rewards
                  </MKTypography>
                  <FaqCollapse
                    title="How does the staking functionality work?"
                    open={collapse === 8}
                    onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                  >
                    Staking $PROS tokens allows you to earn passive daily yields and participate in
                    our quarterly revenue sharing (RevShare). There are two staking options: locked
                    staking, which requires a minimum of 60,000 tokens with a lock-up period, and
                    flexible staking, requiring 70,000 tokens without a lock-up period.
                  </FaqCollapse>
                  <FaqCollapse
                    title="What is RevShare?"
                    open={collapse === 9}
                    onClick={() => (collapse === 9 ? setCollapse(false) : setCollapse(9))}
                  >
                    RevShare is a quarterly revenue-sharing mechanism that rewards $PROS holders. To
                    qualify, you must stake a minimum amount of tokens, either through locked or
                    flexible staking. RevShare is distributed in USDC and reflects the performance
                    of our AI-driven hedge fund.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How does the deflationary mechanism work?"
                    open={collapse === 10}
                    onClick={() => (collapse === 10 ? setCollapse(false) : setCollapse(10))}
                  >
                    To ensure the continuous appreciation and stability of $PROS, we implement a 6%
                    burn on every sell transaction. This reduces the circulating supply, supporting
                    long-term value growth.
                  </FaqCollapse>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="description"
                title="Detailed Documentation"
                description="Learn everything you need to know about Prospera and how we are democratizing access to hedge funds through cryptocurrency and AI technology."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="support"
                title="24/7 Support"
                description="Our team is here to assist you anytime, anywhere. Reach out to us with your questions or concerns."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="grid_view"
                title="Advanced AI Technology"
                description="Discover how our AI-driven strategies optimize your investments and maximize your returns."
                direction="center"
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Faq;
