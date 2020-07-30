import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

let AddedTaskCard = function () {
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
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              margin: "0px",
              padding: "0px",
              textAlign: "left",
              // color: "#9d9d9d",
            }}
            className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            rerum.
          </p>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddedTaskCard;
