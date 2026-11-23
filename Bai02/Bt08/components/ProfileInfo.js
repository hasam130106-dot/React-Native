import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 22,
      borderRadius: 18,
      alignItems: 'center',
      margin: 15
    }}>
      <Text style={{ fontSize: 65 }}>👤</Text>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 8 }}>
        Hà Văn Sâm
      </Text>

      <Text style={{ color: '#777', marginTop: 5 }}>
        Thành viên Travel Explorer
      </Text>

      <View style={{ alignSelf: 'stretch', marginTop: 20 }}>
        <Text style={{ marginVertical: 7 }}>📧 Email: nguyenvana@gmail.com</Text>
        <Text style={{ marginVertical: 7 }}>📱 Điện thoại: 0900 123 456</Text>
        <Text style={{ marginVertical: 7 }}>📍 Địa chỉ: Việt Nam</Text>
      </View>
    </View>
  );
}