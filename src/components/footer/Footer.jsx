import React from 'react'
import {ImBook}from 'react-icons/im'
import {IoHelpBuoySharp} from 'react-icons/io5'
const Footer = () => {
  return (
    <>
        <footer className='bg-blue-950 pt-12 px-20'>
            <div className='flex justify-around mx-5'>
                <div className='flex p-8'>
                    <ImBook className='text-green-500 text-2xl m-1 '/>
                    <div>
                        <h2 className='text-2xl text-white'>Book's Information</h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, officiis?</p>
                    </div>
                    
                </div>
                <div className='flex p-8'>
                    <IoHelpBuoySharp className='text-green-500 text-2xl m-1'/>
                    <div>
                        <h2 className='text-2xl text-white'> Needs Help ?</h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, officiis?</p>
                    </div>
                    
                </div>
            </div>
            <hr className='mx-10' />
            <div className='flex justify-between p-8'>
                <h1 className='text-3xl text-white px-2'>BookShelf</h1>
                <p className='text-white px-2'>2023 All right deserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer