import React, { useState } from 'react';

const BookingPopup = ({ car, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking Details:', bookingDetails);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="booking-popup">
      <h2>Book {car.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={bookingDetails.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={bookingDetails.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={bookingDetails.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Booking Date:</label>
          <input type="date" name="date" value={bookingDetails.date} onChange={handleChange} required />
        </div>
        <button type="submit">Confirm Booking</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BookingPopup;