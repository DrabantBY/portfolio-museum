import Map, { NavigationControl, Marker } from 'react-map-gl';
import { ReactComponent as MarkerIcon } from '../../assets/svg/marker.svg';
import { MARKERS } from '../../constants';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.scss';

const Location = () => {
  const [longitude, latitude] = [2.335824, 48.86088];
  return (
    <Map
      initialViewState={{
        ...MARKERS[0],
        zoom: 16,
      }}
      mapboxAccessToken='pk.eyJ1IjoiZHJhYmFudCIsImEiOiJjbGlhODd5eHUwMTQwM21xcG56MzAwaTBoIn0._naaX3HMJYVM2sbmgfjSvg'
      mapStyle='mapbox://styles/mapbox/light-v10'
      style={{ maxWidth: '960px', height: '620px' }}
    >
      <NavigationControl />
      {MARKERS.map((marker, index) => (
        <Marker key={index} {...marker} anchor='bottom'>
          <MarkerIcon fill={index ? 'gray' : 'black'} />
        </Marker>
      ))}
    </Map>
  );
};

export default Location;
