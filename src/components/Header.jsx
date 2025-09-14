import React from 'react'

export default function Header() {
  return (
    <header className=' bg-[#ff7811] flex flex-wrap justify-center items-center p-3 sticky top-0'
    style={{zIndex:"1000"}}
    >
       <div className=' flex flex-wrap justify-between items-center w-[900px]'>
            <div>
                <h1 className=' text-white text-4xl font-[Arial] font-bold'>Astro Manch</h1>
                <ul className=' flex flex-wrap gap-5'>
                    <li className=' text-lg text-white hover:text-black'>Home</li>
                    <li className=' text-lg text-white hover:text-black'>About Us</li>
                    <li className=' text-lg text-white hover:text-black'>Contact Us</li>
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
