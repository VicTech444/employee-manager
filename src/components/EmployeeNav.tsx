import Link from "next/link";
import { callInstance } from "../react-query-calls/axiosBase";

export default function EmployeeNav() {
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
      </ul>
    </nav>
  );
}
