import React from 'react'
import { useTranslation } from "react-i18next";

export default function Hero({ data }) {
    const { t } = useTranslation();

    return (
        <div style={{backgroundImage: data.img}} className='w-full h-screen bg-center bg-no-repeat bg-cover'>
            <div className='w-full bg-black/50 absolute inset-0 flex items-start justify-center flex-col text-white lg:gap-y-14 gap-y-8 px-6 sm:px-10 md:px-16 lg:px-36'>
                <h3 className='lg:text-8xl text-4xl font-playfair leading-tight max-w-2xl'>{t(data.title)}</h3>
                <h3 className='lg:text-2xl text-xl font-serif text-center font-extralight'>{t(data.subtitle)}</h3>
            </div>
        </div>
  )
}
