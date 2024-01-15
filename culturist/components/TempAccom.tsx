import React from 'react';

const TempAccom: React.FC = () => {
    return (
        <div>

            <iframe
                width="100%"
                src="https://felt.com/embed/map/Points-of-Interest-KGQxdQYiQs6eNuDNyNPuJD?loc=-37.812069,144.954064,15.31z"
                frameBorder="0"
                allowFullScreen
                allow="fullscreen; geolocation"
                scrolling="no"
                style={{
                    minHeight: '90vh',
                    maxHeight: '90vh',
                    border: '1px solid lightgrey',
                    borderRadius: '2px',
                }}
            ></iframe>


        </div>
    );
};

export default TempAccom;