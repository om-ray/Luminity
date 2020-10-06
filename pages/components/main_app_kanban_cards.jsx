import React from "react";
import { Card, CardContent, Button, Box } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState } from "react";
import AddedTaskCard from "./added_task_cards";
let parse = require("html-react-parser");

let addedCards = [];
let MainAppKanbanCard = function ({ id, date, days, className }) {
  let [cards, setCards] = useState(addedCards);

  let addTaskCard = function (key) {
    addedCards.push(
      <AddedTaskCard
        key={key + JSON.stringify(addedCards.length - 1)}
        data={key + JSON.stringify(addedCards.length - 1)}
        date={date}
        repeat={false}
        index={addedCards.length - 1}
        initialFocus={true}></AddedTaskCard>
    );
    return addedCards;
  };

  let drop = function (e) {
    e.preventDefault();
    let card_id = e.dataTransfer.getData("card_id");
    let card = document.getElementById(card_id);
    if (card) {
      card.style.display = "block";
      e.target.appendChild(card);
      addedCards.push(parse(card.outerHTML));
      setCards(addedCards);
    }
  };

  let dragOver = function (e) {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className={className}
      style={{
        padding: "12px 20px 0px",
        width: "272px",
        backgroundColor: "#141415",
      }}>
      <Card
        elevation={0}
        style={{
          width: "272px",
          backgroundColor: "#141415",
        }}
        className="kanban_day_container">
        <CardContent style={{ padding: "0px" }}>
          <div className="kanban_day_label_container">
            <div>
              <span style={{ fontSize: "24px", fontWeight: "600" }} className="kanban_day_date_dotw">
                {days}
              </span>
            </div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                // color: "#a0a0a0",
              }}
              className="kanban_day_date_dotm">{`${date}`}</span>
          </div>
          <div
            style={{
              // backgroundColor: "#1f1f1e",
              width: "232px",
              height: "8px",
              margin: "13px 0px",
              borderRadius: "5px",
            }}
            className="task_progress">
            <div
              style={{
                // backgroundColor: "#4dcd7d",
                height: "8px",
                width: "35.7%",
                borderRadius: "5px",
              }}
              className="task_progress_bar"></div>
          </div>
        </CardContent>
      </Card>
      <Card
        style={{
          height: "32px",
          alignItems: "center",
          display: "flex",
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
            }}
            onClick={() => {
              setCards([...addTaskCard(date)]);
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
      <div id={date} onDrop={drop} onDragOver={dragOver}>
        <div
          style={{
            height: "34px",
            width: "232px",
          }}>
          {cards}
          <div
            draggable="false"
            style={{
              height: "34px",
              width: "232px",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default MainAppKanbanCard;
