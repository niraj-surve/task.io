import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask.tsx";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  return (
    <div className="px-4 md:px-64 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {taskList.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};

export default TaskList;
