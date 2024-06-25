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
        let res = await callInstance.post('/sign', formData, {
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            return res;
        }

        throw new Error('An error has been occured while creating the user');
    } catch (error) {
        return error as AxiosError
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

        if (res instanceof AxiosError) {
            setNotification({
                type: 'error',
                message: `An error has been occured while creating the user: ( ${res.response?.data.message} )`
            });

            setTimeout(() => {
                setNotification(null);
            }, 3000)
        }

    }

    return { handleAddEmploy }
};