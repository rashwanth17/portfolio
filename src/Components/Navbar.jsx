import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div className='text-black bg-slate-300'>PORTFOLIO</div>,
    <div className='text-black flex justify-end gap-4 items-center h-[100%] bg-purple-800 '>
      <Link to="/profile">home</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar