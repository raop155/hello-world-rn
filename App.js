import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

// const width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: '1', name: 'Name 1' },
          { key: '2', name: 'Name 2' },
          { key: '3', name: 'Name 3' },
          { key: '4', name: 'Name 4' },
          { key: '5', name: 'Name 5' },
          { key: '6', name: 'Name 6' },
          { key: '7', name: 'Name 7' },
          { key: '8', name: 'Name 8' },
          { key: '9', name: 'Name 9' },
          { key: '10', name: 'Name 10' },
          { key: '11', name: 'Name 11' },
          { key: '12', name: 'Name 12' },
          { key: '13', name: 'Name 13' },
          { key: '14', name: 'Name 14' },
          { key: '15', name: 'Name 15' },
        ]}
        renderItem={({ item }) => {
          return (
            <Text style={styles.item} key={item.key}>
              {item.name}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  item: {
    padding: 10,
    fontSize: 22,
    // height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    // width: '100%',
  },
});
