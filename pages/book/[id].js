import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const BookDetailsPage = () => {
  const [book, setBook] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    fetch(`https://example-data.draftbit.com/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [router.query]);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>By {book.authors}</p>
      <img src={book.image_url} alt="" width={250} height={250} className='mx-auto' style={{objectFit: 'cover'}} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailsPage;