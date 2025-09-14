import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className='bg-black flex flex-wrap justify-center py-5 font-[Arial] p-2'>
        <div className=' text-white w-[900px] flex flex-wrap justify-between'>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Social Meadia</p>
                <br />
                <p className=' text-lg'>Whatsapp: <span>9876543210</span></p>
                <p className=' text-lg'>Email: <span>example@gmail.com</span></p>
                <p className=' text-lg'>Instragram: <span>example_123</span></p>
                <p className=' text-lg'>Facebook: <span>example</span></p>
            </div>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Links</p>
                <br />
                <ul className=''>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive})=>` ${isActive ? " text-[#848080] underline hover:no-underline":" text-white"} hover:text-blue-600 hover:underline`}
                        >
                          Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/aboutus"
                        className={({isActive})=>` ${isActive ? "  text-[#848080] underline hover:no-underline":" text-white"} hover:text-blue-600 hover:underline`}
                        >
                          About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/conactus"
                        className={({isActive})=>`  ${isActive ? "  text-[#848080] underline hover:no-underline":" text-white"} hover:text-blue-600 hover:underline`}
                        >
                        Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/help"
                        className={({isActive})=>`  ${isActive ? "  text-[#848080] underline hover:no-underline":" text-white"} hover:text-blue-600 hover:underline`}
                        >
                        Help
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Address:</p>
                <br />
                <p className=' text-lg'>Mohalla Bahar Dahlan,<br />Soron Shukar Kshetra <br />Distric: Kasganj <br />Pincode: 207403</p>
            </div>
        </div>
    </footer>
  )
}
