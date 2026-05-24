import React from 'react'

export default function Hero({ data }) {
  return (
        <div style={{backgroundImage: data.img}} className='w-full h-screen bg-center bg-no-repeat bg-cover'>
            <div className='w-full bg-black/50 absolute inset-0 flex items-start justify-center flex-col text-white gap-y-14 px-6 sm:px-10 md:px-16 lg:px-36'>
                <h3 className='lg:text-8xl text-2xl font-playfair leading-tight max-w-2xl'>{data.title}</h3>
                <h3 className='lg:text-2xl text-xl font-serif text-center font-extralight'>{data.subtitle}</h3>
            </div>
        </div>
  )
}
