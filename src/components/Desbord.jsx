import React from 'react'
import ServiceComp from './ServiceComp'
import Slider from './Slider'
import photo from './ast.png'

export default function Desbord() {
  return (
    <div className=' bg-[#f4e6cc] p-3 flex flex-wrap justify-center '>
      <div className=' w-[900px]'>
        <div className=' bg-black md:h-[425px] h-[250px] rounded-xl border-[#ff7811] border-2 mt-3 shadow-2xl overflow-hidden flex justify-center items-center'>
          <img src={photo} alt="" 
          className=' h-full animate-spin-slow relative'
          />
          <button className=' absolute bg-[#fcb634] px-2 rounded-md text-xl'>Chat Now</button>
        </div>
        <div className=' mt-1 py-3 flex flex-wrap justify-center gap-6'>
          <ServiceComp title="Denik Panchang" image="https://static.abplive.com/wp-content/uploads/sites/2/2020/05/29014532/panchang.jpg" />
          <ServiceComp title="Make Kundali" image="https://www.alokikastro.com/uploaded-files/category/images/thumbs/Vedic-Janam-Kundli-thumbs-500X500.jpg"/>
          <ServiceComp title="Kundali Milan" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2cSJU0_X8JTL3h8kIdOu2VNyK-CssiA6iQ&s"/>
          <ServiceComp title="Live Chat" image="https://img.freepik.com/premium-vector/live-chat-icon-with-speech-bubble-customer-support-online-consultations_855620-580.jpg"/>
        </div>
        <h1 className=' text-2xl text-green-700 font-bold underline mt-5'>Coustomer Reviews</h1>
        <div className='md:flex md:flex-wrap md:justify-center lg:justify-start mt-4 py-2'>
            <div className='w-full md:w-[50%] flex justify-center'>
              <Slider/>
            </div>
            <div className=' bg-red-300 md:w-[50%] w-full h-[200px]'></div>
        </div>
      </div>
   </div>
  )
}
