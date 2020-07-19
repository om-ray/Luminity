import React from "react";
import MainTaskNav from "./main_app_tasks_nav";
import MainAppKanban from "./main_app_kanban";

function TaskView() {
  return (
    <div className="main_app_tasks">
      <MainTaskNav></MainTaskNav>
      <div className="main_app_tasks_kanban">
        <MainAppKanban></MainAppKanban>
      </div>
    </div>
  );
}

export default TaskView;
