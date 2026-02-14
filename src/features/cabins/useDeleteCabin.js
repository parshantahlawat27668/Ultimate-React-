import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin(){
        const queryClient = useQueryClient();
        const {mutate:deleteCabin, isPending} = useMutation({
            mutationFn: deleteCabinApi,
            onSuccess:()=>{
                queryClient.invalidateQueries({
                    queryKey:["cabins"]
                });
                toast.success("Cabin deleted successfully");
            },
            onError:(error)=>{
                console.log(error);
                toast.error("Somting went wrong while deleting the cabin");
            }
        });

        return {deleteCabin, isDeleting:isPending}
}