import React from 'react'
import Stat from './Stat';
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

const Stats = ({bookings , confirmedStays, numDays, cabinCount}) => {

    const numBooking = bookings.length;

    const sales = bookings.reduce((acc, cur)=> acc + cur.totalPrice, 0);

    const checkins = confirmedStays.length;

    const occupation = confirmedStays.reduce((acc, cur)=> acc + cur.numNights, 0)/ (numDays * cabinCount)
  return (
    <>
    <Stat
    title={"Bookings"}
    color={"blue"}
    icon={<HiOutlineBriefcase color='blue' size={28}/>}
    value={numBooking}
    />

    <Stat
    title={"Sales"}
    color={"green"}
    icon={<HiOutlineBanknotes color='green' size={28}/>}
    value={formatCurrency( sales)}
    /> 

    <Stat
    title={"Check ins"}
    color={"indigo"}
    icon={<HiOutlineCalendarDays color='indigo' size={28}/>}
    value={checkins}
    /> 

    <Stat
    title={"Occupancy rate"}
    color={"yellow"}
    icon={<HiOutlineChartBar  className='text-yellow-800' size={28}/>}
    value={Math.round(occupation * 100) + "%"}
    /> 

    </>
  )
}

export default Stats
