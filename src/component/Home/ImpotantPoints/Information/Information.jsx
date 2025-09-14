import React from 'react'

export default function Information(props) {
  return (
    <div className=' mt-3 font-[Arial] shadow-xl py-10 px-4 bg-[#f4f4f6] rounded-md '>
      <p className=' font-bold text-2xl text-center text-[maroon] underline'>{props.title}</p>
      <br /><br />
      <p className=' text-[17px] text-[#2c2b2b] font-sans'>
        {props.innertext}
      </p>
    </div>
  )
}
