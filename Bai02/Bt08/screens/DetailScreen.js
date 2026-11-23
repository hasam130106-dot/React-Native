import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFavorites } from '../context/FavoriteContext';

export default function DetailScreen({ route }) {
  const { place } = route.params;
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some(item => item.id === place.id);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F0F7F6' }}>
      <Image
        source={{ uri: place.image }}
        style={{ width: '100%', height: 270 }}
      />

      <View style={{ padding: 20 }}>
        <Text style={{ color: '#087F8C', fontWeight: 'bold' }}>
          {place.location} · {place.category}
        </Text>

        <Text style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginTop: 8
        }}>
          {place.name}
        </Text>

        <Text style={{ color: '#D68A20', marginTop: 8 }}>
          ★ {place.rating} / 5.0
        </Text>

        <Text style={{
          fontSize: 16,
          lineHeight: 25,
          marginTop: 18,
          color: '#444'
        }}>
          {place.description}
        </Text>

        <Text style={{
          fontSize: 21,
          color: '#087F8C',
          fontWeight: 'bold',
          marginVertical: 20
        }}>
          Chi phí tham khảo: {place.price}
        </Text>

        <TouchableOpacity
          onPress={() => toggleFavorite(place)}
          style={{
            backgroundColor: '#087F8C',
            padding: 15,
            borderRadius: 12,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            {isFavorite ? '❤️ BỎ YÊU THÍCH' : '🤍 THÊM VÀO YÊU THÍCH'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}