import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Box } from '@chakra-ui/react';
const WeatherBox = ({ data }) => {
    const fahrenheitToCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5) / 9;
    };
    const { name, main, weather, wind } = data;
    return (_jsxs(Box, { w: '40vw', children: [_jsxs(Box, { className: 'top', children: [_jsx(Box, { className: 'location', children: _jsx("p", { children: name }) }), main && (_jsx(Box, { className: 'temp', children: _jsxs("h1", { children: [fahrenheitToCelsius(main.temp).toFixed(), "\u00B0C"] }) })), weather && (_jsx(Box, { className: 'description', children: _jsx("p", { children: weather[0].main }) }))] }), name !== undefined && (_jsxs(Box, { className: 'bottom', children: [main && (_jsxs(Box, { className: 'feels', children: [_jsxs("p", { className: 'bold', children: [fahrenheitToCelsius(main.feels_like).toFixed(), "\u00B0C"] }), _jsx("p", { children: "Feels Like" })] })), main && (_jsxs(Box, { className: 'humidity', children: [_jsxs("p", { className: 'bold', children: [main.humidity, "%"] }), _jsx("p", { children: "Humidity" })] })), wind && (_jsxs(Box, { className: 'wind', children: [_jsxs("p", { className: 'bold', children: [wind.speed.toFixed(), " MPH"] }), _jsx("p", { children: "Wind Speed" })] }))] }))] }));
};
export default WeatherBox;
