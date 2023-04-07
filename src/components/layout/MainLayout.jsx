import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const MainLayout = ({children}) => {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <div >
        <Header/>
        {children}
      </div>
      <div><Footer/></div>
    </div>
    </>
  )
}

export default MainLayout