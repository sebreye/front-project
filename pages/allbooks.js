import React, { useState, useEffect } from 'react';

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("")
    useEffect(() => {
    fetch('https://example-data.draftbit.com/books')
        .then(response => response.json())
        .then(data => setBooks(data));
    }, []);

    return (
    <div className='flex '>
        <div className='border' style={{width: 350}}>
        <input type="text" placeholder='Search...' className="search" onChange={(e) => setQuery(e.target.value)}></input>
            <h1>Category</h1>
            <div className='flex flex-col'>
            <button className='flex' style={{width: 150}}>All</button>
            <button className='flex' style={{width: 150}}>Classic</button>
            <button className='flex' style={{width: 150}}>Myster Thriller</button>
            <button className='flex' style={{width: 150}}>Fantasy</button>
            <button className='flex' style={{width: 150}}>Biography</button>
            <button className='flex' style={{width: 150}}>Music</button>
            <button className='flex' style={{width: 150}}>Fiction</button>
            <button className='flex' style={{width: 150}}>Book Title</button>
            <button className='flex' style={{width: 150}}>Inspirational</button>
            </div>
            
        </div>
        <div className='grid grid-cols-4'>
            
        {books.filter(book => book.title && book.title.toLowerCase().includes(query)).map((book) => (
            <div key={book.id} style={{width: 250, margin: 'auto'}}>
            <img src={book.image_url} alt="" width={250} height={250} className='mx-auto' style={{objectFit: 'cover'}} />
            <h2>{book.title}</h2>
            <p>By {book.authors}</p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default AllBooksPage;