import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function DestinationCard({ item, onPress, favorite, onFavorite }) {
  return (
    <View style={{
      backgroundColor: 'white',
      margin: 8,
      borderRadius: 16,
      overflow: 'hidden',
      flex: 1
    }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 125 }}
        />
      </TouchableOpacity>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <Text style={{ color: '#777', marginTop: 4 }}>
          {item.location} · ★ {item.rating}
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 8
        }}>
          <Text style={{ color: '#087F8C', fontWeight: 'bold' }}>
            {item.price}
          </Text>

          <TouchableOpacity onPress={onFavorite}>
            <Text style={{ fontSize: 22 }}>
              {favorite ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}