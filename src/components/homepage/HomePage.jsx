import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@component/redux/reducers/bookslice';
import { useRouter } from 'next/router';
import {AiOutlineFullscreen} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
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
            <div className='grid grid-cols-4'>
                {books.map(book => (
                    <div key={book.id} style={{width: 250, margin: 'auto'}}>
                        <img src={book.image_url} alt="" width={250} height={250} className='mx-auto' style={{objectFit: 'cover'}} />
                        <h2>{book.title}</h2>
                        <p>By {book.authors}</p>
                        <div className='flex'>
                            <button className='bg-green-400 rounded-lg m-1' onClick={() => AddFavs(book)} style={{width: 120, height: 45}}>add to favoris</button>
                            <div className='flex flex-col'>
                            <button className='bg-green-400 text-center  m-1' onClick={() => DetailBook(book)} style={{width: 30, height: 30, borderRadius: '50%'}}><AiOutlineFullscreen className='mx-auto'/></button>
                            <button className='bg-green-400 text-center  m-1' style={{width: 30, height: 30, borderRadius: '50%'}}>
                            <FaShoppingCart className='mx-auto'/>
                            </button>
                            </div>
                            
                        </div>
                </div>
            ))}
        
            </div>
                {books.length < 17 && <button className='flex justify-center mx-auto m-4 bg-blue-500 items-center rounded-full' style={{width: 150, height: 50}} onClick={loadMore}>Load More</button>}
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