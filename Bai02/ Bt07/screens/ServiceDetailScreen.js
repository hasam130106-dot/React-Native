import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function ServiceDetailScreen({ navigation, route }) {
  const service = route.params.service;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#EAF3FF' }}>
      <Image
        source={{ uri: service.image }}
        style={{ width: '100%', height: 230, borderRadius: 12 }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 15 }}>
        {service.name}
      </Text>

      <Text style={{ marginTop: 10 }}>
        Căn hộ đầy đủ tiện nghi, sạch sẽ và thoải mái.
      </Text>

      <Text style={{ marginTop: 10 }}>
        Thời lượng: {service.duration}
      </Text>

      <Text style={{
        fontSize: 21,
        color: '#1769D2',
        fontWeight: 'bold',
        marginVertical: 15
      }}>
        Giá: {service.price}
      </Text>

      <Button
        title="ĐẶT PHÒNG NGAY"
        onPress={() => navigation.navigate('Booking', { service })}
      />
    </View>
  );
}