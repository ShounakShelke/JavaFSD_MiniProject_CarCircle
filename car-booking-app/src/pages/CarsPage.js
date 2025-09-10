import React, { useState } from 'react';
import CarSearch from '../components/CarSearch';
import CarList from '../components/CarList';
import CarDetailsPopup from '../components/CarDetailsPopup';
import BookingPopup from '../components/BookingPopup';
import RecentBookings from '../components/RecentBookings';

const CarsPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleBookingOpen = () => {
    setIsBookingOpen(true);
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
  };

  return (
    <div>
      <h1>Available Cars for Booking</h1>
      <CarSearch />
      <CarList onCarSelect={handleCarSelect} />
      {selectedCar && (
        <CarDetailsPopup car={selectedCar} onClose={() => setSelectedCar(null)} onBook={handleBookingOpen} />
      )}
      {isBookingOpen && <BookingPopup car={selectedCar} onClose={handleBookingClose} />}
      <RecentBookings />
    </div>
  );
};

export default CarsPage;