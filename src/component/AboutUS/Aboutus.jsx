import React from 'react'
import Data from './Data/Data'
import Information from '../Home/ImpotantPoints/Information/Information'
import MissonAndVision from './MissonAndVision/MissonAndVision'


export default function Aboutus() {
  return (
    <div className=' bg-[#f4e6cc] p-3 flex flex-wrap justify-center '>
      <div className=' w-[900px]'>
        <p className=' font-[Arial]  font-bold bg-[#f4f4f4] rounded-xl shadow-lg text-2xl mt-5 text-center'>About Us</p>
        <Data/>
        <Information
        title="WHO WE ARE ?"
        innertext={
        <p className=' text-center'>
          <span className=' font-bold text-xl'>AstroManch</span > is a personal astrology platform of <span  className=' font-bold text-xl'>Shree Shubham Mishra Ji</span>. Shubham Mishra is an expert Vedic Astrologer, Tarot reader, Numerologist, Vastu expert. AstroManch lets you connect with Shubham Mishra over call and chat and get answers to all your problems.
          <br /><br />
          From Kundli matching to Kundli predictions, on <span className=' font-bold'>AstroManch</span >, the visitor is to get the best future predictions across aspects like Marriage, Love, Career or Health and more.When using AstroManch, you can trust us for highly accurate, precise and well researched astrological content that would offset most of your worries.
        </p>}
        />
        <Information
        title="WHY AstroManch ?"
        innertext={
          <p>
            AstroManch, today, enjoys a tremendous audience across 7+ states with <span  className=' font-bold text-xl'>Shree Shubh am Mishra Ji</span>. He Vedic astrologer, Tarot reader, Numerologist, Vastu expert. For the same purpose, we let users rate the astrologer; and recommend to you. This way, we assure you of premium quality predictions. Also, another core goal for us is to respect your privacy so you can trust us and certainly buzz about us. Wink!! Wink!!
            <br /><br />
          </p>
        }
        />


        <p className=' font-[Arial]  font-bold bg-[#f4f4f4] rounded-xl shadow-lg text-2xl mt-5 text-center'>Mission & Vision</p>
        <MissonAndVision/>
      </div>
    </div>
  )
}
