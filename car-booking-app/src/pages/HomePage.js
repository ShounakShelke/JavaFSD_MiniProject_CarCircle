import React from 'react';
import CarSearch from '../components/CarSearch';
import CarList from '../components/CarList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Car Booking App</h1>
      <CarSearch />
      <CarList />
    </div>
  );
};

export default HomePage;