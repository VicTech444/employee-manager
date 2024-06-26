import Link from "next/link";
import { handleLogout } from "@/helpers/handleLogout";

export default function EmployeeNav() {
  
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
