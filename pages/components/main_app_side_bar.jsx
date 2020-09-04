import React from "react";
import { Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import CalendarEvent from "./CalendarEvent";
import { useState } from "react";

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
  setInterval(() => {
    let hour = moment().format("h a");
    let minutes = JSON.parse(moment().format("m"));
    let currentHour = document.getElementById(`${hour}`);
    if (currentHour) {
      let currentHourTop = currentHour.getBoundingClientRect().top;
      let currentMinuteOffset = currentHourTop + minutes + "px";
      document.getElementById("current_time_indicator_container").style.top = `${currentMinuteOffset}`;
    }
  }, 5);
}

let eventsArray = [];
let MainAppSideBar = function ({ date, day }) {
  let mousePos = { x: 0, y: 0 };
  let [calendarEvents, setCalendarEvents] = useState(() => eventsArray);

  let drop = function (e) {
    e.preventDefault();
    console.log(e.clientX);
    console.log(e.clientY);
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    let calendar_event_container = document.getElementById("calendar_event_container");
    let calendar_event_container_top = calendar_event_container.getBoundingClientRect().top + window.scrollY;
    console.log(calendar_event_container_top);
    let time_container_height = document.getElementById("12 am").clientHeight;
    let time = (e.clientY - calendar_event_container_top) / time_container_height;
    let card_id = e.dataTransfer.getData("card_id");
    let card = document.getElementById(card_id);
    let card_text = card.getElementsByTagName("textarea")[0].value;
    console.log(card_text);
    if (card) {
      card.style.display = "block";
      eventsArray.push(
        <CalendarEvent
          key={`id: ${card_id} text: ${card_text} place: ${eventsArray.length + 1}`}
          style={{
            position: "absolute",
            backgroundColor: "#7badff",
            left: "50px",
            width: "calc(100% - 70px)",
            overflow: "auto",
            resize: "vertical",
            borderRadius: "2px",
            height: "30px",
            top: e.clientY - calendar_event_container_top,
          }}
          text={card_text}
          time={time}></CalendarEvent>
      );
      setCalendarEvents([...eventsArray]);
    }
  };

  let dragOver = function (e) {
    e.preventDefault();
  };

  return (
    <Box position="absolute" right="0" top="0" height="100vh" width="250px" bgcolor="#232325">
      <div
        style={{
          position: "fixed",
          zIndex: 1,
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
        id={date}
        onDrop={drop}
        onDragOver={dragOver}
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}>
        <div
          id="current_time_indicator_container"
          style={{
            position: "fixed",
            right: "0px",
            width: "200px",
            zIndex: 0,
          }}>
          <hr style={{ borderColor: "#A64537" }} />
        </div>
        <div
          id="calendar_time_container"
          style={{
            position: "absolute",
            height: "calc(100% - 145px)",
            width: "100%",
            overflowY: "scroll",
            marginTop: "145px",
          }}>
          <div id="calendar_event_container" style={{ position: "absolute", height: "100vh", width: "100%" }}>
            {calendarEvents}
          </div>
          {TIMES().map((time) => {
            return (
              <div style={{}} key={time} id={time}>
                <p
                  id={time}
                  className="calendar_times"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "10px",
                    fontWeight: "600",
                    height: "7.5em",
                    color: "#7c7c7c",
                    marginLeft: "-200px",
                    textAlign: "right",
                    width: "250px",
                  }}>
                  {time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default MainAppSideBar;
