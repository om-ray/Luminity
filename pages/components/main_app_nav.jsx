import React from "react";
import { Box, IconButton, Checkbox, FormControlLabel } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DatePicker from "./calendar";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

function MainAppNav() {
  return (
    <div className="main_app_nav">
      <Box textAlign="left" m={1}>
        <div className="group_name_title_container">
          <span className="group_name_title">Home</span>
          <IconButton className="group_name_btn">
            <ExpandMoreIcon></ExpandMoreIcon>
          </IconButton>
        </div>
      </Box>
      <Box textAlign="left">
        <div className="date_picker_container">
          <DatePicker></DatePicker>
        </div>
      </Box>
      <hr />
      <Box textAlign="left">
        <Box className="channels_title">CHANNELS</Box>
        <div className="channel_selector_container">
          <div className="channel_selector_choice">
            <i className="channel_icon" color="inherit">
              #
            </i>{" "}
            All
          </div>
        </div>
      </Box>
      <hr />
      <Box textAlign="left">
        <Box className="calendars_title">CALENDARS</Box>
        <div className="calendar_toggle_container">
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUnchecked style={{ fill: "#7badff" }} />}
                checkedIcon={<RadioButtonChecked style={{ fill: "#7badff" }} />}
                name="checkedH"
              />
            }
            className="toggle_icon"
            label="calendar"
          />
        </div>
      </Box>
    </div>
  );
}

export default MainAppNav;
