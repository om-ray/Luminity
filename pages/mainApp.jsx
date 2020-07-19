import React from "react";
import MainAppNav from "./components/main_app_nav";
import TaskView from "./components/main_app_task_view";

function MainApp() {
  return (
    <div className="main_app">
      <MainAppNav></MainAppNav>
      <TaskView></TaskView>
    </div>
  );
}

export default MainApp;
