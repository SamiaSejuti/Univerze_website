import React from 'react';

const CompareRentBySub: React.FC = () => {
  return (
    <div>
      <h1>Embedded Flask Application</h1>
      <iframe
        src="http://localhost:5000"
        style={{
          border: 'none',
          width: '100%',
          height: '500px' // Set the height according to your preference
        }}
        title="Flask Application"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CompareRentBySub;
