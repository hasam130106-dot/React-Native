import React from 'react';
import { View, Text } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={{ flex: 1, padding: 22, backgroundColor: '#F0F7F6' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#087F8C' }}>
        Liên hệ với chúng tôi
      </Text>

      <View style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginTop: 20
      }}>
        <Text style={{ fontSize: 17, marginVertical: 8 }}>
          📧 Email: travel@example.com
        </Text>

        <Text style={{ fontSize: 17, marginVertical: 8 }}>
          📱 Điện thoại: 0900 123 456
        </Text>

        <Text style={{ fontSize: 17, marginVertical: 8 }}>
          📍 Địa chỉ: Việt Nam
        </Text>
      </View>
    </View>
  );
}