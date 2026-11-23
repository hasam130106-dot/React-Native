import React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 22, backgroundColor: '#F0F7F6' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#087F8C' }}>
        Về Travel Explorer
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 27, marginTop: 15 }}>
        Travel Explorer là ứng dụng khám phá du lịch Việt Nam.
        Ứng dụng giúp người dùng tìm hiểu các địa điểm nổi bật,
        xem thông tin chuyến đi và lưu lại những nơi yêu thích.
      </Text>

      <Text style={{ fontSize: 16, marginTop: 20 }}>
        🌏 Khám phá những vùng đất mới.
      </Text>
      <Text style={{ fontSize: 16, marginTop: 12 }}>
        📸 Lưu giữ những hành trình đáng nhớ.
      </Text>
      <Text style={{ fontSize: 16, marginTop: 12 }}>
        💚 Lan tỏa tình yêu du lịch Việt Nam.
      </Text>
    </View>
  );
}