import React from 'react'
import Table from '../../ui/Table'
import { format, isToday } from 'date-fns'
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers'
import Menus from '../../ui/Menus'
import { HiEye, HiTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from 'react-icons/hi2'
import { useCheckout } from '../check-in-out/useCheckout'
import Model from '../../ui/Model'
import ConfirmDelete from '../../ui/ConfirmDelete'
import { useDeleteBooking } from './useDeleteBooking'

const BookingRow = ({
    booking: {
        id: bookingId,
        // created_at,
        startDate,
        endDate,
        numNights,
        // numguests,
        totalPrice,
        status,
        guests: { fullName: guestName, email },
        cabins: { name: cabinName }
    }
}) => {

    const navigate = useNavigate();
    const {checkout} = useCheckout();
    const {deleteBooking} = useDeleteBooking();


    const statusToTagName = {
        unconfirmed: "#699bb58a",
        "checked-in": "#6aa56a75",
        "checked-out": "#c0c0c06e"
    }
    return (
        <Table.Row>
            <div className='text-md '>{cabinName}</div>

            <div className='flex flex-col'>
                <span className='text-sm'>{guestName}</span>
                <span className='text-xs text-gray-400'>{email}</span>
            </div>

            <div className='flex flex-col'>
                <span className='text-sm '>
                    {isToday(new Date(startDate))
                        ? "Today"
                        : formatDistanceFromNow(startDate)}{" "}
                    &rarr; {numNights} night stay
                </span>

                <span className='text-xs text-gray-400 '>
                    {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
                    {format(new Date(endDate), "MMM dd yyyy")}
                </span>
            </div>

            <div>
                <span
                    style={{
                        background: statusToTagName[status],
                    }}
                    className={` py-0.5 px-3 pb-1.5 rounded-2xl text-sm text-nowrap  ${status === "unconfirmed" ? "text-blue-900" : status === "checked-in" ? "text-green-900" : "text-gray-800"}`} >
                    {status.replace("-", " ")}
                </span>

            </div>

            <div className='text-md'>
                {formatCurrency(totalPrice)}
            </div>

            <Model>
            <Menus.Menu>
                <Menus.Toggle id={bookingId} />
                <Menus.List id={bookingId}>
                    <Menus.Button icon={<HiEye size={18} />} onClick={() => navigate(`/bookings/${bookingId}`)}>
                        See details
                    </Menus.Button>

                    {
                        status === "unconfirmed" &&
                        <Menus.Button icon={<HiArrowDownOnSquare size={18} />}  onClick={()=>navigate(`/checkin/${bookingId}`)}>
                            Check in
                        </Menus.Button>
                    }

                    {
                        status === "checked-in" &&
                        <Menus.Button icon={<HiArrowUpOnSquare size={17}  />}  onClick={()=>checkout(bookingId)}>
                            Check out
                        </Menus.Button>
                    }

                    <Model.Open opens="delete">
                        <Menus.Button icon={<HiTrash/>}>
                            Delete booking
                        </Menus.Button>
                    </Model.Open>
                </Menus.List>

            </Menus.Menu>
            <Model.Window name="delete">
                <ConfirmDelete resourceName="booking" onConform={()=>deleteBooking(bookingId)}/>
            </Model.Window>
            </Model>

        </Table.Row>
    )
}

export default BookingRow
