import React, { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import { useMoveBack } from '../../hooks/useMoveBack'
import { useBooking } from '../bookings/useBooking';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import CheckinDataBox from './CheckinDataBox';
import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './useCheckin';
import { useSettings } from '../settings/useSettings';

const CheckinBooking = () => {

    const { booking, isLoading } = useBooking();
    const moveBack = useMoveBack();
    const { checkin,isCheckingIn } = useCheckin();
    const [confirmPaid, setConfirmPaid] = useState(false);
    const [addBreakfast, setAddBreakfast] = useState(false);
    const { settings } = useSettings();

    const handleCheckin = () => {
        if (!confirmPaid) return;

        if(addBreakfast){
            checkin({bookingId, breakfast:{
                hasBreakfast:true,
                extraPrice:optionalBreakfastPrice,
                totalPrice:totalPrice + optionalBreakfastPrice
            }});
        }
        else{
            checkin({bookingId, breakfast:{}});
        }
    }

    useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);


    const statusToTagName = {
        unconfirmed: "#699bb58a",
        "checked-in": "#6aa56a75",
        "checked-out": "#c0c0c06e"
    }
    
    if (isLoading) return <p>Loading...</p>
    
    const { id: bookingId, guests, totalPrice, status, numGuests, numNights, hasBreakfast } = booking;
    
    const optionalBreakfastPrice = settings?.breakfastPrice * numNights * numGuests;
    return (
        <>
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-2xl '>Check in booking #{bookingId}</h1>

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
                <CheckinDataBox booking={booking} />
            }
            

            {
                !hasBreakfast && 
            <div>
                <div className='flex gap-2 px-7 text-md items-center'>
                    <input
                        type="checkbox"
                        id='breakfast'
                        className='size-4 cursor-pointer'
                        checked={addBreakfast}
                        onChange={() => {
                            setAddBreakfast((prev) => !prev)
                            setConfirmPaid(false);

                        }}
                    />
                    <label htmlFor="breakfast" className='cursor-pointer'>Want to add breakfast for {formatCurrency(optionalBreakfastPrice)} ? </label>
                </div>
            </div>
            }

            <div>
                <div className='flex gap-2 px-7 text-md items-center'>
                    <input
                        disabled={confirmPaid || isCheckingIn}
                        type="checkbox"
                        id='confirm'
                        className='size-4 cursor-pointer'
                        checked={confirmPaid}
                        onChange={() => setConfirmPaid((prev) => !prev)}
                    />
                    <label htmlFor="confirm" className='cursor-pointer'>I confirm that {guests.fullName} has paid the total amount of {
                    !addBreakfast 
                    ? formatCurrency(totalPrice)
                    : `${formatCurrency(totalPrice  + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`
                
                }</label>
                </div>
            </div>






            <div className='flex items-center w-full justify-end gap-2'>
                {
                    status === "unconfirmed" &&
                    <Button
                        disabled={!confirmPaid || isCheckingIn}
                        onClick={handleCheckin}
                    >
                        Check in booking #{bookingId}
                    </Button>
                }



                <Button varient='secondary' onClick={moveBack}>
                    Back
                </Button>

            </div>
        </>
    )
}

export default CheckinBooking
