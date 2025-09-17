import React from 'react'

export default function MVCARD(props) {
  return (
    <div className=' md:w-[45%] w-full bg-white p-3 shadow-2xl rounded-lg mt-3 font-[Arial] px-5 transition-transform duration-300 ease-in-out hover:scale-105'>
        <p className=' text-3xl font-bold text-center '>{props.title}</p>
        <br />
        <p className=' text-md text-center'>{props.content}</p>
        <br />
    </div>
  )
}
