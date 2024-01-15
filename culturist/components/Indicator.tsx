import React from 'react';

const Indicator = () => {
    return (
        <div className="indicator relative" 
            style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '25px',
                overflow: 'hidden',
                backgroundColor: 'pink',
                zIndex: 10,
                padding: '5px',
                border: '2px solid black'
            }}
        >
            <div className="grid w-full h-full absolute top-0 left-0 bg-base-300 place-items-center z-10"  
                style={{
                    backgroundColor: 'pink', 
                    fontFamily: 'Revalia-Regular, sans-serif'
                }}
            >
                <span>1/10</span> 
            </div>
        </div>
    );
}

export default Indicator;
