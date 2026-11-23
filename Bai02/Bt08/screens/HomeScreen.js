import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import TravelHeader from '../components/TravelHeader';
import DestinationCard from '../components/DestinationCard';
import CategoryList from '../components/CategoryList';
import { destinations } from '../data/places';
import { useFavorites } from '../context/FavoriteContext';

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState('Tất cả');
  const { favorites, toggleFavorite } = useFavorites();

  const filtered = category === 'Tất cả'
    ? destinations
    : destinations.filter(item => item.category === category);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F7F6' }}>
      <ScrollView>
        <TravelHeader />

        <View style={{ paddingHorizontal: 12, paddingTop: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Khám phá Việt Nam 🌿
          </Text>

          <Text style={{ color: '#777', marginTop: 5 }}>
            Chọn điểm đến cho hành trình tiếp theo của bạn
          </Text>

          <CategoryList selected={category} onSelect={setCategory} />

          <Text style={{
            fontSize: 19,
            fontWeight: 'bold',
            marginVertical: 10
          }}>
            Điểm đến nổi bật
          </Text>
        </View>

        <FlatList
          data={filtered}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DestinationCard
              item={item}
              favorite={favorites.some(f => f.id === item.id)}
              onPress={() => navigation.navigate('Detail', { place: item })}
              onFavorite={() => toggleFavorite(item)}
            />
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', padding: 20 }}>
              Không tìm thấy địa điểm.
            </Text>
          }
        />

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}