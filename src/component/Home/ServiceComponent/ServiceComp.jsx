import React from 'react'
export default function ServiceComp(props) {
  return (
    <div className=' bg-white p-2 rounded-xl w-[160px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
            <div className=' flex justify-center items-center'>
                <img src={props.image} alt="image" className=' w-[100px] h-[100px] rounded-md' />
            </div>
            <h2 className=' font-bold text-lg text-center mt-2 text-[#ff7811]'>{props.title}</h2>
    </div>
  )
}