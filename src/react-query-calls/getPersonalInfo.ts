import { useQuery } from "@tanstack/react-query";
import { callInstance } from "./axiosBase";
import { jwtResponse } from "../interfaces/interfaces";
import { jwtDecode } from "jwt-decode";
import { useHandlePermissions } from "@/hooks/usePermissions";

interface userInfo {
    email: string;
    userName: string;
    role: number;
}

const fetchData = async (data: string | false) => {
    if (data === false) throw new Error('No cookies found');
    
    let decoded: jwtResponse = jwtDecode(data);

    const { role, email, userName } = decoded;

    let newData : userInfo = {
        email,
        userName,
        role
    }
    
    let res = await callInstance.post('/employee', newData, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (res.status >= 200 && res.status <= 299) {
        return res.data;
    }

    throw new Error('An error has been occured while loading the data');
}


export const useHandlePersonalInfo = () => {
    const { cookie } = useHandlePermissions();

    const data = useQuery({
        queryKey: ['personal_info'],
        queryFn: () => fetchData(cookie),
        staleTime: 0,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: true,
    });

    return { data: data.data, error: data.error, isLoading: data.isLoading }
};