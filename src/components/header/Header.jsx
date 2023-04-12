import React, { useState } from 'react'
import {CgMenuLeft} from 'react-icons/cg'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import Link from 'next/link'
import {ImPhone} from 'react-icons/im'
import {ImCross} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '@component/redux/reducers/bookslice'
import { useRouter } from 'next/router'
const Header = () => {
    const favbooks = useSelector(state => state.booklist.panier)
    const dispatch = useDispatch()
    const SuppFavs = (favbook) =>{
        dispatch(removeTask(favbook))
    }
    const [side, setSide] = useState('-left-[100%] ')
    const [sideRight, setSideRight] = useState('-right-[100%] hidden')

    const swip = () => {
        setSide('left-0 z-50')
    }
    const swipPanier = () =>{
        setSideRight('right-0 z-50')
    }
    const croix = () =>{
        setSide('-left-[100%] ')
    }
    const croixPanier = () =>{
        setSideRight('-right-[100%] hidden ')
    }
    const [query, setQuery] = useState("")
    const router = useRouter();
    const showSearchBar = router.pathname !== '/allbooks';
  return (
    <>
        <div className='flex justify-between p-6 shadow-lg'>
            <div>
                <h1  className='text-4xl flex cursor-pointer title'><CgMenuLeft className='cursor cursor-pointer' onClick={swip}/>
                <Link href={'/'}>BookShelf.</Link></h1>
            </div>
            
            {showSearchBar && (
                    <div className='flex'>
                        <h2 className='text-xl p-4'>
                            <HiMagnifyingGlass />
                        </h2>
                        <input type="text" placeholder='search a book ' className='bg-gray-200' style={{ width: 300, height: 50, borderRadius: '20px' }} />
                    </div>
                )}
            <div className='flex p-4'>
                <span className='text-2xl'>
                    <ImPhone/>
                </span>
                <p>01234567890</p>
                <AiFillHeart className='mx-4 text-2xl cursor-pointer' onClick={swipPanier} />
            </div>
            <div className={`absolute top-0 ${sideRight} duration-300 ease-in-out h-screen border bg-white`} style={{width: 300}}>
                <div className='flex justify-between'>
                    <h1 className='text-3xl mx-auto title '>
                        Fav Item
                    </h1>
                    <ImCross className='cursor-pointer' onClick={croixPanier}/>
                </div>
                <div className='flex justify-center m-5'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                </div>
                <div>
                    {favbooks.map(favbook =>(
                        <div key={favbook.id} className='flex'>
                            <img src={favbook.image_url}
                            alt="" width={50} />
                            <p>{favbook.title}</p>
                            <ImCross className='cursor-pointer' onClick={() => SuppFavs(favbook)}/>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className= {`absolute top-0 ${side} w-20 duration-300 ease-in-out h-screen left bg-white border`} style={{width: 300}}>
                <div className='flex justify-between p-5 bg-gray-400 border'>
                    <h1 className='text-3xl title'>
                        Menu
                    </h1>
                    <ImCross className='m-3 cursor-pointer' onClick={croix}/>
                </div>
                <div>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Minimal</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Modern</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Classic</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'><Link href={"/allbooks"}>All Books</Link></h3>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Header