import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask,  toggleFavorite } from '@component/redux/reducers/bookslice';
import { useRouter } from 'next/router';
import {AiOutlineFullscreen, AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import {BsFacebook, BsTwitter, BsTwitch} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const HomePage = () => {
    const [books, setBooks] = useState([]);
    const dispatch = useDispatch()
    const router = useRouter()
    const favorites = useSelector((state => state.booklist.favorites))
    useEffect(() => {
        fetch('https://example-data.draftbit.com/books')
            .then(response => response.json())
            .then(data => setBooks(data.slice(0, 6)));
    }, []);

    const loadMore = () => {
    const currentLength = books.length;
    const nextSix = currentLength + 6;
    fetch('https://example-data.draftbit.com/books')
        .then(response => response.json())
        .then(data => setBooks([...books, ...data.slice(currentLength, nextSix)]));
};
const AddFavs = (book) => {
    dispatch(addTask(book))
    dispatch(toggleFavorite(book.id));
}
    const DetailBook = (book) => {
        router.push(`/book/${book.id}`)
    }

    return (
    <>
        <main>
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className='textcarou'>
            <h2>Let's make the best investement</h2>
            <h1 className='title'>There is no friends</h1>
            <h1 className='title'>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button class="cssbuttons-io">
            <span><p>ShopNow</p></span>
</button>
            </div>
            <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093872826596991086/citpark.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='textcarou'>
            <h2>Let's make the best investement</h2>
            <h1 className='title'>There is no friends</h1>
            <h1 className='title'>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button class="cssbuttons-io">
            <span><p>ShopNow</p></span>
</button>
        </div>
<img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882523517456404/strategy.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='textcarou'>
            <h2>Let's make the best investement</h2>
            <h1 className='title'>There is no friends</h1>
            <h1 className='title'>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button class="cssbuttons-io">
  <span><p>ShopNow</p></span>
</button>
            </div>
                <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882491003219998/book.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='textcarou'>
            <h2>Let's make the best investement</h2>
            <h1 className='title'>There is no friends</h1>
            <h1 className='title'>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button class="cssbuttons-io">
            <span><p>ShopNow</p></span>
</button>
            </div>
            <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882597588865085/keep.PNG" alt="" />
        </SwiperSlide>
        </Swiper>
    </>
    <div className='flex justify-center m-8 info-sales'>
    <div className='card-flex flex rounded-md  m-2 shadow-xl shadino w-2/5 '>
        <div className='divcards flex'>
        <div  className=' divimg w-1/2 zoom'>
            <img src="https://img.freepik.com/free-psd/book-cover-mockup-psd-editable-design_53876-145076.jpg?size=626&ext=jpg" alt="" className='h-full duration-300 rounded-md'  />
        </div>
        <div className='text-sales p-10'>
            <p className='text-xl text-emerald-700'>SALE UP TO 15% </p>
            <p className='text-lg bold'>Innovation in Education </p>
            <p className='text-lg bold'>Starting at: $65.09</p>
        </div>
        </div>
        
    </div>
    <div className='card-flex flex rounded-md  m-2 shadow-xl shadino w-2/5 ' >
        <div className='divimg w-1/2 zoom '>
            <img src="https://img.freepik.com/premium-psd/front-view-two-hard-cover-book-mockup_1150-37607.jpg?size=626&ext=jpg" alt="" className='h-full duration-300 rounded-md'  />
        </div>
        <div className='text-sales p-10'>
        <p className='text-xl text-emerald-700'>SALE UP TO 15% </p>
            <p className='text-lg bold'>Innovation in Education </p>
            <p className='text-lg bold'>Starting at: $65.09</p>
        </div>
    </div>
    </div>
    
        <div className='p-5' style={{backgroundColor: '#f5f6f8'}}>
            <h2 className='text-2xl text-green-400 text-center bold '>Book Gallery</h2>
            <h1 className='text-5xl text-center m-2 title'>Popular Book</h1>
            <div className='flex justify-center m-5'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                </div>
            <div className='grid gap-y-5 grid-cols-4 popbook'>
                {books.map(book => (
                    <div className='relative'>
                        <div key={book.id} className='relative border border-green-400 rounded-lg front shadino' style={{ width: 300,  margin: 'auto'}}>
                            <img src={book.image_url} alt=""  className='h-[400px] w-full rounded-lg' style={{objectFit: 'cover'}} />
                            <div className='flex flex-col place-items-center' style={{height: 120}}>
                                <h2 className='text-xl font-bold title'>{book.title}</h2>
                                <p>By {book.authors}</p>
                                <div className='card'>
                                {favorites.includes(book.id) ?<button className='bg-green-400 rounded-lg m-1 coeur'style={{width: 120, height: 45}}>dans vos favoris</button> : <button className='bg-green-400 rounded-lg m-1 coeur' onClick={() => AddFavs(book)} style={{width: 120, height: 45}}>add to favoris</button>}   
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex items-end flex-col absolute left-12 top-0 opacity-0 hover:opacity-100  'style={{width: 300,height: 250, margin: 'auto' }}>
                                <button className='bg-green-400 text-center  m-1' onClick={() => DetailBook(book)} style={{width: 30, height: 30, borderRadius: '50%'}}><AiOutlineFullscreen className='mx-auto'/></button>
                                <button className='bg-green-400 text-center  m-1' style={{width: 30, height: 30, borderRadius: '50%'}}>
                                <AiFillHeart className='mx-auto'/>
                                </button>
                            </div>
                    </div>
                    
            ))}
        
            </div>
                {books.length < 17 && <button className='flex justify-center mx-auto m-4 bg-green-400 items-center rounded-full' style={{width: 150, height: 50}} onClick={loadMore}>Load More</button>}
        </div>
        <div className='alllastsection flex justify-center p-3' >
        <div className='lastsection flex rounded-md  shadow-2xl shadino w-3/5 '  >
                <div className='imgdiv p-4 w-3/5' >
                    <img src="https://img.freepik.com/free-psd/book-cover-mockup-psd-editable-design_53876-145076.jpg?size=626&ext=jpg" alt="" className='rounded-lg w-full' />
                </div>
                <div className='joinsection flex flex-col justify-center ' style={{paddingRight: 15}}>
                    <h1 className='text-3xl my-1 text-green-700'>Join Our Community</h1>
                    <p className='my-1'>sign up for 10% Get off</p>
                    <div className='emailsection flex my-4'>
                        <input type="text" className='inputsection shadow-xl border-none shadino w-[450px]' placeholder='your email' />
                        <button className='btnsection border bg-green-400 h-[46px] w-[100px]' >Subscribe</button>
                    </div>
                    <div>
                        <ul className='flex'>
                            <li className='lisection bg-green-400 hover:bg-green-800 cursor-pointer m-2 rounded-full text-center ' ><BsTwitter className='text-white text-2xl ml-3 mt-3  ' /></li>
                            <li className='lisection bg-green-400 hover:bg-green-800 cursor-pointer m-2 rounded-full text-center ' ><BsFacebook className='text-white text-2xl ml-3 mt-3  ' /></li>
                            <li className='lisection bg-green-400 hover:bg-green-800 cursor-pointer m-2 rounded-full text-center ' ><AiFillInstagram className='text-white text-2xl ml-3 mt-3  ' /></li>
                            <li className='lisection bg-green-400 hover:bg-green-800 cursor-pointer m-2 rounded-full text-center  '><BsTwitch className='text-white text-2xl ml-3 mt-3  ' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
        </main>
    </>
    );
};  

export default HomePage;