import { useQuery } from "@tanstack/react-query";
import { callInstance } from "./axiosBase";
import { getCookies } from "../hooks/useCookies";

type cookieProps = string | boolean;

const fetchData = async () => {
    let res = await callInstance.post('/validate');

    if (res.status >= 200 && res.status <= 299) {
        return res.data;
    }

    throw new Error('Invalid credentials');
}


export const useHandleLogin = () => {
    let cookie = getCookies();

    const data = useQuery({
        queryKey: ['login'],
        queryFn: () => fetchData(),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { data, cookie }
};