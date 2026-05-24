"use client";
import React, { useState } from 'react'
import Buttons from '../components/Buttons';

export default function Menu({ data }) {
    const [open, setOpen] = useState(false);
    function changeDir () {
        setOpen(!open);
    }
    
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <div className='w-full flex items-center justify-evenly relative'>
            <img src={data.logo} className='lg:w-auto w-80 pt-4' alt="" />
            <div className={`${open ? 'flex' : 'hidden'} absolute lg:flex  text-white lg:w-1/2 w-full lg:flex-row flex-col items-end lg:items-center justify-center top-0 right-0 lg:static gap-4 bg-[#7a8b99] lg:bg-transparent lg:h-full h-screen lg:px-0 px-8`}>
            <p onClick={changeDir} className='lg:hidden text-2xl'>{data.icons.close}</p>
            {data.pages.map((elem, index) => (
                <span className={index === 0 ? 'underline underline-offset-4' : 'no-underline' } key={index}>
                    <a className='tracking-widest px-6 text-2xl hover:underline underline-offset-4 font-playfair' href={elem.path}>{elem.title}</a>
                </span>
            ))}
            <Buttons name="Call Now" />
            </div>
            <p onClick={changeDir} className='lg:hidden text-2xl text-white'>{open ? data.icons.close : data.icons.open}</p>
        </div>
    </div>
  )
}
