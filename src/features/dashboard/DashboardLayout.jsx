import React from 'react'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const DashboardLayout = () => {
  const {bookings, isLoading:isLoading1} = useRecentBookings();
  const { isLoading:isLoading2, confirmedStays, numDays} = useRecentStays();
  const {cabins, isLoading:isLoading3} = useCabins();

  if(isLoading1 || isLoading2 || isLoading3) return <p>Loading...</p>


  return (
    <div className='grid grid-cols-4 grid-rows-[auto_18rem_auto] gap-4'>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
      <TodayActivity/>
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </div>
  )
}

export default DashboardLayout
