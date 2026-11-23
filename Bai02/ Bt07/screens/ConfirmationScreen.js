import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ConfirmationScreen({ navigation, route }) {
  const { service, name, date, time } = route.params;

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#EAF3FF',
      padding: 25,
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1769D2',
        textAlign: 'center'
      }}>
        ĐẶT PHÒNG THÀNH CÔNG!
      </Text>

      <View style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        marginVertical: 25
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Thông tin khách hàng
        </Text>

        <Text style={{ marginTop: 10 }}>Họ tên: {name}</Text>
        <Text>Căn hộ: {service.name}</Text>
        <Text>Ngày nhận phòng: {date}</Text>
        <Text>Giờ nhận phòng: {time}</Text>
        <Text style={{ color: '#1769D2', fontWeight: 'bold', marginTop: 8 }}>
          Giá: {service.price}
        </Text>
      </View>

      <Button
        title="QUAY VỀ TRANG CHỦ"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}