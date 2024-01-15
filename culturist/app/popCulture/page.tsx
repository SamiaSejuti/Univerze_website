import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
      <iframe
        width="100%"
        src="https://take.quiz-maker.com/QUBLZG7R5"
        frameBorder="0"
        allowFullScreen
        allow="fullscreen; geolocation"
        scrolling="no"
        style={{ 
        
          minHeight: '160vh', 
          maxHeight: '160vh', 
          border: '1px solid lightgrey', 
          borderRadius: '2px' 
        }}
      >
      </iframe>
    </div>
  );
};

export default Page;
