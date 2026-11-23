import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: '1',
    name: 'Căn hộ Studio',
    duration: '1 ngày',
    price: '500.000đ',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600'
  },
  {
    id: '2',
    name: 'Căn hộ cao cấp',
    duration: '1 ngày',
    price: '800.000đ',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600'
  },
  {
    id: '3',
    name: 'Căn hộ 2 phòng ngủ',
    duration: '1 ngày',
    price: '1.200.000đ',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600'
  },
  {
    id: '4',
    name: 'Căn hộ view biển',
    duration: '1 ngày',
    price: '1.500.000đ',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600'
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAF3FF' }}>
      <View style={{ backgroundColor: '#1769D2', padding: 22 }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
          HOMEBOOK
        </Text>
        <Text style={{ color: 'white', marginTop: 5 }}>
          Đặt căn hộ nghỉ dưỡng dễ dàng
        </Text>
      </View>

      <Text style={{ fontSize: 21, fontWeight: 'bold', margin: 15 }}>
        Danh sách căn hộ
      </Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard
            item={item}
            onPress={() => navigation.navigate('Detail', { service: item })}
          />
        )}
      />
    </View>
  );
}