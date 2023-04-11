import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@component/redux/reducers/bookslice';
import { useRouter } from 'next/router';
import {AiOutlineFullscreen, AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const HomePage = () => {
    const [books, setBooks] = useState([]);
    const dispatch = useDispatch()
    const router = useRouter()
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
    };
    const DetailBook = (book) => {
        router.push(`/book/${book.id}`)
    }

    return (
    <>
        <main>
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div>
            <h2>Let's make the best investement</h2>
            <h1>There is no friends</h1>
            <h1>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button>Shop Now</button>
            </div>
            <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093872826596991086/citpark.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h2>Let's make the best investement</h2>
            <h1>There is no friends</h1>
            <h1>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <button>Shop Now</button>
        </div>
<img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882523517456404/strategy.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h2>Let's make the best investement</h2>
            <h1>There is no friends</h1>
            <h1>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button>Shop Now</button>
            </div>
                <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882491003219998/book.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h2>Let's make the best investement</h2>
            <h1>There is no friends</h1>
            <h1>Loyal As Book</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button>Shop Now</button>
            </div>
            <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882597588865085/keep.PNG" alt="" />
        </SwiperSlide>
        </Swiper>
    </>
    <div>
        <div>
            <img src="https://img.freepik.com/free-psd/book-cover-mockup-psd-editable-design_53876-145076.jpg?size=626&ext=jpg" alt="" />
        </div>
        <div>
            <p>SALE UP TO 15% </p>
            <p>Innovation in Education </p>
            <p>Starting at: $65.09</p>
        </div>
    </div>
        <div className='bg-gray-200'>
            <h1 className='text-3xl text-center m-8'>Popular Book</h1>
            <div className='flex justify-center m-5'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-green-400'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400 rotate-45'></div></div>
                </div>
            <div className='grid gap-y-5 grid-cols-4 '>
                {books.map(book => (
                    <div className='relative'>
                        <div key={book.id} className='relative border border-green-400 rounded-lg front' style={{ width: 300,  margin: 'auto'}}>
                            <img src={book.image_url} alt=""  className='h-[400px] w-full rounded-lg' style={{objectFit: 'cover'}} />
                            <div className='flex flex-col place-items-center' style={{height: 120}}>
                                <h2 className='text-xl'>{book.title}</h2>
                                <p>By {book.authors}</p>
                                <div className='card'>
                                <button className='bg-green-400 rounded-lg m-1 coeur' onClick={() => AddFavs(book)} style={{width: 120, height: 45}}>add to favoris</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex items-end flex-col absolute left-16 top-0 opacity-0 hover:opacity-100  'style={{width: 300,height: 350, margin: 'auto' }}>
                                <button className='bg-green-400 text-center  m-1' onClick={() => DetailBook(book)} style={{width: 30, height: 30, borderRadius: '50%'}}><AiOutlineFullscreen className='mx-auto'/></button>
                                <button className='bg-green-400 text-center  m-1' style={{width: 30, height: 30, borderRadius: '50%'}}>
                                <AiFillHeart className='mx-auto'/>
                                </button>
                            </div>
                    </div>
                    
            ))}
        
            </div>
                {books.length < 17 && <button className='flex justify-center mx-auto m-4 bg-blue-500 items-center rounded-full' style={{width: 150, height: 50}} onClick={loadMore}>Load More</button>}
        </div>

            <div className='flex justify-center'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>Join Our Community</h1>
                    <p>sign up for 10% Get off</p>
                    <div>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
};  

export default HomePage;