import React, { useState } from 'react';

const ServiceReportPopup = ({ isOpen, onClose }) => {
  const [report, setReport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle report submission
    console.log('Service Report Submitted:', report);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Service Report</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Enter service report details"
            required
          />
          <button type="submit">Submit Report</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceReportPopup;