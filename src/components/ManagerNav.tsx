import { callInstance } from "../react-query-calls/axiosBase";
import Link from "next/link";

export default function ManagerNav() {
  const handleLogout = async () => {
    await callInstance.post("/logout");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/employees">Employees</Link>
        </li>
        <li>
          <Link href="/add-employee">Add Employee</Link>
        </li>
      </ul>
    </nav>
  );
}
