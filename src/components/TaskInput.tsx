import React, { useRef } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTask, setTask } from "../store/features/taskSlice";

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => state.task.task);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask({ id: Date.now(), task, isDone: false }));
    }
  };

  return (
    <form onSubmit={handleAdd} className="w-full flex gap-4 rounded-lg border-2 border-secondary">
      <textarea
        ref={textareaRef}
        className="w-full min-h-full p-4 rounded-lg bg-transparent dark:text-white text-sm resize-none overflow-hidden outline-none"
        autoFocus
        name="note"
        value={task}
        onChange={(e) => dispatch(setTask(e.target.value))}
        id="note"
        placeholder="Enter the task...."
        rows={1}
        onInput={handleInput}
      />
      <button
        type="submit"
        title="Add Task"
        className="fade h-10 bg-primary px-3 rounded-lg text-xl m-2 text-white border border-primary hover:border-primary hover:scale-105"
      >
        <MdOutlineAddTask />
      </button>
    </form>
  );
};

export default TaskInput;