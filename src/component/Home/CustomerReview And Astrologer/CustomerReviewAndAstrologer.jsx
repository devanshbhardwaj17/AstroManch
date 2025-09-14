import React from 'react'
import Slider from './ReviewSlider/Slider'
import AstroCard from './Astrologer/AstroCard'

export default function CustomerReviewAndAstrologer() {
  return (
    <div className='md:flex md:flex-wrap md:justify-center lg:justify-start mt-1 py-2'>
        <div className='w-full md:w-[50%] flex justify-center'>
            <Slider/>
        </div>
        <div className=' w-[100%] md:w-[50%] p-2 flex justify-center items-center'>
            <AstroCard/>
        </div>
    </div>
  )
}
