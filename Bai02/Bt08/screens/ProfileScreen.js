import React from 'react';
import { View, Text } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F7F6' }}>
      <Text style={{
        fontSize: 23,
        fontWeight: 'bold',
        margin: 18
      }}>
        Tài khoản của tôi
      </Text>

      <ProfileInfo />

      <Text style={{
        textAlign: 'center',
        color: '#087F8C',
        marginTop: 5
      }}>
        Cảm ơn bạn đã đồng hành cùng Travel Explorer!
      </Text>
    </View>
  );
}