'use client';
// import React from 'react'

// export default function Map() {
//   return (
//     <div>Map</div>
//   )
// }


'use client';
import React, { useState, useEffect } from 'react';
import DynamicMap from './DynamicMap';

export function Map() {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [universitiesData, setUniversitiesData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [themes, setThemes] = useState([]);
  const melbourneCoords = [-37.8136, 144.9631]; // Melbourne coordinates

  useEffect(() => {
    // Fetch university data
    fetch('/api/resources/university')
      .then(res => res.json())
      .then(data => {
        // Filter universities to only include those in VIC
        // console.log('uni data: ', data)
        const vicUniversities = data.data.filter(uni => uni.state === 'VIC');
        setUniversitiesData(vicUniversities);
      })
      .catch(error => console.error('Error fetching university data:', error));

    // Fetch combined data
    fetch('/api/resources/map')
      .then(res => res.json())
      .then(data => {
        // console.log('map data: ', data)
        setCombinedData(data.data);
        const uniqueThemes = [...new Set(data.data.map(item => item.Theme))];
        setThemes(uniqueThemes);
      })
      .catch(error => console.error('Error fetching combined data:', error));
  }, []);

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  return (
    <div>
      <select onChange={handleUniversityChange} value={selectedUniversity}>
        <option key="default" value="">Select a University</option>
        {universitiesData.map(uni => (
          <option key={uni.ogc_fid} value={uni.ogc_fid}>
            {uni.institution} - {uni.campus_name}
          </option>
        ))}
      </select>

      <select onChange={handleThemeChange} value={selectedTheme}>
        <option key="default" value="">Select a Theme</option>
        {themes.map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>

      {selectedUniversity && selectedTheme && (
        <DynamicMap
          selectedUniversity={selectedUniversity}
          selectedTheme={selectedTheme}
          universitiesData={universitiesData}
          combinedData={combinedData}
          center={melbourneCoords} // Pass the center prop to LeafletMap
        />
      )}
    </div>
  );
}

export default Map;