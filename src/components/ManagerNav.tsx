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
          <a href="/" onClick={handleLogout}>Logout</a>
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
  );
}
