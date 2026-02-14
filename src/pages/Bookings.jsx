import React from 'react'
import BookingTable from '../features/bookings/BookingTable'
import BookingTableOperations from '../features/bookings/BookingTableOperations'

const Bookings = () => {
  return (
    <div className='overflow-auto flex flex-col gap-3 w-full'>
      <div className='flex flex-row items-center justify-between w-full'>
      <h2 className='text-2xl  py-2'>Bookings</h2>
      <BookingTableOperations/>
      </div>
      <BookingTable/>
    </div>
  )
}

export default Bookings
