import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

let AddedTaskCard = function () {
  return (
    <Card
      style={{
        height: "32px",
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
            height: "32px",
            textTransform: "none",
            width: "232px",
            paddingRight: "130px",
          }}>
          <AddCircleOutlineIcon
            style={{
              fontSize: "20px",
              fontWeight: "lighter",
              marginRight: "5px",
              // fill: "#9d9d9d",
            }}
            className="add_task_icon"></AddCircleOutlineIcon>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              margin: "0px",
              padding: "0px",
              // color: "#9d9d9d",
            }}
            className="add_task_text">
            Add a task
          </p>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddedTaskCard;
