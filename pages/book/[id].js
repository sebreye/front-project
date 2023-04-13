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
    <>
    <div className='alldetails flex flex-col justify-center mx-auto m-14 p-6 border border-green-400/40 shadino w-[1050px]' >
    <div>
          <div>
          <h1 className='text-3xl text-center font-bold'>{book.title}</h1>
          <p className='text-center'>By {book.authors}</p>
          <div className='flex justify-center mt-5'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                </div>
          </div>
      </div>
    <div className='detailsbook flex justify-between '>
      <div className='detailimg w-[350px]'>
      <img src={book.image_url} alt=""  className='h-[550px] w-full border border-green-400 mx-auto shadino' style={{objectFit: 'cover'}} />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='notespara p-5'>
          <h1 className='text-3xl font-bold'>Notes: </h1>
          <p className='text-2xl'>{book.rating}/5</p>
        </div>
        <div className='descpara p-5 w-[650px]' >
        <h1 className='text-3xl font-bold'>Description:</h1>
        <p>{book.description}</p>
        </div>
        <div className='pagespara p-5'>
          <p className='text-xl font-bold'>{book.num_pages} pages</p>
        </div>
      </div>
      
      
    </div>
    </div>
    
    </>
    
  );
};

export default BookDetailsPage;