import React, { useState } from 'react';

const UserManagementPopup = ({ isOpen, onClose, users, onUserUpdate }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({});

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setUpdatedInfo(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleUpdate = () => {
    onUserUpdate(selectedUser.id, updatedInfo);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <h2>User Management</h2>
      <button onClick={onClose}>Close</button>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} onClick={() => handleUserSelect(user)}>
            {user.name}
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-details">
          <h3>Edit User: {selectedUser.name}</h3>
          <input
            type="text"
            name="name"
            value={updatedInfo.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={updatedInfo.email}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Update User</button>
        </div>
      )}
    </div>
  );
};

export default UserManagementPopup;