import React from 'react'

export default function Data() {
  return (
    <div className=' w-full p-2 bg-white mt-3 rounded-lg shadow-2xl'>
      <p className='my-2 text-center font-[arial] text-xl font-bold underline text-[maroon]'>Our Team</p>
      <img src="https://t3.ftcdn.net/jpg/04/79/93/20/360_F_479932092_BmeQGwL1ljKI368UJVlIwczA8MtjbBnj.jpg" alt="" className=' w-full rounded-lg'/>
      <div className=' p-3 mt-2 rounded-lg flex flex-wrap justify-around items-center font-[arial]'>
        <div className=' md:w-[48%] w-full mt-2'>
            <p className=' text-xl text-center rounded-md shadow-lg text-white bg-[#ff7821]'><span className=' font-bold text-2xl'>2000+</span> Offline Customer</p>
        </div>
        <div className=' md:w-[48%] w-full mt-2'>
            <p className=' text-xl text-center rounded-md shadow-lg text-white bg-[#ff7821]'><span className=' font-bold text-2xl'>900+</span> Online Customer</p>
        </div>
      </div>
    </div>
  )
}
