import React from "react";
import MainTaskNav from "./main_app_tasks_nav";
import moment from "moment";
import MainAppKanbanCard from "./main_app_kanban_cards";
import { useState } from "react";
import MainAppSideBar from "./main_app_side_bar";

// let date = new Date();
let boards = [];
let todayCard = moment.utc().date();
let addCardsMod = 0;

let DAYS = () => {
  let days = [];
  let dateStart = moment.utc().startOf("month").add(addCardsMod, "month");
  let dateEnd = moment
    .utc()
    .endOf("month")
    .add(addCardsMod, "month")
    .subtract(1, "days");
  while (dateEnd.diff(dateStart, "days") >= 0) {
    days.push({
      cal_date: dateStart.format("D"),
      cal_day: dateStart.format("ddd"),
      date: dateStart.format("MMMM D"),
      day: dateStart.format("dddd"),
    });
    dateStart.add(1, "days");
  }
  return days;
};
let daysArrayOg = DAYS();
let daysArray = DAYS();

if (typeof window !== "undefined" && typeof document !== "undefined") {
  let main_app_kanban = document.getElementById("main_app_tasks");
  let kanban_today = document.getElementById("today").getBoundingClientRect();
  let today_btn = document.getElementById("today_btn");
  let isDown = false;
  let startX;
  let scrollLeft;

  window.onload = function () {
    // main_app_kanban.scrollTo(kanban_today.x - 700, kanban_today.y);
    main_app_kanban.scrollLeft =
      kanban_today.left + main_app_kanban.scrollWidth / 7.77;
    main_app_kanban.scrollTop = 0;
  };

  today_btn.onclick = function () {
    main_app_kanban.scrollLeft =
      kanban_today.left + main_app_kanban.scrollWidth;
    main_app_kanban.scrollTop = 0;
    // main_app_kanban.scrollTo(kanban_today.x, kanban_today.y);
  };

  main_app_kanban.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isDown = true;
    main_app_kanban.classList.add("active");
    startX = e.pageX - main_app_kanban.offsetLeft;
    scrollLeft = main_app_kanban.scrollLeft;
  });

  main_app_kanban.addEventListener("mouseleave", () => {
    isDown = false;
    main_app_kanban.classList.remove("active");
  });

  main_app_kanban.addEventListener("mouseup", () => {
    isDown = false;
    main_app_kanban.classList.remove("active");
  });

  main_app_kanban.addEventListener("mousemove", (e) => {
    e.stopPropagation();
    if (!isDown) return;
    e.preventDefault();
    let x = e.pageX - main_app_kanban.offsetLeft;
    let walk = (x - startX) * 1; //scroll-fast
    main_app_kanban.scrollLeft = scrollLeft - walk;
  });

  main_app_kanban.addEventListener("scroll", function () {
    if (
      main_app_kanban.scrollLeft ===
      main_app_kanban.scrollWidth - main_app_kanban.clientWidth
    ) {
      infiniScroll();
    }
  });
}

let infiniScroll = function () {
  // let main_app_kanban = document.getElementById("main_app_tasks");
  // main_app_kanban.scrollTo(main_app_kanban.scrollLeft - 100, 0);
  addCardsMod += 1;
  daysArray = DAYS();
  addToBoards();
  setBoardsList([...boards]);
};

let pushToBoards = function () {
  for (let i = 0; i < daysArray.length; i++) {
    if (i == todayCard - 1) {
      boards.push(
        <MainAppKanbanCard
          id="today"
          key={daysArray[i].date}
          date={daysArray[i].date}
          days={daysArray[i].day}></MainAppKanbanCard>
      );
    } else if (i < todayCard - 1) {
      boards.push(
        <MainAppKanbanCard
          id={`notToday${i}`}
          className="before_today"
          key={daysArray[i].date}
          date={daysArray[i].date}
          days={daysArray[i].day}></MainAppKanbanCard>
      );
    } else {
      boards.push(
        <MainAppKanbanCard
          id={`notToday${i}`}
          key={daysArray[i].date}
          date={daysArray[i].date}
          days={daysArray[i].day}></MainAppKanbanCard>
      );
    }
  }
  return boards;
};

let addToBoards = function () {
  for (let i = 0; i < daysArray.length; i++) {
    boards.push(
      <MainAppKanbanCard
        key={daysArray[i].date}
        date={daysArray[i].date}
        days={daysArray[i].day}></MainAppKanbanCard>
    );
  }
  return boards;
};

pushToBoards();
let [boardsList, setBoardsList] = ["", ""];

function TaskView() {
  [boardsList, setBoardsList] = useState(boards);

  return (
    <div id="main_app_tasks" className="main_app_tasks">
      <MainTaskNav></MainTaskNav>
      <div id="kanban_board_container" className="main_app_tasks_kanban">
        <div style={{ display: "flex" }} id="kanban_board">
          {boardsList}
        </div>
      </div>
      <MainAppSideBar
        day={daysArrayOg[todayCard - 1].cal_day}
        date={daysArrayOg[todayCard - 1].cal_date}></MainAppSideBar>
    </div>
  );
}

export default TaskView;
