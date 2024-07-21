import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, Task, toggleTask } from "../store/features/taskSlice";

interface Props {
  task: Task;
}

const SingleTask: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDone = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
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
        <FaTrash title="Delete" onClick={() => handleDelete(task.id)} />
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