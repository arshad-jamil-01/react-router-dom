import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-emerald-400 px-10 py-4 flex items-center justify-between'>
      <h1 className='text-xl font-semibold'>Sheryians</h1>
      <div className='flex gap-6 text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
