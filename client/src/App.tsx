import React from 'react'
import logo from '../src/assets/techhub-logo.png'

export default function App() {
  return (
    <div className=''>
      <nav className='py-2 px-4 shadow-lg border-t-2 border-t-orange-400'>
        <div className="max-w-7xl mx-auto flex items-center">
          <div className=" w-5">
            <div className="h-[2px] bg-gray-600 mb-1"></div>
            <div className="h-[2px] bg-gray-600 mb-1"></div>
            <div className="h-[2px] bg-gray-600"></div>
          </div>
          <img className='w-5 ml-4 invert' src={logo} alt="" />
          <h1 className='text-2xl font-black ml-1'><span className='text-2xl font-medium text-orange-400'>Tech</span>Hub</h1>
          <ul className='flex gap-2 ml-4'>
            <li className='py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black'>About</li>
            <li className='py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black'>Contact</li>
            <li className='py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black'>Tags</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
