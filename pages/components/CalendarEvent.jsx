import React, { useCallback, useState } from "react";

let findHighestZIndex = function (elem) {
  let elems = document?.getElementsByTagName(elem);
  let highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
  for (let i = 0; i < elems.length; i++) {
    let zindex = Number.parseInt(document?.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"), 10);
    if (zindex > highest) {
      highest = zindex;
    }
  }
  return highest;
};

function CalendarEvent({ text, style, time, height, id }) {
  let [hover, setHover] = useState(false);
  let [update, setUpdate] = useState(false);
  let forceUpdate = useCallback(() => setUpdate({}), []);
  let calendar_event_container = document?.getElementById("calendar_event_container");
  let calendar_event_container_top = calendar_event_container?.getBoundingClientRect().top + window.scrollY;
  setInterval(() => {
    calendar_event_container_top = calendar_event_container?.getBoundingClientRect().top + window.scrollY;
  }, 1);
  let calendarEvent = document?.getElementById(`${id}`);
  let startHour;
  let endHour;
  let startMinutes;
  let endMinutes;

  let getAllTimeInfoForCalendarEvent = function () {
    let timeNodeHeight = document?.getElementById("12 am")?.getBoundingClientRect()?.height;
    let eventTop = calendarEvent?.offsetTop + calendar_event_container_top;
    let eventBottom = eventTop + calendarEvent?.getBoundingClientRect()?.height;
    startHour = Math.floor(eventTop / timeNodeHeight - 0.5) - 2;
    startMinutes = (((eventTop / timeNodeHeight - 0.5) * 60) % 60).toFixed(2);
    startMinutes = (Math.floor(parseInt(startMinutes.replace(/^0\.+/, "")) / 5) * 5).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    endHour = Math.floor(eventBottom / timeNodeHeight - 0.5) - 2;
    endMinutes = (((eventBottom / timeNodeHeight - 0.5) * 60) % 60).toFixed(2);
    endMinutes = (Math.floor(parseInt(endMinutes.replace(/^0\.+/, "")) / 5) * 5).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    if (startHour <= 0) {
      startHour = 12;
    }
  };

  getAllTimeInfoForCalendarEvent();
  let numberTime = `${startHour}:${startMinutes} - ${endHour}:${endMinutes}`;
  let displayTime = `${numberTime}`;
  let calendarEventStyle = JSON.parse(JSON.stringify(style));
  let startY;
  let startHeight;
  let resizerHandlesBottom = document?.querySelectorAll(".resizerHandle");
  let dragHandlesTop = document?.querySelectorAll(".dragHandleTop");
  let currentResizerHandleBottom = resizerHandlesBottom?.[resizerHandlesBottom.length - 1];
  let currentDragHandleTop = dragHandlesTop?.[dragHandlesTop.length - 1];

  let initResizeBottom = function (e) {
    startY = e.clientY;
    startHeight = parseInt(document?.defaultView.getComputedStyle(currentResizerHandleBottom.parentElement).height);
    document?.documentElement.addEventListener("mousemove", doResizeBottom, false);
    document?.documentElement.addEventListener("mouseup", stopResizeBottom, false);
  };

  function doResizeBottom(e) {
    if (e.clientY % 5 == 0) {
      currentResizerHandleBottom.parentElement.style.height = Math.floor((startHeight + e.clientY - startY) / 5) * 5 + "px";
      forceUpdate();
    }
  }

  function stopResizeBottom(e) {
    setUpdate(false);
    document?.documentElement.removeEventListener("mousemove", doResizeBottom, false);
    document?.documentElement.removeEventListener("mouseup", stopResizeBottom, false);
  }

  let initDragTop = function (e) {
    startHeight = parseInt(document?.defaultView.getComputedStyle(currentDragHandleTop.parentElement).height, 10);
    startY = e.clientY;
    document?.documentElement.addEventListener("mousemove", doDragTop, false);
    document?.documentElement.addEventListener("mouseup", stopDragTop, false);
  };

  function doDragTop(e) {
    if (e.clientY % 5 == 0) {
      currentDragHandleTop.parentElement.style.top = Math.floor((e.clientY - calendar_event_container_top) / 5) * 5 + "px";
    }
  }

  function stopDragTop(e) {
    document?.documentElement.removeEventListener("mousemove", doDragTop, false);
    document?.documentElement.removeEventListener("mouseup", stopDragTop, false);
  }

  currentResizerHandleBottom?.addEventListener("mousedown", initResizeBottom, false);
  currentDragHandleTop?.addEventListener("mousedown", initDragTop, false);

  let hoverStyleOn = function () {
    calendarEventStyle.outlineStyle = "auto";
    calendarEventStyle.outlineWidth = "1px";
    calendarEventStyle.outlineColor = "#7badff";
    calendarEventStyle.zIndex = findHighestZIndex("*") + 1;
  };

  let hoverStyleOff = function () {
    delete calendarEventStyle.outlineStyle;
    delete calendarEventStyle.outlineWidth;
    delete calendarEventStyle.outlineColor;
    delete calendarEventStyle.zIndex;
  };

  if (hover) {
    hoverStyleOn();
  } else {
    hoverStyleOff();
  }

  return (
    <div
      className="calendarEventClass"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      id={id}
      style={calendarEventStyle}>
      <div
        className="dragHandleTop"
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "5px",
          cursor: "move",
          opacity: "0",
          marginRight: "5px",
        }}></div>
      <p style={{ color: "#e6e6e6", margin: "0px 0px 0px 5px" }}>
        {text} <span style={{ fontSize: "12px", fontWeight: "500" }}>{displayTime}</span>
      </p>
      <div style={{ display: "none" }}>{update}</div>
      <div
        className="resizerHandle"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "5px",
          cursor: "ns-resize",
          opacity: "0",
          marginRight: "5px",
        }}></div>
    </div>
  );
}

export default CalendarEvent;
