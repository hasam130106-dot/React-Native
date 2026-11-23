import React from 'react';
import { View, Text } from 'react-native';

export default function BookingSummary({ service, date, time, name }) {
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 10,
      marginVertical: 10
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
        Thông tin đặt phòng
      </Text>

      <Text>Căn hộ: {service.name}</Text>
      <Text>Khách hàng: {name || 'Chưa nhập tên'}</Text>
      <Text>Ngày: {date}</Text>
      <Text>Giờ: {time}</Text>
      <Text style={{ color: '#1769D2', fontWeight: 'bold' }}>
        Giá: {service.price}
      </Text>
    </View>
  );
}