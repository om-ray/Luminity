import React from "react";

function CalendarEvent({ text, style }) {
  return (
    <div style={style}>
      <p style={{ color: "#e6e6e6", margin: "0" }}>{text}</p>
    </div>
  );
}

export default CalendarEvent;
