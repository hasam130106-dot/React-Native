import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const categories = ['Tất cả', 'Biển', 'Thiên nhiên', 'Văn hóa', 'Khám phá'];

export default function CategoryList({ selected, onSelect }) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 }}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelect(category)}
          style={{
            backgroundColor: selected === category ? '#087F8C' : 'white',
            paddingHorizontal: 13,
            paddingVertical: 9,
            borderRadius: 20,
            margin: 4
          }}
        >
          <Text style={{
            color: selected === category ? 'white' : '#333',
            fontWeight: 'bold'
          }}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}