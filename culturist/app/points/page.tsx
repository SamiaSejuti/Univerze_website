import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
      <iframe
        width="100%"
        src="https://viewer.mapme.com/5c9cd96d-18d2-4da8-98f9-ca878ab6bc30"
        frameBorder="0"
        allowFullScreen
        allow="fullscreen; geolocation"
        scrolling="no"
        style={{ 
          minHeight: '90vh', 
          maxHeight: '90vh', 
          border: '1px solid lightgrey', 
          borderRadius: '2px' 
        }}
      >
      </iframe>
    </div>
  );
};

export default Page;
