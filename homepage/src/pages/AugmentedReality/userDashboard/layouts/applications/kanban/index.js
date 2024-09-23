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

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// react-html-parser components
// import ReactHtmlParser from "react-html-parser";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDButton from "../../../components/PDButton";
import PDTypography from "../../../components/PDTypography";
import PDInput from "../../../components/PDInput";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";

// Kanban application components
import Header from "./components/Header";

// Data
import boards from "./data";

function Kanban() {
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <PDBox py={3}>
        <PDBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </PDBox>
        <PDBox
          position="relative"
          my={4}
          sx={({ palette: { light }, functions: { pxToRem }, borders: { borderRadius } }) => ({
            "& .react-kanban-column": {
              backgroundColor: light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <PDBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <PDTypography variant="h6" color="white">
                    {title}
                  </PDTypography>
                  <PDButton
                    size="small"
                    color="info"
                    onClick={(event) => openNewCardForm(event, id)}
                  >
                    <Icon
                      sx={{ fontWeight: "bold", color: ({ palette: { white } }) => white.main }}
                    >
                      add
                    </Icon>
                  </PDButton>
                </PDBox>
                {newCardForm === id ? (
                  <PDBox my={2.5}>
                    <PDInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    />
                    <PDBox display="flex" mt={2}>
                      <PDButton
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </PDButton>
                      <PDBox ml={1}>
                        <PDButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </PDButton>
                      </PDBox>
                    </PDBox>
                  </PDBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <PDBox
                key={id}
                dragging={dragging.toString() || undefined}
                display="block"
                width="calc(450px - 40px)"
                bgColor="white"
                color="white"
                borderRadius="md"
                mt={2.5}
                py={1.875}
                px={1.875}
                lineHeight={1.5}
                sx={({
                  palette: { gradients },
                  borders: { borderRadius },
                  functions: { linearGradient },
                }) => ({
                  borderRadius: borderRadius.lg,
                  background: linearGradient(
                    gradients.cardLight.main,
                    gradients.cardLight.state,
                    gradients.cardLight.deg
                  ),
                  fontSize: ({ typography: { size } }) => size.md,
                })}
              >
                {template}
              </PDBox>
            )}
            onCardNew={() => null}
          />
        </PDBox>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
