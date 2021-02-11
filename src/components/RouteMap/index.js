import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {useRoute} from '@react-navigation/native';

const RouteMap = ({origin, destination}) => {
  const API_KEY = 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg';
  const route = useRoute();
  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7e8',
      }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: originLocation.latitude,
          longitude: originLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={originLocation}
          destination={destinationLocation}
          apikey={API_KEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker coordinate={originLocation} title={'Origin'} />
        <Marker coordinate={destinationLocation} title={'Destination'} />
      </MapView>
    </View>
  );
};

export default RouteMap;
