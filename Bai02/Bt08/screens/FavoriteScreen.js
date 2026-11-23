import React from 'react';
import { View, Text, FlatList } from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import { useFavorites } from '../context/FavoriteContext';

export default function FavoriteScreen({ navigation }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F7F6', paddingTop: 15 }}>
      <Text style={{
        fontSize: 23,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 10
      }}>
        ❤️ Địa điểm yêu thích
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FavoriteCard
            item={item}
            onPress={() => navigation.navigate('Detail', { place: item })}
            onRemove={() => toggleFavorite(item)}
          />
        )}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 80 }}>
            <Text style={{ fontSize: 55 }}>💚</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>
              Chưa có địa điểm yêu thích
            </Text>
            <Text style={{ color: '#777', marginTop: 5 }}>
              Hãy chọn trái tim ở địa điểm bạn thích nhé!
            </Text>
          </View>
        }
      />
    </View>
  );
}