import React from 'react'
import Image from 'next/image'
import qrcode from '../public/My_App (2).png'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { subscribe } from '../redux/reducers/loginSlice';
const connection = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
  

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(subscribe({ email, password }));
      setEmail('');
      setPassword('');
      setSubmitted(true);
    };
  return (
    <>
        
        <div className='connectionpage flex justify-between border h-full'>
          {submitted ? <div className='mx-auto border w-1/2 justify-center py-20'>
            <h1 className='text-5xl text-center items-center title'>Bienvenue</h1>
          </div>  : <form className=' form flex flex-col justify-center items-center w-1/2 border h-full' onSubmit={handleSubmit}>
          <div className=' w-full '>
                <h1 className='text-4xl text-center title'>Become a Member</h1>
                <div className='flex justify-center'>
                <input type="text"
        placeholder="Votre e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)} className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300 bg-gray-200 border-white m-4 mx-auto'  />
                </div>
                
        <div className='flex flex-col items-center justify-center'>
        <input type="password"
        placeholder="Votre mot de passe"
        value={password}
        onChange={(event) => setPassword(event.target.value)} className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300 bg-gray-200 border-white m-4' />
                <button className='border border-white rounded-full w-3/6 bg-green-400 text-white mx-auto'>subscribe</button>
        </div>
                
            </div>
          </form>}
            <div className='qrcodesect flex flex-col mx-auto my-14 h-full'>
            <h1 className='text-3xl text-green-400 title'>Scan the QRCODE and join us in our app</h1>
            <Image src={qrcode} width={200} height={200} className='Image mx-auto p-4x²'/>
        </div>
        </div>
        

    </>
  )
}

export default connection