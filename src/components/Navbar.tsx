import React, { useEffect, useState } from 'react'
import Switch from './Switch.tsx';

const Navbar:React.FC = () => {
  const [theme, setTheme] = useState<unknown>(null);

  // Set theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme-color");
    setTheme(storedTheme);
    console.log(theme)
  }, []);

  return (
    <div className='h-[64px] px-4 flex items-center md:justify-center justify-between'>
        <span className='font-bold text-2xl text-dark dark:text-white'>task.<span className='text-primary'>io</span></span>
        <Switch setTheme={setTheme} />
    </div>
  )
}

export default Navbar