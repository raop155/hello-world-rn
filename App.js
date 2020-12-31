import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [permission, setPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setPermission(status == 'granted');
  };

  useEffect(() => {
    getPermission();
  }, []);

  if (permission === null) {
    return (
      <View>
        <Text>Waiting for permission</Text>
      </View>
    );
  }

  if (permission === false) {
    return (
      <View>
        <Text>Do not have access to Camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <Button
          title='Back'
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const newType = type === back ? front : back;

            setType(newType);
          }}
        />
      </Camera>
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
  camera: {
    flex: 1,
    width: '100%',
  },
});
