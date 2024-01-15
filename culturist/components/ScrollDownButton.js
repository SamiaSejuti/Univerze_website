import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export const ScrollDownButton = () => {
  return (
    <button
      type="button"
      className="btn btn-circle md:w-auto"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        width: '50px',
        height: '50px',
        border: '2px solid #fff',
        borderRadius: '100%',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'black'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      onClick={() => {
        const ourServicesSection = document.getElementById('our-services');
        if (ourServicesSection) {
          ourServicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <FontAwesomeIcon icon={faAngleDoubleDown} style={{ verticalAlign: '8%' }} />
    </button>
  );
};
