
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHÀO MỪNG BẠN!</Text>
      <Text style={styles.text}>
        Chào mừng đến với cửa hàng của chúng tôi.
      </Text>
      <Button
        title="Xem danh sách sản phẩm"
        onPress={() => navigation.navigate('Danh sách')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F6FF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1769D2',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
