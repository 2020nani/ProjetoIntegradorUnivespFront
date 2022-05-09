import React from 'react';
import { GoogleApiWrapper, Map, Circle } from 'google-maps-react';
import { Container } from './styles';

export const MapContainer = ({ google, arearisco }) => {
  return (
    console.log(arearisco),
    (
      <Container>
        <Map
          id="define-markes"
          zoom={10}
          google={google}
          maxZoom={10}
          minZoom={1}
          containerStyle={{ width: '100%', height: '100vh' }}
          initialCenter={{
            lat: -23.3192748,
            lng: -46.2291093,
          }}
          disableDefaultUI={false}
          zoomControl={false}
        >
          {arearisco.map(area => (
            <Circle
              key={area.id}
              radius={10000}
              center={{ lat: area.latitude, lng: area.longitude }}
              onClick={() => console.log('testando')}
              strokeColor="transparent"
              strokeOpacity={0}
              strokeWeight={5}
              fillColor="red"
              fillOpacity={0.2}
            />
          ))}
        </Map>
      </Container>
    )
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
