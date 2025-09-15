import React from 'react'
import Rotated from './Rotated/Rotated'
import ServiceDiv from './ServiceComponent/ServiceDiv'
import CustomerReviewAndAstrologer from './CustomerReview And Astrologer/CustomerReviewAndAstrologer'
import ImpotnatPoint from './ImpotantPoints/ImpotnatPoint'

export default function Home() {
  return (
    <div className=' bg-[#f4e6cc] p-3 flex flex-wrap justify-center '>
      <div className=' w-[900px]'>
        <Rotated/>
        <ServiceDiv/>
        <p className=' font-[Arial]  font-bold bg-[#f4f4f4] rounded-xl shadow-lg text-2xl mt-5 text-center'>Customer Review and Astrologer</p>
        <CustomerReviewAndAstrologer/>
        <p className=' font-[Arial]  font-bold bg-[#f4f4f4] rounded-xl shadow-lg text-2xl mt-5 text-center'>Impotant Points</p>
        <ImpotnatPoint/>
      </div>
    </div>
  )
}
