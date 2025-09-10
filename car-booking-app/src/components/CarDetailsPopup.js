import React from 'react';

const CarDetailsPopup = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{car.name}</h2>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Price:</strong> ₹{car.price}</p>
        <p><strong>Description:</strong> {car.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CarDetailsPopup;