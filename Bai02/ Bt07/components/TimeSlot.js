import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TimeSlot({ time, setTime }) {
  const times = ['08:00', '10:00', '13:00', '15:00', '18:00'];

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
        Chọn giờ nhận phòng:
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {times.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setTime(item)}
            style={{
              backgroundColor: time === item ? '#1769D2' : 'white',
              padding: 12,
              margin: 4,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#1769D2'
            }}
          >
            <Text style={{ color: time === item ? 'white' : '#1769D2' }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}