import { ChangeEvent, FormEvent, useState } from "react";
import { useHandleAddEmploy } from "../react-query-calls";

export default function EmployeeForm() {
  let { handleAddEmploy } = useHandleAddEmploy();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    roleId: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    let target = e.target as unknown as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddEmploy(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="roleId">Role:</label>
      <select
        id="roleId"
        name="roleId"
        value={formData.roleId}
        onChange={handleChange}
        required
      >
        <option value="">Select a role</option>
        <option value="1">Employee</option>
        <option value="2">Manager</option>
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}
