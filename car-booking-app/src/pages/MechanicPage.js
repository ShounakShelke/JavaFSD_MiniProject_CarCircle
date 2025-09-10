import React, { useState } from 'react';
import MechanicAssignmentPopup from '../components/MechanicAssignmentPopup';
import ServiceReportPopup from '../components/ServiceReportPopup';

const MechanicPage = () => {
  const [isAssignmentPopupOpen, setAssignmentPopupOpen] = useState(false);
  const [isServiceReportPopupOpen, setServiceReportPopupOpen] = useState(false);

  const handleOpenAssignmentPopup = () => {
    setAssignmentPopupOpen(true);
  };

  const handleCloseAssignmentPopup = () => {
    setAssignmentPopupOpen(false);
  };

  const handleOpenServiceReportPopup = () => {
    setServiceReportPopupOpen(true);
  };

  const handleCloseServiceReportPopup = () => {
    setServiceReportPopupOpen(false);
  };

  return (
    <div>
      <h1>Mechanic Dashboard</h1>
      <button onClick={handleOpenAssignmentPopup}>View Assignments</button>
      <button onClick={handleOpenServiceReportPopup}>Upload Service Report</button>

      {isAssignmentPopupOpen && (
        <MechanicAssignmentPopup onClose={handleCloseAssignmentPopup} />
      )}
      {isServiceReportPopupOpen && (
        <ServiceReportPopup onClose={handleCloseServiceReportPopup} />
      )}
    </div>
  );
};

export default MechanicPage;