import React, { useState } from 'react';
import UserManagementPopup from '../components/UserManagementPopup';

const AdminPage = () => {
  const [isUserManagementOpen, setUserManagementOpen] = useState(false);

  const handleOpenUserManagement = () => {
    setUserManagementOpen(true);
  };

  const handleCloseUserManagement = () => {
    setUserManagementOpen(false);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleOpenUserManagement}>Manage Users</button>
      {isUserManagementOpen && (
        <UserManagementPopup onClose={handleCloseUserManagement} />
      )}
    </div>
  );
};

export default AdminPage;