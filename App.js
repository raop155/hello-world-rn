import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Modal here!</Text>
            <Button title='Close' onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <Text>Not modal</Text>
      <Text>Not modal</Text>
      <Text>Not modal</Text>
      <Text>Not modal</Text>
      <Text>Not modal</Text>
      <Button title='Open' onPress={() => setModal(!modal)} />
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    backgroundColor: '#fff',
    height: '75%',
    width: '75%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
