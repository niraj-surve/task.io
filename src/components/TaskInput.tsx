import React, { useRef } from "react";
import { MdOutlineAddTask } from "react-icons/md";

const TaskInput: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <form className="w-full flex gap-4  rounded-lg border-2 border-secondary">
      <textarea
        ref={textareaRef}
        className="w-full min-h-full p-4 rounded-lg bg-transparent dark:text-white text-sm resize-none overflow-hidden outline-none"
        name="note"
        id="note"
        placeholder="Enter the task...."
        rows={1}
        onInput={handleInput}
      />
      <button
        type="submit"
        title="Add Task"
        className="fade h-10 bg-primary px-3 rounded-lg text-xl m-2 text-white border border-primary hover:border-primary hover:bg-transparent hover:text-primary"
      >
        <MdOutlineAddTask />
      </button>
    </form>
  );
};

export default TaskInput;
