import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Input,
  Box,
} from '@chakra-ui/react';
import Mapbox from './Components/map';
import WeatherBox from './Components/weather_box';

const App: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('delhi');

  const fetchWeatherData = () => {
    const apiKey = '44efb62f3b3e02643b79b360eade8d01';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data, 'wfwf');
    });
  };

  const handleSearchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="app">
      <Box w='40%' m='auto' py='3em'>
        <Input
          value={location}
          w='100%'
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={handleSearchLocation}
          placeholder='Enter Location'
          type="text"
        />
      </Box>

      <Box w='90%' m='auto' className='container'>
        <Box>
          <Mapbox location={location} />
        </Box>
        <Box>
          <WeatherBox data={data} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
