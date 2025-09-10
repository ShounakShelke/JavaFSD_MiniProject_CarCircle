import React from 'react';

const CarList = ({ cars, onCarSelect }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="car-item" onClick={() => onCarSelect(car)}>
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <p>Price: ${car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;