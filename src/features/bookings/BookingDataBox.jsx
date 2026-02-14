import { format, isToday } from 'date-fns';
import React from 'react'
import { HiOutlineChatBubbleBottomCenterText, HiOutlineHomeModern } from 'react-icons/hi2';
// import { formatDistanceFromNow } from '../../../starter/utils/helpers';
import DataItem from '../../ui/DataItem';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';
import { HiOutlineCheckCircle, HiOutlineCurrencyDollar } from 'react-icons/hi';

const BookingDataBox = ({booking}) => {
  const   {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extraPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests:{fullName:guestName, email, country, countryFlag, nationalID},
    cabins:{name:cabinName}
} = booking;
  return (
    <div className='flex flex-col bg-gray-800 rounded-md overflow-hidden my-4'>

        <div className='bg-purple-900 flex flex-row items-center justify-between text-md  py-4 px-7  text-white'>
            <div className='flex flex-row items-center gap-2'>
                <HiOutlineHomeModern size={23}/>
                <p>
                    {numNights} nights in Cabin
                    <span>{cabinName}</span>
                </p>
            </div>

            <p>
                {format(new Date(startDate), "EEE, MMM dd yyyy")}(
                    {isToday(new Date(startDate))
                    ? "Today"
                    : formatDistanceFromNow(startDate)}) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
            </p>
        </div>

        
        <div className='px-7 py-5 text-sm'>
            <div className='flex flex-row gap-2 py-3 '>
            {
                countryFlag && <img src={countryFlag} alt = {`flag of ${country}`}/>
            }

            <p className=''>
                {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
            </p>
            <span>&bull;</span>
            <p className='text-gray-500'>{email}</p>
            <span>&bull;</span>
            <p className='text-gray-500'>National ID {nationalID}</p>
            </div>

            {
                observations && (
                    <DataItem
                    icon={<HiOutlineChatBubbleBottomCenterText size={19}/>}
                    label="Observations"
                    >
                        {observations}
                    </DataItem>
                )
            }

            <DataItem
            icon={<HiOutlineCheckCircle size={20}/>}
            label="Breakfast included"
            >
                {hasBreakfast ? "Yes" : "No"}
            </DataItem>

            <div
            className={` flex items-center justify-between py-3 px-8 mt-[2.4rem] rounded-md ${isPaid ? "bg-green-300 text-green-900" : "bg-yellow-200 text-yellow-800"}`}>
                <DataItem
                icon={<HiOutlineCurrencyDollar size={20} />}
                label="Total price"
                >
                    {formatCurrency(totalPrice)}

                    {
                        hasBreakfast && `(${formatCurrency(cabinPrice)} cabin + ${formatCurrency(extraPrice)} breakfast)`
                    }

                </DataItem>
                <p className='text-sm '>{isPaid ? "Paid" : "Will pay at property".toUpperCase()}</p>
            </div>
        </div>


        <div className='flex justify-end px-7 py-3 text-xs text-gray-800'>
            <p>
                Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
            </p>
        </div>

    </div>
  )
}

export default BookingDataBox
