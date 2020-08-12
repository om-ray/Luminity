import React from "react";
import {
  Card,
  CardContent,
  Button,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
} from "@material-ui/core";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { useState } from "react";

let AddedTaskCard = function ({ data, initialFocus }) {
  let [focus, setFocus] = useState(initialFocus);

  let handleFocus = function () {
    setFocus(true);
  };

  let handleBlur = function () {
    setFocus(false);
  };

  return (
    focus && (
      <Card
        style={{
          height: "fit-content",
          alignItems: "center",
          display: "flex",
          marginTop: "10px",
          // backgroundColor: "#232325",
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="add_task_container">
        <CardContent
          style={{
            padding: "0px",
            // backgroundColor: "#232325",
          }}
          className="add_task_container_content">
          <Button
            disableRipple
            style={{
              display: "flex",
              height: "fit-content",
              textTransform: "none",
              width: "232px",
            }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                margin: "0px",
                padding: "0px",
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // color: "#9d9d9d",
              }}>
              <FormControlLabel
                style={{ position: "absolute", left: "10px" }}
                control={
                  <Checkbox
                    icon={
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <CheckSharpIcon
                          style={{
                            fontSize: "11px",
                            fontWeight: "600",
                            fill: "#7c7c7c",
                            position: "absolute",
                          }}></CheckSharpIcon>
                        <FiberManualRecordRoundedIcon
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            fill: "#232325",
                            stroke: "#7c7c7c",
                          }}></FiberManualRecordRoundedIcon>
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <CheckSharpIcon
                          style={{
                            fontSize: "11px",
                            fontWeight: "600",
                            fill: "#ffffff",
                            position: "absolute",
                          }}></CheckSharpIcon>
                        <FiberManualRecordRoundedIcon
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            fill: "#4dcd7d",
                          }}></FiberManualRecordRoundedIcon>
                      </div>
                    }
                    onChange={function (e) {
                      let taskText = document.getElementById("taskText");
                      if (e.target.checked) {
                        taskText.style.textDecoration = "line-through";
                        taskText.style.color = "#7c7c7c";
                      } else {
                        taskText.style.textDecoration = "none";
                        taskText.style.color = "#e6e6e6";
                      }
                    }}
                    name="checkedH"
                  />
                }
              />
              <TextareaAutosize
                id="taskText"
                placeholder="Task description..."
                style={{
                  resize: "none",
                  outline: "none",
                  border: "none",
                  backgroundColor: "inherit",
                  color: "#e6e6e6",
                  WebkitTouchCallout: "initial",
                  WebkitUserSelect: "initial",
                  KhtmlUserSelect: "initial",
                  MozUserSelect: "initial",
                  MsUserSelect: "initial",
                  UserSelect: "initial",
                }}
                autoFocus></TextareaAutosize>
            </div>
          </Button>
        </CardContent>
      </Card>
    )
  );
};

export default AddedTaskCard;
