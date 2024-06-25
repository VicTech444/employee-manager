import { Link } from "react-router-dom";
import { callInstance } from "../react-query-calls/axiosBase";

export default function EmployeeNav() {
  const handleLogout = async () => {
    await callInstance.post("/logout");
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
