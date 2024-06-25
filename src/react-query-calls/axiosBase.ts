import axios from "axios";

export const callInstance = axios.create({
    baseURL: '/api'
});