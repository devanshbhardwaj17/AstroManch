import React from 'react'
import ServiceComp from './ServiceComp'
import DenikPanchang from "/src/Photos/DenikPanchag.jpg"
import Kunali from "/src/Photos/Kundli.jpg"
import MatchKunali from "/src/Photos/MatchKundali.jpeg"
import LiveChat from "/src/Photos/LiveChat.jpg"
import { NavLink } from 'react-router-dom'




export default function ServiceDiv() {
  return (
    <div className=' mt-1 py-3'>
      <ul className=' flex flex-wrap justify-evenly gap-6'>
        <li >
          <NavLink
          to="/denikpanchang"
          >
            <ServiceComp title="Denik Panchang" image={DenikPanchang}/>
          </NavLink>
        </li>
        <li>
        <ServiceComp title="Free Kundali" image={Kunali}/>
        </li>
        <li>
        <ServiceComp title="Kundali Match" image={MatchKunali}/>

        </li>
        <li>
        <ServiceComp title="Live Chat" image={LiveChat}/>

        </li>
      </ul>
    </div>
  )
}
