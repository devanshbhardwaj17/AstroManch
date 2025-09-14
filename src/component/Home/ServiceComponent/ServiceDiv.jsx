import React from 'react'
import ServiceComp from './ServiceComp'
import DenikPanchang from "/src/Photos/DenikPanchag.jpg"
import Kunali from "/src/Photos/Kundli.jpg"
import MatchKunali from "/src/Photos/MatchKundali.jpeg"
import LiveChat from "/src/Photos/LiveChat.jpg"




export default function ServiceDiv() {
  return (
    <div className=' mt-1 py-3 flex flex-wrap justify-center gap-6'>
        <ServiceComp title="Denik Panchang" image={DenikPanchang}/>
        <ServiceComp title="Free Kundali" image={Kunali}/>
        <ServiceComp title="Kundali Match" image={MatchKunali}/>
        <ServiceComp title="Live Chat" image={LiveChat}/>
    </div>
  )
}
