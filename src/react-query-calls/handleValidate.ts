import { useQuery } from "@tanstack/react-query";
import { callInstance } from "./axiosBase";
import { useCookies } from "../hooks/useCookies";

type cookieProps = string | boolean;

const fetchData = async (cookie: cookieProps) => {
    let body = {
        cookies: cookie
    }

    let res = await callInstance.post('/validate', body, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    });

    if (res.status >= 200 && res.status <= 299) {
        return res.data;
    }

    throw new Error('Invalid credentials');
}


export const useHandleLogin = () => {
    let cookie = useCookies();

    const data = useQuery({
        queryKey: ['login'],
        queryFn: () => fetchData(cookie),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { data, cookie }
};