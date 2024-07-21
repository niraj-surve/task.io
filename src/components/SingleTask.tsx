import React from "react";
import { Task } from "../model";
import { FaTrash } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({
  task,
  taskList,
  setTaskList,
}: Props) => {
  const handleDone = (id: number) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : task
      )
    );
  };

  return (
    <div
      className={`${
        task.isDone ? "bg-paper-green line-through" : "bg-paper-red "
      } fade w-full p-4 rounded-lg cursor-pointer flex justify-between`}
    >
      <div className="font-semibold">
        {task.task.length > 30
          ? task.task.substring(0, 30) + "......."
          : task.task}
      </div>
      <div className="flex gap-3">
        <MdEdit className="text-lg" title="Edit" />
        <FaTrash title="Delete" />
        {!task.isDone ? (
          <FaCheck title="Done" onClick={() => handleDone(task.id)} />
        ) : (
          <FaXmark title="Undone" onClick={() => handleDone(task.id)} />
        )}
      </div>
    </div>
  );
};

export default SingleTask;
