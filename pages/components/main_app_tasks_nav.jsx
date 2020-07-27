import React from "react";
import { Box, IconButton, Link } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CollapseLeftBtn } from "./collapse_btn";
import moment from "moment";
import { useState } from "react";

function TaskViewNav() {
  return (
    <Box alignContent="right" textAlign="right" position="fixed">
      <div className="tasks_nav_bar">
        <Box display="flex" className="task_channel_title">
          <CollapseLeftBtn></CollapseLeftBtn>
          <Box display="flex" marginTop="10px">
            <Box display="flex" height="25px" alignItems="center">
              <b
                style={{
                  fontSize: "25px",
                  marginRight: "4px",
                  color: "#55cd7c",
                }}>
                #
              </b>
              <Box height="25px">all</Box>
              <IconButton style={{ width: "10px", height: "10px" }}>
                <ExpandMoreIcon style={{ fontSize: "20px" }}></ExpandMoreIcon>
              </IconButton>
            </Box>
          </Box>
          <Link
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              top: 35,
              left: 50,
            }}
            href="#today"
            id="today_btn"
            className="today_btn">
            <p>Today</p>
          </Link>
        </Box>
        <Box>
          <div
            style={{ display: "flex", alignContent: "center" }}
            className="task_nav_btn_container">
            <Link
              style={{
                textAlign: "center",
                marginRight: "40px",
                fontSize: "16px",
              }}
              href="?mainPanel=kanban&rightPanel=calendar"
              className="nav_btn_active">
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}>
                Tasks
              </p>
            </Link>
            <Link
              style={{
                textAlign: "center",
                marginRight: "40px",
                fontSize: "16px",
              }}
              href="?mainPanel=calendar&rightPanel=kanban"
              className="calendar_btn">
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}>
                Calendar
              </p>
            </Link>
          </div>
        </Box>
      </div>
    </Box>
  );
}

export default TaskViewNav;
