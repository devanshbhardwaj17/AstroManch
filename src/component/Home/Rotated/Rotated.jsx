import React from 'react'
import ast from "/src/Photos/ast.png"

export default function Rotated() {
  return (
    <div className=' bg-black md:h-[425px] h-[250px] rounded-xl border-[#ff7811] border-2 mt-3 shadow-2xl overflow-hidden flex justify-center items-center'>
      <img src={ast} alt="" className=' h-full animate-spin-slow relative' />
      <button className=' absolute bg-[#fcb634] px-2 rounded-md text-xl transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-white'>Chat Now</button>
    </div>
  )
}
