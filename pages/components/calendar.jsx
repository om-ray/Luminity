import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";

function DatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Calendar date={selectedDate} onChange={handleDateChange}></Calendar>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
