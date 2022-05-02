import React, { useState } from 'react';
import { GoogleApiWrapper, Map, Circle } from 'google-maps-react';
import { useSelector } from 'react-redux';
import MapControls from '../MapControls';
import { Container } from './styles';

export const MapContainer = ({ google }) => {
  const [places, setPlaces] = useState([
    {
      name: 'Place 1',
      latitude: -23.31509536897005,
      longitude: -46.57099951314262,
    },
    {
      name: 'Place 2',
      latitude: -23.91249270500097,
      longitude: -47.09606419418101,
    },
    {
      name: 'Place 3',
      latitude: -23.52710718577365,
      longitude: -46.69994882618741,
    },
    {
      name: 'Place 4',
      latitude: -23.51754048756383,
      longitude: -46.720150962394044,
    },
    {
      name: 'Place 5',
      latitude: -23.413788281465223,
      longitude: -46.20064058300011,
    },
    {
      name: 'Place 6',
      latitude: -23.220308056164285,
      longitude: -46.62869783157425,
    },
    {
      name: 'Place 7',
      latitude: -23.595480253216905,
      longitude: -46.76326904176956,
    },
    {
      name: 'Place 8',
      latitude: -23.103617301247773,
      longitude: -47.21331716131434,
    },
    {
      name: 'Place 9',
      latitude: -23.34225455501337,
      longitude: -46.72375266194919,
    },
    {
      name: 'Place 10',
      latitude: -23.435010523425316,
      longitude: -46.75793393713071,
    },
    {
      name: 'Place 11',
      latitude: -23.55769115766933,
      longitude: -46.70289747854592,
    },
    {
      name: 'Place 12',
      latitude: -24.018829971035377,
      longitude: -46.22343742577884,
    },
    {
      name: 'Place 13',
      latitude: -23.507746459511544,
      longitude: -46.69649078211333,
    },
    {
      name: 'Place 14',
      latitude: -23.539648374087246,
      longitude: -46.7015175248792,
    },
    {
      name: 'Place 15',
      latitude: -23.31915116591076,
      longitude: -46.70032586047838,
    },
    {
      name: 'Place 16',
      latitude: -23.50652477309112,
      longitude: -46.113766484016544,
    },
    {
      name: 'Place 17',
      latitude: -23.376433738940147,
      longitude: -47.19019408576682,
    },
    {
      name: 'Place 18',
      latitude: -23.48375185661303,
      longitude: -46.65613979287038,
    },
    {
      name: 'Place 19',
      latitude: -23.396757122537576,
      longitude: -46.70978280175039,
    },
  ]);
  const [bounds, setBounds] = useState();

  return (
    <Container>
      <Map
        id="define-markes"
        google={google}
        zoom={5}
        maxZoom={10}
        minZoom={1}
        containerStyle={{ width: '100%', height: '100vh' }}
        initialCenter={{
          lat: -23.31509536897005,
          lng: -46.57099951314262,
        }}
        center={bounds}
        disableDefaultUI={false}
        zoomControl={false}
        disableDoubleClickZoom={true}
        draggable={true}
      >
        {places.map(place => (
          <Circle
            key={place.name}
            radius={parseInt(mapControls.radius)}
            center={{ lat: place.latitude, lng: place.longitude }}
            onClick={() =>
              (mapControls.radius = parseInt(mapControls.radius) + 1000)
            }
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="blue"
            fillOpacity={0.2}
          />
        ))}
      </Map>
      <MapControls />
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
