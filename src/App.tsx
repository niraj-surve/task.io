import React from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className="dark:bg-dark min-h-screen">
      <Navbar />
      <div className="px-4 md:px-64 pt-8">
        <TaskInput />
      </div>
      <TaskList />
    </div>
  );
};

export default App;