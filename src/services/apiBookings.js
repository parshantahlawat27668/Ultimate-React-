import { PAGE_SIZE } from "../utils/constants"
import { getToday } from "../utils/helpers"
import supabase from "./supabase"

export async function getBookings({filter, sortBy, page}){

    let query = supabase
    .from("bookings")
    .select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice,cabins(name) , guests(fullName, email)",{count:"exact"})

    // Filter 
        if(filter) query.eq(filter.field, filter.value)
    
    // Sort
        if(sortBy) query.order(sortBy.field, {ascending:sortBy.direction === "asc"})
    
    // Pagination
        if( page ) {
            const from = (page -1) * (PAGE_SIZE);
            const to = from + PAGE_SIZE - 1;

            query.range(from ,to);
        }  
    const {data, error, count} = await query;

    if(error){
        throw new Error("Bookings could not be loading");
    }

    return {data, count};
}

export async function getBooking(bookingId){
    const {data, error} = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", bookingId)
    .single();

    if(error){
        console.log(error);
        throw new Error("Booking not found");
    }

    return data;
}

export async function updateBooking(id, obj){
    const {data, error} = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single()

    if(error){
        throw new Error("Booking could be not updated");
    }

    return data;
}

export async function deleteBooking(bookingId){
    const {data, error} = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);


    if(error){
        throw new Error("Booking could  not be deleted");
    }

    return data;
}

export async function getBookingsAfterDate(date){
    const {data, error} = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extraPrice")
    .gte("created_at", date)
    .lte("created_at",getToday({end:true}));

    if(error){
        console.log(error);
        throw new Error("Bookings could not get loaded");
    }
    return data;

}

export async function getStaysAfterDate(date){
    const {data, error} = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

    if(error){
        throw new Error("Bookings could not get loaded");
    }
    return data;
}

export async function getStaysTodayACtivity(){
    const {data, error} = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(`and(status.eq.unconfirmed, startDate.eq.${getToday()}), and(status.eq.checked-in,endDate.eq.${getToday()}) `)
    .order("created_at");

    if(error){
        throw new Error("Bookings could not get  loaded");
    }
    return data;

}