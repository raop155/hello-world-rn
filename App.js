import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 22,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
