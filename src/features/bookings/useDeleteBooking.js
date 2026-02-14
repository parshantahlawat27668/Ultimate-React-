import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking(){
        const queryClient = useQueryClient();
        const {mutate:deleteBooking, isPending} = useMutation({
            mutationFn: deleteBookingApi,
            onSuccess:(data)=>{
                console.log(data);
                queryClient.invalidateQueries({
                    queryKey:["bookings"]
                });
                toast.success("Booking deleted successfully");
            },
            onError:(error)=>{
                console.log(error);
                toast.error("Somting went wrong while deleting the booking");
            }
        });

        return {deleteBooking, isDeleting:isPending}
}