import React from 'react'

const Select = ({options, value, handleChange}) => {
  return (
    <select value={value} onChange={handleChange} className='p-1 outline-none border text-sm border-gray-400 rounded-md shadow-2xl shadow-gray-800 bg-gray-800 cursor-pointer'>
        {
            options?.map((option)=>(
                <option value={option.value} key={option.value} className='bg-gray-800 cursor-pointer'>
                    {option.label}
                </option>
            ))
        }
    </select>
  )
}

export default Select
