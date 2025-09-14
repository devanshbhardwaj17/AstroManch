import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black flex flex-wrap justify-center py-5 font-[Arial] p-2'>
        <div className=' text-white w-[900px] flex flex-wrap justify-between'>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Social Meadia</p>
                <br />
                <p className=' text-lg'>Whatsapp: <span>9876543210</span></p>
                <p className=' text-lg'>Email: <span>example@gmail.com</span></p>
                <p className=' text-lg'>Instragram: <span>example_123</span></p>
                <p className=' text-lg'>Facebook: <span>example</span></p>
            </div>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Links</p>
                <br />
                <a href="" className=' hover:text-blue-600 hover:underline'>Home</a><br />
                <a href="" className=' hover:text-blue-600 hover:underline'>About Us</a><br />
                <a href="" className=' hover:text-blue-600 hover:underline'>Contact Us</a><br />
                <a href="" className=' hover:text-blue-600 hover:underline'>Help</a><br />

            </div>
            <div>
                <p className=' text-[wheat] text-2xl font-bold underline p-1'>Address:</p>
                <br />
                <p className=' text-lg'>Mohalla Bahar Dahlan,<br />Soron Shukar Kshetra <br />Distric: Kasganj <br />Pincode: 207403</p>
            </div>
            
        </div>
    </footer>
  )
}
