import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

// const width = Dimensions.get('window').width;

export default function App() {
  const [text, setText] = useState('Welcome Back!');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text>Text: {text}</Text>
        <Text style={{ textAlign: 'center' }}>Text: {text}</Text>
        <TextInput
          style={styles.input}
          placeholder='Insert a text'
          onChangeText={(t) => setText(t)}
          value={text}
        />
        <TouchableWithoutFeedback
          style={styles.touchableOpacity}
          onPress={() => {
            setText('Pressed change text');
          }}
        >
          <View style={styles.view}>
            <Text>Accept</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    backgroundColor: '#999',
  },
  input: {
    height: 40,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    width: '100%',
  },
  scrollView: {
    width: Dimensions.get('window').width,
  },
});
