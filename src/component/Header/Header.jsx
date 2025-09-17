import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className=' bg-[#ff7811] flex flex-wrap justify-center items-center p-3 sticky top-0 z-50'>
        <div className=' flex flex-wrap justify-between items-center w-[900px]'>
            <div>
                <h1 className=' text-white text-4xl font-[Arial] font-bold'>AstroManch</h1>
                <ul className=' flex flex-wrap gap-5 '>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive})=>` text-xl  ${isActive ? "text-black font-bold":" text-white"}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/aboutus"
                        className={({isActive})=>` text-xl  ${isActive ? "text-black font-bold":" text-white"}`}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contactus"
                        className={({isActive})=>` text-xl  ${isActive ? "text-black font-bold":" text-white"}`}
                        >
                        Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className=' float-end'>
                <button className=' w-full text-center bg-green-600 px-3 py-1 text-lg rounded-lg text-white font-bold outline-none'>Login</button><br />
                <select className=' px-2 mt-2 rounded-lg'>
                    <option className=' bg-gray-600 text-white rounded-lg outline-none' value="">English</option>
                    <option className=' bg-gray-600 text-white rounded-lg outline-none' value="">हिंदी</option>
                </select>
            </div>
        </div>
    </header>
  )
}
