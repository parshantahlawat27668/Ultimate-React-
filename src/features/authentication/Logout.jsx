import React from 'react'
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from './useLogout';

const Logout = () => {
    const {logout, isLogingOut} = useLogout();
  return (
    <button className='m-0 p-0 cursor-pointer' onClick={logout}>
        {
            isLogingOut ? "loading..." : 
        <HiArrowRightOnRectangle size={19}/>
        }
    </button>
  )
}

export default Logout
