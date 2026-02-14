import React from 'react'
import Logout from '../features/authentication/Logout'
import { HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom';

const HeaderMenu = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row items-center justify-end gap-2 w-full'>
      <li className='list-none'>
        <button onClick={()=>navigate("/account")} className='py-1 px-1 rounded-md cursor-pointer hover:bg-gray-300 hover:text-gray-600  transfrom duration-300'>
            <HiOutlineUser size={19}/>
        </button>
      </li>
      <li className='list-none px-1 pt-1 rounded-md cursor-pointer hover:text-gray-600 hover:bg-gray-300  transfrom duration-300'><Logout/></li>
    </div>
  )
}

export default HeaderMenu
