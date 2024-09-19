import { User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
    
    <div className='text-black flex justify-between gap-4 items-center h-full bg-black  w-screen'>
      <div className='flex justify-center items-start font-semibold text-white text-3xl'>PORTFOLIO</div>
      <div className='flex gap-4'>
      <Link to="/" className='bg-indigo-700 border-2 rounded-md w-20 h-[100%] border-indigo-700 text-white flex justify-center items-center'>Profile</Link>
      <Link to="/project" className='bg-indigo-700 border-2 rounded-md w-20 h-[100%] border-indigo-700 text-white flex justify-center items-center'>Project</Link>
      <Link to="/contact" className='bg-indigo-700 border-2 rounded-md w-20 h-[100%] border-indigo-700 text-white flex justify-center items-center'>Contact</Link>
      <Link className='w-20 h-[100%]  text-white flex justify-center items-center'><User /></Link>
      </div>
    </div>
  )
}

export default Navbar