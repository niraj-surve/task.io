import React, { useEffect, useState } from 'react'
import Switch from './Switch.tsx';

const Navbar:React.FC = () => {
  const [theme, setTheme] = useState<unknown>(null);

  // Set theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme-color");
    setTheme(storedTheme);
  }, []);

  return (
    <div className='h-[64px] px-4 md:px-64 flex items-center md:justify-center justify-between'>
        <span className='font-bold text-2xl text-dark dark:text-white'>task.<span className='text-primary dark:text-secondary'>io</span></span>
        <Switch setTheme={setTheme} />
    </div>
  )
}

export default Navbar