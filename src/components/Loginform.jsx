import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/reservations');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col gap-4 p-6 bg-white shadow-md rounded-md w-full max-w-sm mx-auto"
    >
      <input
        name="username"
        onChange={handleChange}
        placeholder="Username"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate('/register')}
        className="text-blue-600 underline hover:text-blue-800 text-sm"
      >
        Don't have an account? Register
      </button>
    </form>
  );
}