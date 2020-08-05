import React from "react";
import {
  Card,
  CardContent,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

let AddedTaskCard = function ({ data }) {
  return (
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
                    <CheckCircleOutline
                      style={{
                        fontSize: "20px",
                        fontWeight: "100",
                        fill: "#7C7C7C",
                      }}></CheckCircleOutline>
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
                  name="checkedH"
                />
              }
            />
            {data}
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddedTaskCard;
