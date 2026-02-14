import React from 'react'
import { FaHotel } from "react-icons/fa";
const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-1 px-5'>
            <div className='p-2 bg-purple-700 rounded-full w-fit'>
                <img src=""></img>
                <FaHotel className='size-12 p-1' />
            </div>
            <span className='text-md tracking-widest font-semibold text-gray-400'>
                THE WILD OASIS
            </span>
        </div>
    )
}

export default Logo
