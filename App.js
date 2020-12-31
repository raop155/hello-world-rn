import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.photo} source={{ uri: 'https://placekitten.com/200/200' }}>
        <Text>lalala</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
