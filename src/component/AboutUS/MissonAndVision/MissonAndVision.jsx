import React from 'react'
import MVCARD from './MVCARD'

export default function MissonAndVision() {
  return (
    <div className='mt-3 font-[Arial] shadow-xl py-10 px-4 bg-[#f4f4f4] rounded-md md:flex md:flex-wrap justify-around items-center'> 
        <MVCARD
        title="MISSION"
        content={<p>
            Our mission is to create a community for the people who seek astrological guidance for the betterment of life. We want to help out people who are going through a bad phase of life in the most trusted way.
        </p>}
        />
         <MVCARD
        title="VISION"
        content={<p>
            Our mission is to create a community for the people who seek astrological guidance for the betterment of life. We want to help out people who are going through a bad phase of life in the most trusted way.
        </p>}
        />
    </div>
  )
}
