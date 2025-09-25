import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <>
            <header className=' bg-[#ff7821] p-2 flex flex-wrap justify-center items-center sticky top-0 z-50'>
                <div className=' w-[900px] '>
                    <div className=' w-full p-2 flex justify-between'>
                        <div>
                            <h1 className=' text-white text-4xl font-[Arial] font-bold'>AstroManch</h1>
                            <div className=' hidden md:block h-0 md:h-auto'>
                                <ul className=' flex flex-wrap gap-5 '>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/aboutus"
                                            className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contactus"
                                            className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=' float-end flex gap-1'>
                            <div>
                                <button className='hidden sm:block w-full text-center bg-green-600 px-3 py-1 text-lg rounded-lg text-white font-bold outline-none'>Login</button><br />
                                <select className='hidden md:block px-2 mt-2 rounded-lg bg-yellow-50 bg-opacity-45 outline-none'>
                                    <option value="" className=' bg-gray-400 bg-opacity-35 font-bold'>English</option>
                                    <option value="" className=' bg-gray-400 bg-opacity-35 font-bold'>Hindi</option>
                                </select>

                            </div>
                            <div className=' md:hidden'>
                                <button className=' p-1 bg-[#f4f4f4] rounded-md'
                                    onClick={() => { setShow((s) => !s) }}>Menu</button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={` md:hidden overflow-hidden transition-all duration-700 ease-in-out ${show ? " border-t-2 border-white mt-4 max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                            }`} 
                        >
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={()=>{setShow(false)}}
                                    className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                    onClick={()=>{setShow(false)}}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contactus"
                                    onClick={()=>{setShow(false)}}

                                    className={({ isActive }) => ` text-xl  ${isActive ? "text-black font-bold" : " text-white"}`}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                                <button className=' mt-2 text-center bg-green-600 px-3 py-1 text-lg rounded-lg text-white font-bold outline-none'>Login</button><br />

                    </div>
                </div>
            </header>



        </>

    )
}
