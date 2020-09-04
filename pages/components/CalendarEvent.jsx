import React from "react";

function CalendarEvent({ text, style, time }) {
  return (
    <div style={style}>
      <p style={{ color: "#e6e6e6", margin: "0" }}>
        {text} <span style={{ fontSize: "12px", fontWeight: "500" }}>{time}</span>
      </p>
    </div>
  );
}

export default CalendarEvent;
