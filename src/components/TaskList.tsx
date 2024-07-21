import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import SingleTask from "./SingleTask";

const TaskList: React.FC = () => {
  const taskList = useSelector((state: RootState) => state.task.taskList);

  return (
    <div className="px-4 md:px-64 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {taskList.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;