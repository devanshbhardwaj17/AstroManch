import React from 'react'

export default function AstroCard() {
  return (
    <div className='border-black border-2 shadow-md bg-white py-5 px-2 rounded-xl md:w-[80%] sm:w-[80%] w-[80%] transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className=' flex justify-center items-center p-2'>
            <img src="" alt=""  className=' h-[200px] w-[180px] border-black border-2 rounded-lg'/>
        </div>
        <h1 className=' mt-2 text-[#ff7821] font-bold text-2xl text-center'>Shubham Mishra Ji</h1>
        <p className=' text-gray-500 text-center font-[Arial]'>Vecik Astrologer</p>
        <p className=' text-center font-[cursive] mt-1 mb-1 text-sm'>We are born at a given moment, in a given place, and like vintage years of wine, we have the qualities of the year and of the season of which we are born.</p>
        <div className=' flex justify-center items-center mt-2'>
            <button className=' bg-green-600 text-lg text-white py-0.5 px-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-green-700'>Chat Now</button>
        </div>
    </div>
  )
}