import React, { useState } from 'react';
import AddVehiclePopup from '../components/AddVehiclePopup';

const SellPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddVehicleClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h1>Sell Your Car</h1>
      <button onClick={handleAddVehicleClick}>List Your Car</button>
      {isPopupOpen && <AddVehiclePopup onClose={closePopup} />}
    </div>
  );
};

export default SellPage;