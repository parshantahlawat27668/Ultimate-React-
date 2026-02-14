import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser(){
    const {isPending:isFetching, data:user} = useQuery({
        queryKey:["user"],
        queryFn:getCurrentUser,
        retry:false
    });  
    
    const isAuthenticated =
    isFetching ? null : user?.role === "authenticated";

    return {isFetching, user, isAuthenticated};
}