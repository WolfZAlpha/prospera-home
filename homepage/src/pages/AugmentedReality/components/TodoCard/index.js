/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { AuthContext } from "contexts/AuthContext";

function TodoCard() {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState(["Review DeFi strategies", "Analyze market trends"]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <MKBox p={2} display="flex" flexDirection="column" height="100%">
        <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <MKTypography variant="h5" color="white">
            {user?.name}&apos;s Tasks
          </MKTypography>
          <MKBox textAlign="center" lineHeight={1}>
            <MKTypography variant="h1" color="white" fontWeight="bold">
              {todos.length}
            </MKTypography>
            <MKTypography variant="button" color="white" fontWeight="regular">
              items
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox flexGrow={1} overflow="auto">
          {todos.map((todo, index) => (
            <MKBox
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <MKTypography variant="body2" color="white" fontWeight="regular">
                {todo}
              </MKTypography>
              <MKButton
                variant="text"
                color="white"
                size="small"
                onClick={() => handleDeleteTodo(index)}
              >
                <Icon>delete</Icon>
              </MKButton>
            </MKBox>
          ))}
        </MKBox>
        <MKBox mt={2}>
          <MKInput
            variant="standard"
            placeholder="Add new PROSPERA task"
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
            inputProps={{ style: { color: "white" } }}
          />
        </MKBox>
        <Tooltip title="Add Task" placement="top">
          <MKBox
            textAlign="center"
            py={1}
            color="white"
            mt={2}
            sx={{
              cursor: "pointer",
              transition: "all 300ms linear",
              "&:hover": { transform: "translateY(-2px)" },
            }}
            onClick={handleAddTodo}
          >
            <Icon sx={{ fontWeight: "bold" }} fontSize="default">
              add
            </Icon>
          </MKBox>
        </Tooltip>
      </MKBox>
    </Card>
  );
}

export default TodoCard;
