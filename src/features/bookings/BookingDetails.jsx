import React from 'react'
import { useMoveBack } from '../../hooks/useMoveBack';
import Button from '../../ui/Button';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useBooking } from './useBooking';
import BookingDataBox from './BookingDataBox';
import { useNavigate } from 'react-router-dom';
import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { useCheckout } from '../check-in-out/useCheckout';
import Model from '../../ui/Model';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteBooking } from './useDeleteBooking';


const BookingDetails = () => {
    const { booking, isLoading } = useBooking();
    const {checkout} = useCheckout();
    const {deleteBooking} = useDeleteBooking();
    const navigate = useNavigate();

    const moveBack = useMoveBack();

    const statusToTagName = {
        unconfirmed: "#699bb58a",
        "checked-in": "#6aa56a75",
        "checked-out": "#c0c0c06e"
    }

    if (isLoading) return <p>loading</p>
    if(!booking) return <p>No booking could be found</p>
    const { id: bookingId, status } = booking
    return (
        <>
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-2xl '>Booking #{bookingId}</h1>

                    <span
                        style={{
                            background: statusToTagName[status],
                        }}
                        className={` px-3 py-1.5 rounded-2xl text-xs text-nowrap  ${status === "unconfirmed" ? "text-blue-900" : status === "checked-in" ? "text-green-900" : "text-gray-800"}`} >
                        {status.replace("-", " ").toUpperCase()}
                    </span>

                </div>

                <button className='flex flex-row gap-1 items-center cursor-pointer text-gray-900 hover:text-gray-600  transform duration-200' onClick={moveBack}>
                    <HiArrowNarrowLeft />
                    <span>
                        Back
                    </span>
                </button>
            </div>

            {
                booking &&
                <BookingDataBox booking={booking} />
            }


            <div className='flex items-center w-full justify-end gap-2'>
                <Model>
                    <Model.Open opens="delete">
                <Button varient='delete'>
                    Delete
                </Button>
                    </Model.Open>

                    <Model.Window name="delete">
                        <ConfirmDelete resourceName="booking" onConform={()=>deleteBooking(bookingId,{onSettled:()=>navigate(-1)})}/>
                    </Model.Window>
                </Model>

                
                {
                    status === "checked-in" &&
                    <Button icon={<HiArrowUpOnSquare size={17} />} onClick={() => checkout(bookingId)}>
                        Check out
                    </Button>
                }


                <Button varient='secondary' onClick={moveBack}>
                    Back
                </Button>

                {
                    status === "unconfirmed" &&
                    <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
                        Check in
                    </Button>
                }


            </div>
        </>
    )
}

export default BookingDetails
