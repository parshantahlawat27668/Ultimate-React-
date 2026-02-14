import React from 'react'
import Tag from '../../ui/Tag'
import {useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import CheckOutButton from './CheckOutButton';

const TodayItem = ({activity}) => {
  const {status, guests, numNights, id} = activity;
  const navigate   = useNavigate();
  return (
    <li className='grid grid-cols-[23%_6%_24%_12%_25%] gap-3 text-xs overflow-scroll   items-center'>
      <Tag status={status}/>
      <p>flag</p>
      <div className='text-nowrap'>{guests.fullName}</div>
      <div className='text-nowrap'>{numNights} nights</div>

      <div>
      {
        status === "unconfirmed" && (
          <button 
          className='bg-purple-600 hover:bg-purple-700 py-1  text-white  px-3 rounded-md cursor-pointer text-xs  w-20 outline-none'
          onClick={()=>navigate(`/checkin/${id}`)}
          
          >
            Check in
          </button>
        )
      }
      {
        status === "checked-in" && (
          <CheckOutButton 
          bookingId = {id}
          />
        )
      }
      </div>

    </li>
  )
}

export default TodayItem
