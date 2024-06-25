import { callInstance } from "../react-query-calls/axiosBase";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface formProps {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let target = e.target as unknown as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(formData);
  };

  const handleLogin = async (formData: formProps) => {
    let res = await callInstance.post('/login', formData, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (res.status >= 200 && res.status <= 299){
      navigate('/employees')
    }
  };

  useEffect(() => {
    const test = async () => {
      let res = await callInstance.get('/testing');
      console.log(res)
    }
    test()
  },[])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
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

      <button type="submit">Log in</button>
    </form>
  );
}
