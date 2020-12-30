import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = ({ style }) => {
  const [texto, setTexto] = useState('Hello World :)');

  const handlePress = () => {
    setTexto('Bye Cruel World');
  };

  return (
    <Text style={[styles.text, style]} onPress={handlePress}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'stretch',
    justifyContent: 'space-evenly',
    // flexDirection: 'row',
  },
  red: {
    // flex: 1,
    backgroundColor: '#ff0000',
  },
  green: {
    // flex: 2,
    backgroundColor: '#00ff00',
  },
  blue: {
    // flex: 3,
    backgroundColor: '#0000ff',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    // height: 100,
    width: '50%',
  },
});
