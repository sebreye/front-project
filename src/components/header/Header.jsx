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
import {FaUserAlt} from 'react-icons/fa'
import { toggleFavorite } from '@component/redux/reducers/bookslice'
import { setConected, setUser } from '@component/redux/reducers/loginSlice'
const Header = () => {
    const favoriteIds = useSelector(state => state.booklist.favorites);
    const books = useSelector(state => state.booklist.books);
    const dispatch = useDispatch()
    const SuppFavs = (favbook) =>{
        dispatch(removeTask(favbook))
    }
    const [side, setSide] = useState('-left-[100%] ')
    const [sideRight, setSideRight] = useState('-right-[100%] hidden')
    const favoriteBooks = favoriteIds.map(favoriteId =>
        books.find(book => book.id === favoriteId)
    );
    const handleRemoveFavorite = (bookId) => {
        dispatch(toggleFavorite(bookId)); 
      }
    
    

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
    
const login = useSelector((state)=>state.login);
const [email, setEmail] =useState('');
const [mdp, setMdp] =useState('');
const tryLogin = () => {
    let valid = false
    login.users.forEach(user => {
    if (user.email === email && user.mdp === mdp) {
        valid = true
        dispatch(setConected(true))
        dispatch(setUser(user))
    }
    });
    if (!valid) {
        alert('email ou mot de passe incorrect')
    }
}
  return (
    <>
        <div className='flex justify-between p-6 shadow-lg'>
            <div className='bookshelf'>
                <h1  className='text-4xl flex cursor-pointer title'><CgMenuLeft className='cursor cursor-pointer' onClick={swip}/>
                <Link href={'/'}>BOOKSHELF.</Link></h1>
            </div>
            
            {showSearchBar && (
                    <div className='flex'>
                        <h2 className='text-xl p-4 text-loupe'>
                            <HiMagnifyingGlass className='loupe' />
                        </h2>
                        <input type="text" placeholder='search a book ' className='bg-gray-200 search' style={{ width: 300, height: 50, borderRadius: '20px' }} />
                    </div>
                )}
            <div className='logo flex p-4'>
                <span className='text-2xl'>
                    <ImPhone/>
                </span>
                <p className='number'>01234567890</p>
                <AiFillHeart className='mx-4 text-2xl cursor-pointer' onClick={swipPanier} />
                <Link href={'/connection'}><FaUserAlt className='mx-4 text-2xl cursor-pointer'/></Link>
                
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
                {favoriteBooks.map(favoriteBook => (
        <div key={favoriteBook.id} className='flex justify-between'>
          <img src={favoriteBook.image_url} alt={favoriteBook.title} width={50} />
          <h3>{favoriteBook.title}</h3>
          <p>{favoriteBook.author}</p>
          <ImCross className='cursor-pointer'onClick={() => handleRemoveFavorite(favoriteBook.id)}/>
        </div>
      ))}
                </div>
            </div>
            <div className= {`absolute top-0 ${side} w-20 duration-300 ease-in-out h-screen left bg-white border`} style={{width: 300}}>
                <div className='flex justify-between p-5 bg-gray-400 border'>
                    <h1 className='text-3xl title'>
                        Bookshelf
                    </h1>
                    <ImCross className='m-3 cursor-pointer' onClick={croix}/>
                </div>
                <div>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Minimal</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Modern</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'>Bookshelf Classic</h3>
                    <h3 className='text-2xl p-4 cursor-pointer hover:text-green-500 hover:underline'><Link href={"/allbooks"}>All Books</Link></h3>
                    <div>
                        <h1>
                            email : 
                        </h1>
                    <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className='w-3/4 rounded-full' />
                    <h1>
                        mot de passe : 
                    </h1>
                    <div className='flex flex-col w-3/4'>
                    <input value={mdp} type="password" onChange={(e) => setMdp(e.target.value)} className='w-full rounded-full' />
                    <button className="login_btn border mt-4
                     rounded-full" onClick={() => {
                        tryLogin();
                        
                    }
                        }>login</button>
                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
        
    </>
  )
}

export default Header