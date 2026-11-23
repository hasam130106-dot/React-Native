import React from 'react';
import { View, Text } from 'react-native';

export default function TravelHeader() {
  return (
    <View style={{
      backgroundColor: '#087F8C',
      padding: 22,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    }}>
      <Text style={{ color: '#B9F3E4', fontSize: 13 }}>
        CHÀO MỪNG BẠN ĐẾN VỚI
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 5
      }}>
        ĐI ĐÂU ĐÓ?
      </Text>

      <Text style={{ color: 'white', marginTop: 7 }}>
        Mỗi chuyến đi là một câu chuyện đẹp.
      </Text>
    </View>
  );
}