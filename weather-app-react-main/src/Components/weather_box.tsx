import React from 'react';
import { Box } from '@chakra-ui/react';

interface WeatherBoxProps {
  data: {
    name?: string;
    main?: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather?: {
      main: string;
    }[];
    wind?: {
      speed: number;
    };
  };
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ data }) => {
  const fahrenheitToCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const { name, main, weather, wind } = data;

  return (
    <Box w='40vw'>
      <Box className='top'>
        <Box className='location'>
          <p>{name}</p>
        </Box>
        {main && (
          <Box className='temp'>
            <h1>{fahrenheitToCelsius(main.temp).toFixed()}°C</h1>
          </Box>
        )}
        {weather && (
          <Box className='description'>
            <p>{weather[0].main}</p>
          </Box>
        )}
      </Box>

      {name !== undefined && (
        <Box className='bottom'>
          {main && (
            <Box className='feels'>
              <p className='bold'>
                {fahrenheitToCelsius(main.feels_like).toFixed()}°C
              </p>
              <p>Feels Like</p>
            </Box>
          )}
          {main && (
            <Box className='humidity'>
              <p className='bold'>{main.humidity}%</p>
              <p>Humidity</p>
            </Box>
          )}
          {wind && (
            <Box className='wind'>
              <p className='bold'>{wind.speed.toFixed()} MPH</p>
              <p>Wind Speed</p>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default WeatherBox;
