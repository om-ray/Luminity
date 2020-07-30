import React from "react";
import { Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

let TIMES = () => {
  let times = [];
  let timeStart = moment.utc().startOf("day");
  let timeEnd = moment.utc().endOf("day");
  while (timeEnd.diff(timeStart, "hr") >= 0) {
    times.push(timeStart.format("h a"));
    timeStart.add(1, "h");
  }
  return times;
};

console.log(TIMES());

if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.onload = function () {
    let current_time_indicator_container = document.getElementById(
      "current_time_indicator_container"
    );
    let calendar_time_container = document.getElementById(
      "calendar_time_container"
    );
    let current_time_indicator_bounding_box = current_time_indicator_container.getBoundingClientRect();
    calendar_time_container.scrollTo({
      top: current_time_indicator_bounding_box.top,
      left: 0,
      behavior: "smooth",
    });
  };

  setInterval(() => {
    let hour = moment().format("h a");
    let minutes = JSON.parse(moment().format("m"));
    let currentHour = document.getElementById(`${hour}`);
    let currentHourTop = currentHour.getBoundingClientRect().top;
    let currentMinuteOffset = currentHourTop + minutes + 30 + "px";
    current_time_indicator_container.style.top = `${currentMinuteOffset}`;
  }, 5);
}

let MainAppSideBar = function ({ date, day }) {
  return (
    <Box
      position="absolute"
      right="0"
      top="0"
      height="100vh"
      width="250px"
      bgcolor="#232325">
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#232325",
          height: "145px",
        }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#a0a0a0",
            height: "60px",
            display: "flex",
            alignItems: "center",
            padding: "0px 0px 0px 15px",
            borderBottom: "#2c2c2c solid 1px",
          }}>
          Calendar
        </div>
        <div
          style={{
            width: "100%",
            height: "85px",
            borderBottom: "#2c2c2c solid 1px",
            display: "flex",
          }}>
          <div
            style={{
              height: "85px",
              width: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "#2c2c2c solid 1px",
              borderBottom: "#2c2c2c solid 1px",
            }}>
            <AddIcon
              style={{
                fill: "#a0a0a0",
                fontSize: "20px",
              }}></AddIcon>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                fontWeight: "600",
                position: "absolute",
              }}>
              {day}
            </p>
            <div
              style={{
                height: "85px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                }}>
                {date}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        id="current_time_indicator_container"
        style={{
          position: "absolute",
          right: "15px",
          width: "180px",
          zIndex: "1",
        }}>
        <hr style={{ borderColor: "#A64537" }} />
      </div>
      <div
        id="calendar_time_container"
        style={{
          height: "calc(100% - 145px)",
          overflowY: "auto",
          marginTop: "145px",
        }}>
        {TIMES().map((time, i) => {
          return (
            <div key={time}>
              <p
                id={time}
                className="calendar_times"
                style={{
                  textTransform: "uppercase",
                  fontSize: "10px",
                  fontWeight: "600",
                  lineHeight: "60px",
                  color: "#7c7c7c",
                  marginLeft: "-150px",
                  textAlign: "right",
                  width: "200px",
                }}>
                {time}
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default MainAppSideBar;
