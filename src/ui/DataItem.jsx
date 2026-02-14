import React from 'react'

const DataItem = ({icon, label, children}) => {
  return (
    <div className='flex items-center gap-[1.6rem] py-2 px-0  text-sm'>
      <span className='flex items-center  gap-[0.8rem] '>
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  )
}

export default DataItem
