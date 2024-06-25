import axios from "axios";

export const callInstance = axios.create({
    baseURL: 'https://backend-employees-iwph8xcpu-victech444s-projects.vercel.app'
});