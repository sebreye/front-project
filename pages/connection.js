import React from 'react'
import Image from 'next/image'
import qrcode from '../public/My_App (2).png'
const connection = () => {
  return (
    <>
        
        <div className='flex justify-between border h-full'>
            <div className='flex flex-col justify-center items-center w-1/2 border h-full'>
                <h1 className='text-4xl title'>Become a Member</h1>
                <input type="text"placeholder='Your email' className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300 bg-gray-200 border-white m-4'  />
                <input type="password"placeholder='Your password' className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300 bg-gray-200 border-white m-4' />
                <button className='border border-white rounded-full w-1/6 bg-green-400 text-white'>subscribe</button>
            </div>
            <div className='flex flex-col mx-auto my-14 h-full'>
            <h1 className='text-3xl text-green-400 title'>Scan the QRCODE and join us in our app</h1>
            <Image src={qrcode} width={200} className='mx-auto p-4x²'/>
        </div>
        </div>
        

    </>
  )
}

export default connection