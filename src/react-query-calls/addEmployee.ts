import { useContext } from "react";
import { callInstance } from "./axiosBase";
import { NotifyContext } from "../context/NotificationContext";
import { AxiosError, AxiosResponse } from "axios";

interface formProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    roleId: string;
}
const fetchData = async (formData: formProps): Promise<AxiosResponse<any, any> | AxiosError<any, any>> => {
    try {
        // Making registering employees unavailable
        throw new Error('This option is only available when not using a sample account');
        /* let res = await callInstance.post('/sign', formData, {
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            return res;
        }
        */     
    } catch (error: any) {
        return error
    }
}


export const useHandleAddEmploy = () => {
    let notifyContext = useContext(NotifyContext);

    const handleAddEmploy = async (formData: formProps) => {
        let res = await fetchData(formData);
        let { setNotification } = notifyContext!;
        if (res.status! >= 200 && res.status! <= 299) {
            setNotification({
                type: 'success',
                message: 'Account created succesfully'
            });

            setTimeout(() => {
                setNotification(null);
            }, 3000)
            return
        }

        if (res instanceof Error) {
            setNotification({
                type: 'error',
                message: `${res.message}`
            });

            setTimeout(() => {
                setNotification(null);
            }, 3000)
        }

    }

    return { handleAddEmploy }
};