import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReservationsPage from './pages/ReservationsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}