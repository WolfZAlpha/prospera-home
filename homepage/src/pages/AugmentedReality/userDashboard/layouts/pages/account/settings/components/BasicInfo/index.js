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

// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDSelect from "../../../../../../components/PDSelect";
import PDTagInput from "../../../../../../components/PDTagInput";

// Settings page components
import FormField from "../../../components/FormField";

// Data
import selectData from "./data/selectData";

function BasicInfo() {
  const [skills, setSkills] = useState(["react", "angular"]);

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <PDBox mb="40px">
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Basic Info
        </PDTypography>
      </PDBox>
      <PDBox component="form">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="first name" placeholder="Michael" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="last name" placeholder="Jackson" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <PDBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <PDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <PDTypography
                      component="label"
                      variant="caption"
                      color="white"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      I&apos;m
                    </PDTypography>
                  </PDBox>
                  <PDSelect placeholder="Male" options={selectData.gender} />
                </PDBox>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <PDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <PDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <PDTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          color="white"
                          textTransform="capitalize"
                        >
                          birth date
                        </PDTypography>
                      </PDBox>
                      <PDSelect placeholder="February" options={selectData.birthDate} />
                    </PDBox>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <PDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <PDSelect placeholder={1} options={selectData.days} />
                    </PDBox>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <PDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <PDSelect placeholder={2021} options={selectData.years} />
                    </PDBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="confirmation email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="your location" placeholder="Sydney, A" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="phone number"
              placeholder="+40 735 631 620"
              inputProps={{ type: "number" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="language" placeholder="English" />
          </Grid>
          <Grid item xs={12} md={6}>
            <PDBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <PDTagInput
                tags={skills}
                placeholder=" "
                onChange={(newSkill) => setSkills(newSkill)}
                removeOnBackspace
              />
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </Card>
  );
}

export default BasicInfo;
