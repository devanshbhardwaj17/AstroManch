import React from 'react'

export default function ConactForm() {
  return (
    <div className=' w-[900px] p-2 py-5 font-[arial]'>
      <p className=' text-2xl font-bold bg-[#f4f4f4] rounded-xl text-center'>Contact Us</p>
      <form action="" className=' mt-5 bg-gray-200 bg-opacity-25 py-2 shadow-xl rounded-xl px-3'>
        <input type="text" className=' md:w-[48%] w-full md:mx-[1%] my-1 px-2 rounded-md text-lg outline-none' placeholder='First Name' />
        <input type="text" className=' md:w-[48%] w-full md:mx-[1%] my-1 px-2 rounded-md text-lg outline-none' placeholder='Last Name' />
        <input type="text" className=' md:w-[48%] w-full md:mx-[1%] my-1 px-2 rounded-md text-lg outline-none' placeholder='Mobile No.' />
        <input type="email" className=' md:w-[48%] w-full md:mx-[1%] my-1 px-2 rounded-md text-lg outline-none' placeholder='Email ID.' />
        <input type="text" className=' md:w-[98%] w-full md:mx-[1%] my-1 px-2 rounded-md text-lg' placeholder='Address'/>
        <textarea name="" id="" className=' md:w-[98%] mt-1 md:mx-[1%] w-full text-lg px-2 rounded-md outline-none' placeholder='Answer' rows={8}/>
        <button className=' bg-green-600 text-center py-1 w-full rounded-lg text-white text-xl mt-2 shadow-lg shadow-[#b1aeae] hover:bg-green-700'>Submit</button>
      </form>
    </div>
  )
}
