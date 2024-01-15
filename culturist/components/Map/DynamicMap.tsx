'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the greenIcon outside of the component to avoid re-creating it on each render.
const greenIcon = L.icon({
  iconUrl: '/images/marker.png',
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false
});
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false
});
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false
});

const DynamicMap = ({ selectedUniversity, selectedTheme, universitiesData, combinedData }) => {
  const [center, setCenter] = useState([-37.8136, 144.9631]);
  
  // Derive selectedUniversityData based on the current props
  const selectedUniversityData = universitiesData.find(uni => uni.ogc_fid === parseInt(selectedUniversity));

  useEffect(() => {
    if (selectedUniversityData) {
      const universityCoordinates = [
        parseFloat(selectedUniversityData.latitude),
        parseFloat(selectedUniversityData.longitude)
      ];
      setCenter(universityCoordinates);
    }
  }, [selectedUniversityData]);

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: '850px', width: '1000px' }}>
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution='<a href="https://www.google.com/maps">Google Maps</a>'
          maxZoom={20}
        />
        {selectedTheme && combinedData.length > 0 && (
          combinedData
            .filter(item => item.Theme === selectedTheme)
            .map((item, index) => (
              <Marker key={index} position={[parseFloat(item.lat), parseFloat(item.lon)]} icon={greenIcon}>
                <Popup>
                  <div>
                    <strong>Feature Name:</strong> {item['feature_name']}<br />
                    <strong>Business Address:</strong> {item['Business_address']}
                  </div>
                </Popup>
              </Marker>
            ))
        )}
        {selectedUniversityData && (
          <Marker position={[parseFloat(selectedUniversityData.latitude), parseFloat(selectedUniversityData.longitude)]} icon={greenIcon}>
            <Popup>
              <div>
                <strong>Institution:</strong> {selectedUniversityData.institution}<br />
                <strong>Campus Name:</strong> {selectedUniversityData.campus_name}<br />
                <strong>State:</strong> {selectedUniversityData.state}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default DynamicMap

// import React from 'react'

// export default function DynamicMap() {
//   return (
//     <div>DynamicMap</div>
//   )
// }