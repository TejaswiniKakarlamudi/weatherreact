import React, { useState } from 'react';
import Header from '../Components/Units/Header';
import Card from '../Components/Units/Card';
import { useRef } from 'react';

const Home = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = 'faf65fd969174722bf6141659240405';
  const alertShownRef = useRef(false);

  const handleSearch = async (location) => {
    console.log(`Searching for ${location}`);
    setLocation(location);
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${token}&q=${location}&aqi=yes`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again another name');
    } finally {
      setLoading(false);
    }
  };

  const handleError = () => {
  if (!alertShownRef.current) {
    alert(`Failed to fetch weather data`);
    alertShownRef.current = true; // mark as shown
  }
  };

  return (
    <>
      <div className="image-overlay"></div>
      <Header location={location} onSearch={handleSearch} />
      {loading && <p>Loading data...</p>}
      {error && handleError()}
      {data && <Card data={data} />}
    </>
  );
}

export default Home;
