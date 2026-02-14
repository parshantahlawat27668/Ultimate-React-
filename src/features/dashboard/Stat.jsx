import React from 'react'

const Stat = ({icon, title, value}) => {
  return ( 
    <div className='grid grid-cols-[3rem_1fr] grid-rows-[auto_auto] gap-y-0.5   gap-x-5 py-6 px-4 bg-gray-800 rounded-lg'>
        <div 
        className={`row-span-2 bg-green-100 flex items-center justify-center rounded-full aspect-square`}
        >{icon}</div>
        <h5 className='text-xs  text-gray-600  flex items-end'>{title?.toUpperCase()}</h5>
        <p className='text-xl '>{value}</p>
    </div>
  )
}

export default Stat
