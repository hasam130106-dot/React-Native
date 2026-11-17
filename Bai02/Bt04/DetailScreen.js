
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHI TIẾT SẢN PHẨM</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Giá: {item.price}</Text>
      <Text style={styles.text}>{item.description}</Text>

      <Button
        title="Quay lại"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F0F6FF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1769D2',
    marginBottom: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    color: 'red',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 25,
  },
});
