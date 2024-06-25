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
    let res = await callInstance.post('/employee/personal_info', data, {
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
    let decoded: jwtResponse;
    try {
        decoded = jwtDecode(cookie);
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return;
    }

    const { role, email, userName } = decoded;

    let newData = {
        email,
        userName,
        role
    }

    const data = useQuery({
        queryKey: ['personal_info'],
        queryFn: () => fetchData(newData),
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    });

    return { data }
};