import { useCookies } from "../hooks/useCookies";
import { jwtDecode } from "jwt-decode";
import NormalUserNav from "./NormalUserNav";
import EmployeeNav from "./EmployeeNav";
import ManagerNav from "./ManagerNav";
import { jwtResponse } from "../interfaces/interfaces";

export default function Navbar() {
  let cookie = useCookies();
  if (!cookie) return <NormalUserNav />;

  let decoded: jwtResponse;
  try {
    decoded = jwtDecode(cookie);
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return <NormalUserNav />;
  }

  const { role, exp } = decoded;

  if (Date.now() >= exp * 1000) {
    return <NormalUserNav />;
  }
  
  return (
    <nav>
      {role === 1 ? (
        <EmployeeNav />
      ) : role === 2 ? (
        <ManagerNav />
      ) : (
        <NormalUserNav />
      )}
    </nav>
  );
}
