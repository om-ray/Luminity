import React, { useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import moment from "moment";
import CalendarEvent from "./CalendarEvent";
import { useState } from "react";
import { height } from "@material-ui/system";

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

let multiplier = 1;

if (typeof window !== "undefined" && typeof document !== "undefined") {
  setInterval(() => {
    let hour = moment().format("h a");
    let minutes = JSON.parse(moment().format("m"));
    let currentHour = document.getElementById(`${hour}`);
    if (currentHour) {
      let currentHourTop = currentHour.getBoundingClientRect().top;
      let currentMinuteOffset = currentHourTop + minutes * multiplier + "px";
      document.getElementById("current_time_indicator_container").style.top = `${currentMinuteOffset}`;
    }
  }, 5);
}

let eventsArray = [];
let MainAppSideBar = function ({ date, day }) {
  let mousePos = { x: 0, y: 0 };
  let [calendarEvents, setCalendarEvents] = useState(() => eventsArray);
  let [maximized, setMaximized] = useState(() => false);

  let drop = function (e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.clientY);
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    let calendar_event_container = document.getElementById("calendar_event_container");
    let calendar_event_container_top = calendar_event_container.getBoundingClientRect().top + window.scrollY;
    setInterval(() => {
      calendar_event_container_top = calendar_event_container.getBoundingClientRect().top + window.scrollY;
    }, 1);
    let time = e.target.getAttribute("id");
    let card_id = e.dataTransfer.getData("card_id");
    let card = document.getElementById(card_id);
    let card_text = card.getElementsByTagName("textarea")[0].value;
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
            borderRadius: "3px",
            height: "30px",
            border: "1px solid #2c2c2c",
            top: Math.round((e.clientY - calendar_event_container_top) / 5) * 5,
            opacity: "0.8",
          }}
          id={JSON.stringify(`id: ${card_id} text: ${card_text} place: ${eventsArray.length + 1}`)}
          text={card_text}
          time={time}
          height={30}></CalendarEvent>
      );
      console.log(eventsArray);
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
            <IconButton
              onClick={() => {
                multiplier = 2;
                if (maximized == false) {
                  let timeNodeArray = Array.from(document.querySelectorAll(".calendar_times"));
                  timeNodeArray.forEach((i) => {
                    i.className = "calendar_times_maximized";
                  });
                } else {
                  let timeNodeArray = Array.from(document.querySelectorAll(".calendar_times_maximized"));
                  timeNodeArray.forEach((i) => {
                    i.className = "calendar_times";
                  });
                }
                setMaximized(!maximized);
              }}>
              {maximized && (
                <RemoveIcon
                  style={{
                    fill: "#a0a0a0",
                    fontSize: "20px",
                  }}></RemoveIcon>
              )}
              {!maximized && (
                <AddIcon
                  style={{
                    fill: "#a0a0a0",
                    fontSize: "20px",
                  }}></AddIcon>
              )}
            </IconButton>
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
        // onDrop={drop}
        // onDragOver={dragOver}
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
            {TIMES().map((time) => {
              return (
                <div onDrop={drop} onDragOver={dragOver} style={{}} key={time} id={time}>
                  <p
                    onDragOver={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    id={time}
                    className="calendar_times"
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#7c7c7c",
                      margin: "0px 0px 0px -200px",
                      textAlign: "right",
                      width: "250px",
                    }}>
                    {time}
                  </p>
                </div>
              );
            })}
            {calendarEvents}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MainAppSideBar;
