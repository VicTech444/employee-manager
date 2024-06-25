import { Link } from "react-router-dom";
import { callInstance } from "../react-query-calls/axiosBase";

export default function ManagerNav() {
  const handleLogout = async () => {
    let res = await callInstance.post('/logout', "", {
      withCredentials: true
    });

    if (res.status >= 200 && res.status <= 299) {
      window.location.reload()
    }
  }

  return (
      <ul>
        <li>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/add-employee">Add Employee</Link>
        </li>
      </ul>
  );
}
