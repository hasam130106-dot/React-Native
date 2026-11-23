import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DateSelector({ date, setDate }) {
  const dates = ['24/11/2026', '25/11/2026', '26/11/2026'];

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
        Ngày nhận phòng: {date}
      </Text>

      {dates.map((item) => (
        <Button
          key={item}
          title={item}
          onPress={() => setDate(item)}
        />
      ))}
    </View>
  );
}