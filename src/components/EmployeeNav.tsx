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
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
