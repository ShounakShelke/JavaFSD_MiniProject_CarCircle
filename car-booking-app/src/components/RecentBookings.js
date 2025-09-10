import React from 'react';

const RecentBookings = () => {
  const bookings = [
    { id: 1, name: 'Shounak' },
    { id: 2, name: 'Sahil' },
    { id: 3, name: 'Shivam' },
  ];

  return (
    <div>
      <h2>Recent Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;