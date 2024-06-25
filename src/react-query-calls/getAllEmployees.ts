import { useQuery } from "@tanstack/react-query";
import { callInstance } from "./axiosBase";

const fetchData = async () => {
    let res = await callInstance.get('/employee/get_all');

    if (res.status >= 200 && res.status <= 299) {
        return res.data;
    }

    throw new Error('Not users found');
}

export const getAllEmployees = () => {
    const queryEmployees = useQuery({
        queryKey: ['employees-list'],
        queryFn: fetchData,
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { queryEmployees }
};