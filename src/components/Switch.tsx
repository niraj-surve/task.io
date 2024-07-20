import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

interface props {
  setTheme: React.Dispatch<React.SetStateAction<String>>;
}

const Switch = ({setTheme}: props) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme-color");
    return savedTheme === "dark";
  });

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      setTheme("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      setTheme("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <div className="flex items-center absolute right-10">
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleLabelClick}
        className="hidden"
      />
      <label
        onClick={handleLabelClick}
        className="relative flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer p-1"
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
            isDark ? "translate-x-8" : "translate-x-0 bg-black"
          }`}
        >
          {isDark ? <BsMoonStarsFill title="Dark" className="text-yellow-400" size={16} /> : <MdSunny title="Light" className="text-yellow-400" size={16} />}
        </div>
      </label>
    </div>
  );
};

export default Switch;