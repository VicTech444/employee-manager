import { useRouter } from "next/navigation";
import { useHandleLogin } from "../react-query-calls";
import { useEffect } from "react";
import { jwtResponse } from "../interfaces/interfaces";
import { jwtDecode } from "jwt-decode";

export const useHandlePermissions = () => {
    let navigate = useRouter();
    let { data, cookie } = useHandleLogin();
    
    useEffect(() => {
        if (data.error || !cookie) {
            navigate.push("/");
            return
        }
        
        let decoded: jwtResponse;
        try {
            decoded = jwtDecode(cookie);
        } catch (error) {
            console.error("Error decoding JWT:", error);
            navigate.push("/");
            return;
        }

        const { role } = decoded;

        if (role != 1 && role != 2) {
            navigate.push("/");
        } else if (role === 1) {
            navigate.push("/");
        } else if (role !== 2) {
            navigate.push("/");
        }
    }, []);

    return { data, cookie }
}