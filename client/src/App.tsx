import React from "react";
import logo from "./logo.svg";

import "./App.css";
import TaskPage from "./components/TaskPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskPage />
    </div>
  );
};

export default App;
