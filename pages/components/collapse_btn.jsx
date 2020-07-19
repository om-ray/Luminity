import React from "react";
import { Box, IconButton } from "@material-ui/core";
import MaximizeRoundedIcon from "@material-ui/icons/MaximizeRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

export function CollapseLeftBtn() {
  return (
    <Box height="65px" display="flex" alignItems="center">
      <IconButton
        style={{
          width: "10px",
          margin: "0px 20px 0px 5px",
          alignItems: "center",
        }}
        className="collapse_left_btn">
        <MaximizeRoundedIcon
          color="disabled"
          style={{
            transform: "rotate(90deg)",
            fontSize: "16px",
            position: "absolute",
            left: "0",
            top: "0",
          }}></MaximizeRoundedIcon>
        <ArrowBackRoundedIcon
          color="disabled"
          style={{
            top: "0",
            fontSize: "16px",
            position: "absolute",
            left: "12",
          }}></ArrowBackRoundedIcon>
      </IconButton>
    </Box>
  );
}
export function CollapseRightBtn() {
  return (
    <Box height="65px" display="flex" alignItems="center">
      <IconButton
        style={{
          display: "flex",
          width: "10px",
          margin: "0px 5px 10px 20px",
          position: "relative",
          alignItems: "center",
          padding: "10px",
          transform: "rotate(180deg)",
        }}>
        <MaximizeRoundedIcon
          color="disabled"
          style={{
            transform: "rotate(90deg)",
            fontSize: "16px",
            position: "absolute",
            left: "0",
            top: "0",
          }}></MaximizeRoundedIcon>
        <ArrowBackRoundedIcon
          color="disabled"
          style={{
            top: "0",
            fontSize: "16px",
            position: "absolute",
            left: "12",
          }}></ArrowBackRoundedIcon>
      </IconButton>
    </Box>
  );
}
