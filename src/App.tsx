import React from 'react'
import Navbar from './components/Navbar.tsx'
import TaskInput from './components/TaskInput.tsx'

const App: React.FC = () => {
  return (
    <div className='dark:bg-dark min-h-screen'>
      <Navbar />
      <div className='px-4 md:px-64 pt-8'>
        <TaskInput />
      </div>
    </div>
  )
}

export default App
