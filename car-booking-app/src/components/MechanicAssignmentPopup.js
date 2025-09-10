import React, { useState } from 'react';

const MechanicAssignmentPopup = ({ isOpen, onClose, assignments }) => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleCloseDetails = () => {
    setSelectedAssignment(null);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Mechanic Assignments</h2>
        <button onClick={onClose}>Close</button>
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index} onClick={() => handleAssignmentClick(assignment)}>
              {assignment.title}
            </li>
          ))}
        </ul>
        {selectedAssignment && (
          <div className="assignment-details">
            <h3>Assignment Details</h3>
            <p>{selectedAssignment.details}</p>
            <button onClick={handleCloseDetails}>Close Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MechanicAssignmentPopup;