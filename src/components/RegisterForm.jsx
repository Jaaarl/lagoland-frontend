import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', password: '', name: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
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
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
      >
        Register
      </button>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="text-green-600 underline hover:text-green-800 text-sm"
      >
        Already have an account? Login
      </button>
    </form>
  );
}
