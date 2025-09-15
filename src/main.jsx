import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import Aboutus from './component/AboutUS/Aboutus.jsx'
import ContactUs from './component/ContactUS/ContactUs.jsx'
import DenikPanchang from './component/Home/DenikPanchang/DenikPanchang.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/denikpanchang' element={<DenikPanchang/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
