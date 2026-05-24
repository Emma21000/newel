"use client";
import React, { useState } from 'react'
import Buttons from '../components/Buttons';
import { useTranslation } from "react-i18next";
import Languages from './Languages';

export default function Menu({ data }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    function changeDir () {
        setOpen(!open);
    }
    
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <div className='w-full flex items-center lg:justify-around justify-between px-6 relative lg:px-0'>
            <img src={data.logo} className='lg:w-auto w-80 pt-4' alt="" />
                <div className={`${open ? 'flex' : 'hidden'} absolute lg:flex  text-white lg:w-auto w-full lg:flex-row flex-col items-end lg:items-center justify-center top-0 right-0 lg:static gap-6 lg:gap-4 bg-[#7a8b99] lg:bg-transparent lg:h-full h-screen lg:px-0 px-8`}>
                    <span className='px-8 lg:hidden'>
                        <Languages />
                    </span>
                    <p onClick={changeDir} className='lg:hidden absolute top-6 right-6 text-3xl'>{data.icons.close}</p>
                    {data.pages.map((elem, index) => (
                        <span className={index === 0 ? 'underline underline-offset-4' : 'no-underline' } key={index}>
                            <a className='tracking-widest px-6 text-2xl hover:underline underline-offset-4 font-playfair' href={elem.path}>{t(elem.title)}</a>
                        </span>
                    ))}
                    <Buttons name="Call Now" />
                    <span className='lg:flex hidden'>
                        <Languages />
                    </span>
                </div>
            <p onClick={changeDir} className='lg:hidden text-2xl text-white'>{open ? data.icons.close : data.icons.open}</p>
        </div>
    </div>
  )
}
