import React, { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import TaskInput from "./components/TaskInput.tsx";
import { Task } from "./model.ts";
import TaskList from "./components/TaskList.tsx";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTaskList([...taskList, {id:Date.now(), task, isDone:false}])
      setTask("");
    }
  };

  return (
    <div className="dark:bg-dark min-h-screen">
      <Navbar />
      <div className="px-4 md:px-64 pt-8">
        <TaskInput task={task} setTask={setTask} handleAdd={handleAdd} />
      </div>
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;
