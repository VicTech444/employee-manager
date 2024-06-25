import { useCookies } from "../hooks/useCookies";
import { jwtDecode } from "jwt-decode";
import NormalUserNav from "./NormalUserNav";
import EmployeeNav from "./EmployeeNav";
import ManagerNav from "./ManagerNav";
import { jwtResponse } from "../interfaces/interfaces";
import { use, useEffect, useState } from "react";

export default function Navbar() {
  let [navbarState, setNavBarState] = useState<null | number>(null);

  useEffect(() => {
    const useValidation = () => {
      let cookie = useCookies();
      if (!cookie) {
        setNavBarState(null);
        return;
      }

      let decoded: jwtResponse;
      try {
        decoded = jwtDecode(cookie);
      } catch (error) {
        console.error("Error decoding JWT:", error);
        setNavBarState(null);
        return;
      }

      const { role, exp } = decoded;

      if (Date.now() >= exp * 1000) {
        setNavBarState(null);
        return
      }

      if (role == 1) setNavBarState(1);
      if (role == 2) setNavBarState(2)
    };

    useValidation();
  }, []);

  return (
    <nav>
      {navbarState === 1 ? (
        <EmployeeNav />
      ) : navbarState === 2 ? (
        <ManagerNav />
      ) : (
        <NormalUserNav />
      )}
    </nav>
  );
}
