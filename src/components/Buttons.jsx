import React from 'react'

export default function Buttons(props) {
    const name = props.name;
    return (
    <div className='my-6'>
        <a href="" className='mx-4 lg:mx-10 tracking-widest font-playfair text-xl hover:underline underline-offset-4 px-12 py-5 border-black border-4 border-black/20 bg-gradient-to-tl from-[#04121a] to-[#247BA1]'>{name}</a>
    </div>
  )
}
