import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
const Mapbox = ({ location }) => {
    useEffect(() => {
        const url = `https://www.google.com/maps/embed/v1/search?q=${location || 'delhi'}&key=AIzaSyDPzyxK1W4LljL0ngsE7idpb0oruTBJRAo`;
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.src = url;
        }
    }, [location]);
    return (_jsx(Box, { className: 'map_box', children: _jsx("iframe", { title: 'Map', width: '600', height: '450', loading: 'lazy', allowFullScreen: true }) }));
};
export default Mapbox;
