
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'iPhone 16', price: '22.990.000đ', description: 'Điện thoại Apple hiện đại.' },
  { id: '2', name: 'MacBook Air', price: '25.990.000đ', description: 'Laptop mỏng nhẹ, tiện lợi.' },
  { id: '3', name: 'Tai nghe', price: '1.500.000đ', description: 'Âm thanh chất lượng cao.' },
  { id: '4', name: 'iPad', price: '12.000.000đ', description: 'Máy tính bảng tiện dụng.' },
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DANH SÁCH SẢN PHẨM</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.more}>Xem chi tiết →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F0F6FF',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1769D2',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#E53935',
    marginTop: 6,
  },
  more: {
    color: '#1769D2',
    marginTop: 8,
  },
});
