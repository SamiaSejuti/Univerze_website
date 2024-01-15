'use client'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Box, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';

import PhoneStepper from '@/components/PhoneStepper';
import BankingStepper from '@/components/BankingStepper';
import TransportationStepper from '@/components/TransportationStepper';
import AccomodationStepper from '@/components/AccomodationStepper';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);

 
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <ParallaxProvider>
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          sx={{ 
            position: 'sticky', 
            top: 0, 
            width: '100%', 
            backgroundColor: '#DAD870',
            zIndex: 1
          }}
          variant="fullWidth" 
        >
          <Tab label="Phone" />
          <Tab label="Banking" />
          <Tab label="Accommodation" />
          <Tab label="Transportation" />
        </Tabs>

        {activeTab === 0 && <PhoneStepper />}
        {activeTab === 1 && <BankingStepper />}
        {activeTab === 2 && <AccomodationStepper />}
        {activeTab === 3 && <TransportationStepper />}
      </ParallaxProvider>
    </Box>
  );
}
