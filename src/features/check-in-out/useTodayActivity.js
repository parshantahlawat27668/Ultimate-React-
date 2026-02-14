import { useQuery } from "@tanstack/react-query";
import { getStaysTodayACtivity } from "../../services/apiBookings";

export function useTodayActivity(){
    const {data:activities , isLoading} = useQuery({
        queryFn:getStaysTodayACtivity,
        queryKey:["today-activity"]
    });

    return {activities, isLoading}
}