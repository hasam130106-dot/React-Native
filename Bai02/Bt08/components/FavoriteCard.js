import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function FavoriteCard({ item, onPress, onRemove }) {
  return (
    <View style={{
      backgroundColor: 'white',
      flexDirection: 'row',
      margin: 10,
      padding: 10,
      borderRadius: 14,
      alignItems: 'center'
    }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 105, height: 90, borderRadius: 10 }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {item.name}
        </Text>
        <Text style={{ color: '#777', marginVertical: 5 }}>
          {item.location}
        </Text>
        <Text style={{ color: '#087F8C', fontWeight: 'bold' }}>
          {item.price}
        </Text>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Text style={{ fontSize: 22 }}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
}