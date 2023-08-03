import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

interface MapboxProps {
  location: string;
}

const Mapbox: React.FC<MapboxProps> = ({ location }) => {
  useEffect(() => {
    const url = `https://www.google.com/maps/embed/v1/search?q=${location || 'delhi'}&key=AIzaSyDPzyxK1W4LljL0ngsE7idpb0oruTBJRAo`;

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = url;
    }
  }, [location]);

  return (
    <Box className='map_box'>
      <iframe
        title='Map'
        width='600'
        height='450'
        loading='lazy'
        allowFullScreen
      ></iframe>
    </Box>
  );
}

export default Mapbox;
