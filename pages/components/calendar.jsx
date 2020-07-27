import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

let override = createMuiTheme({
  typography: {
    fontFamily: "Avenir",
    fontSize: 12,
    color: "#e6e6e6",
  },
  palette: {
    type: "dark",
    background: {
      default: "#141415",
    },
    primary: {
      main: "#7badff",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    disabled: {
      main: "rgba(255, 255, 255, 0.5)",
    },
  },
});

function DatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <ThemeProvider theme={override}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar date={selectedDate} onChange={handleDateChange}></Calendar>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default DatePicker;
