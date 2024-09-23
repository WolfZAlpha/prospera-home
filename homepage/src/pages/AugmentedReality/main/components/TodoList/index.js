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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { AuthContext } from "contexts/AuthContext";

function TodoList() {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([
    { time: "08:00", task: "Blockchain sync", location: "Server room" },
    { time: "09:30", task: "Token economics meeting", location: "Virtual" },
    { time: "11:00", task: "Smart contract audit", location: "Office" },
  ]);
  const [newTodo, setNewTodo] = useState({ time: "", task: "", location: "" });

  const handleAddTodo = () => {
    if (newTodo.time && newTodo.task && newTodo.location) {
      setTodos([...todos, newTodo]);
      setNewTodo({ time: "", task: "", location: "" });
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
        <MKTypography variant="h5" color="white" mb={3}>
          {user?.name}&apos;s Schedule
        </MKTypography>
        <MKBox flexGrow={1} overflow="auto">
          {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <MKBox display="flex" alignItems="center">
                  <MKTypography variant="h6" fontWeight="medium" color="white" mr={2}>
                    {todo.time}
                  </MKTypography>
                  <MKBox>
                    <MKTypography variant="body2" fontWeight="medium" color="white">
                      {todo.task}
                    </MKTypography>
                    <MKTypography variant="caption" color="secondary">
                      {todo.location}
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <MKButton
                  variant="text"
                  color="white"
                  size="small"
                  onClick={() => handleDeleteTodo(index)}
                >
                  <Icon>delete</Icon>
                </MKButton>
              </MKBox>
              {index < todos.length - 1 && (
                <Divider light sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
              )}
            </React.Fragment>
          ))}
        </MKBox>
        <MKBox mt={3}>
          <MKInput
            type="time"
            variant="standard"
            fullWidth
            value={newTodo.time}
            onChange={(e) => setNewTodo({ ...newTodo, time: e.target.value })}
            inputProps={{ style: { color: "white" } }}
            sx={{ mb: 2 }}
          />
          <MKInput
            variant="standard"
            placeholder="Task"
            fullWidth
            value={newTodo.task}
            onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
            inputProps={{ style: { color: "white" } }}
            sx={{ mb: 2 }}
          />
          <MKInput
            variant="standard"
            placeholder="Location"
            fullWidth
            value={newTodo.location}
            onChange={(e) => setNewTodo({ ...newTodo, location: e.target.value })}
            inputProps={{ style: { color: "white" } }}
            sx={{ mb: 2 }}
          />
          <MKButton variant="gradient" color="info" fullWidth onClick={handleAddTodo}>
            Add Task
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}

export default TodoList;
