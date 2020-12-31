import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

export default function App() {
  const [point, setPoint] = useState({});
  const searchLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      return Alert.alert('You do not have the necessary permissions!!');
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setPoint(location);
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {point.coords && (
          <Marker coordinate={point.coords} title='Title' description='Description' />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
