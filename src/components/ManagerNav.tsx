import { callInstance } from "../react-query-calls/axiosBase";

export default function ManagerNav() {
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
        <li>
          <a href="/employees">Employees</a>
        </li>
        <li>
          <a href="/add-employee">Add Employee</a>
        </li>
      </ul>
    </nav>
  );
}
