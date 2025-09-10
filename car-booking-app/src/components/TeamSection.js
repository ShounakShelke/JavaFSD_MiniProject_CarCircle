import React from 'react';

const TeamSection = () => {
  const coFounders = [
    { name: 'Shounak Shelke' },
    { name: 'Sahil Kanchan' },
    { name: 'Shivam Bhosle' },
  ];

  return (
    <div className="team-section">
      <h2>Meet Our Co-Founders</h2>
      <ul>
        {coFounders.map((founder, index) => (
          <li key={index}>{founder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSection;