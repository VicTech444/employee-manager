import { useQuery } from "@tanstack/react-query";
import { callInstance } from "./axiosBase";
import { jwtResponse } from "../interfaces/interfaces";
import { jwtDecode } from "jwt-decode";

interface userInfo {
    email: string;
    userName: string;
    role: number;
}

const fetchData = async (data: userInfo) => {
    let res = await callInstance.post('/employee', data, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (res.status >= 200 && res.status <= 299) {
        return res.data;
    }

    throw new Error('An error has been occured while loading the data');
}


export const useHandlePersonalInfo = (cookie: string) => {
    if (!cookie) return;
    let decoded: jwtResponse = jwtDecode(cookie);

    const { role, email, userName } = decoded;

    let newData = {
        email,
        userName,
        role
    }
    const data = useQuery({
        queryKey: ['personal_info'],
        queryFn: () => fetchData(newData),
        staleTime: 0,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: true,
    });
    
    return { data: data.data, error: data.error, isLoading: data.isLoading }
};