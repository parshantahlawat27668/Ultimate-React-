import React from 'react'
import Button from '../../ui/Button'
import { useCheckout } from './useCheckout';

const CheckOutButton = ({bookingId}) => {
    const {checkout, isCheckingOut} = useCheckout();
  return (
    <button className='bg-purple-600 hover:bg-purple-700 py-1  text-white  px-3 rounded-md cursor-pointer text-xs   outline-none w-20'
    onClick={()=>checkout(bookingId)}
    >
      {
        isCheckingOut ? "Loading..."
        : "Check out"
      }
    </button>
  )
}

export default CheckOutButton
