import React from "react";
import { Card, CardContent, Button, FormControlLabel, Checkbox, TextareaAutosize } from "@material-ui/core";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { useState } from "react";

let AddedTaskCard = function ({ data, index, initialFocus, date }) {
  let [focus, setFocus] = useState(initialFocus);

  let handleFocus = function () {
    setFocus(true);
  };

  let handleBlur = function () {
    if (document?.getElementById(`${date} + ${data}`)?.getElementsByTagName("textarea")[0].value == "") {
      setFocus(false);
    } else {
      return false;
    }
  };

  let dragStart = function (e) {
    let target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  let dragOver = function (e) {
    e.stopPropagation();
  };

  return (
    focus && (
      <div id={`${date} + ${data}`} draggable="true" onDragStart={dragStart} onDragOver={dragOver} onBlur={handleBlur} onFocus={handleFocus}>
        <Card
          style={{
            height: "fit-content",
            alignItems: "center",
            display: "flex",
            marginTop: "10px",
            // backgroundColor: "#232325",
          }}
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
                        let taskText = document.getElementById(`${date} + ${data}`)?.getElementsByTagName("textarea")[0];
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
                  spellCheck="false"
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
      </div>
    )
  );
};

export default AddedTaskCard;
