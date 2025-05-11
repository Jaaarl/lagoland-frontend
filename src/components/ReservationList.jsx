import { useEffect, useState } from 'react';
import API from '../api';

export default function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    API.get('/reservations').then(res => setReservations(res.data));
  }, []);

  const handleCheckout = async id => {
    await API.post(`/reservations/${id}/checkout`);
    setReservations(prev =>
      prev.map(r => (r._id === id ? { ...r, isCheckedOut: true } : r))
    );
  };

  return (
    <ul>
      {reservations.map(r => (
        <li key={r._id}>
          {r.type} - {r.date.slice(0, 10)} - Guests: {r.guests} - Checked out: {r.isCheckedOut ? 'Yes' : 'No'}
          {!r.isCheckedOut && (
            <button onClick={() => handleCheckout(r._id)}>Check Out</button>
          )}
        </li>
      ))}
    </ul>
  );
}