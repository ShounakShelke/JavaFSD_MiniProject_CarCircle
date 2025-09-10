import React, { useState } from 'react';
import AddVehiclePopup from '../components/AddVehiclePopup';
import RecentBookings from '../components/RecentBookings';
import UserManagementPopup from '../components/UserManagementPopup';

const ManagerPage = () => {
  const [isAddVehiclePopupOpen, setAddVehiclePopupOpen] = useState(false);
  const [isUserManagementPopupOpen, setUserManagementPopupOpen] = useState(false);

  const handleAddVehicleClick = () => {
    setAddVehiclePopupOpen(true);
  };

  const handleUserManagementClick = () => {
    setUserManagementPopupOpen(true);
  };

  const closeAddVehiclePopup = () => {
    setAddVehiclePopupOpen(false);
  };

  const closeUserManagementPopup = () => {
    setUserManagementPopupOpen(false);
  };

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <button onClick={handleAddVehicleClick}>Add New Vehicle</button>
      <button onClick={handleUserManagementClick}>Manage Users</button>
      <RecentBookings />
      {isAddVehiclePopupOpen && <AddVehiclePopup onClose={closeAddVehiclePopup} />}
      {isUserManagementPopupOpen && <UserManagementPopup onClose={closeUserManagementPopup} />}
    </div>
  );
};

export default ManagerPage;