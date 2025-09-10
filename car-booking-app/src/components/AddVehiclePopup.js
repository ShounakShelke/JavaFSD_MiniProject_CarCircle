import React, { useState } from 'react';

const AddVehiclePopup = ({ onClose }) => {
  const [vehicleData, setVehicleData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle adding the vehicle goes here
    console.log('Vehicle added:', vehicleData);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" name="make" value={vehicleData.make} onChange={handleChange} required />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={vehicleData.model} onChange={handleChange} required />
        </label>
        <label>
          Year:
          <input type="number" name="year" value={vehicleData.year} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={vehicleData.price} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={vehicleData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Add Vehicle</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddVehiclePopup;