import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ServiceCard({ item, onPress }) {
  return (
    <View style={{
      backgroundColor: 'white',
      margin: 10,
      padding: 12,
      borderRadius: 12
    }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 160, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10 }}>
        {item.name}
      </Text>

      <Text style={{ marginTop: 5 }}>Thời lượng: {item.duration}</Text>

      <Text style={{ color: '#1769D2', fontWeight: 'bold', marginVertical: 8 }}>
        Giá: {item.price}
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#1769D2',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          XEM CHI TIẾT
        </Text>
      </TouchableOpacity>
    </View>
  );
}