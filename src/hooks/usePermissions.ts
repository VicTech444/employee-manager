import { useNavigate } from "react-router-dom";
import { useHandleLogin } from "../react-query-calls";
import { useEffect } from "react";
import { jwtResponse } from "../interfaces/interfaces";
import { jwtDecode } from "jwt-decode";

export const useHandlePermissions = () => {
    let navigate = useNavigate();
    let { data, cookie } = useHandleLogin();

    useEffect(() => {
        if (data.error || !cookie) {
            navigate("/");
            return
        }
        
        let decoded: jwtResponse;
        try {
            decoded = jwtDecode(cookie);
        } catch (error) {
            console.error("Error decoding JWT:", error);
            navigate("/");
            return;
        }

        const { role } = decoded;

        if (role != 1 && role != 2) {
            navigate("/");
        } else if (role === 1) {
            navigate("/settings");
        } else if (role !== 2) {
            navigate("/");
        }
    }, []);

    return { data, cookie }
}