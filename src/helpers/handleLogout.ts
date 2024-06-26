import { callInstance } from "@/react-query-calls/axiosBase";

export const handleLogout = async () => {
    let res = await callInstance.post("/logout");

    if (res.status >= 200 && res.status <= 299) {
        window.location.reload();
    }
  };