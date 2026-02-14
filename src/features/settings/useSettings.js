import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings(){
    const {data:settings, error, isFetching} = useQuery({
        queryKey:["settings"],
        queryFn:getSettings,
    });

    return {settings, error, isFetching}
}