import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';

import DateSelector from '../components/DateSelector';
import TimeSlot from '../components/TimeSlot';
import BookingSummary from '../components/BookingSummary';

export default function BookingScreen({ navigation, route }) {
  const service = route.params.service;

  const [name, setName] = useState('');
  const [date, setDate] = useState('24/11/2026');
  const [time, setTime] = useState('08:00');

  function confirmBooking() {
    if (name.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập họ tên khách hàng');
      return;
    }

    navigation.navigate('Confirmation', {
      service,
      name: name.trim(),
      date,
      time
    });
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#EAF3FF', padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        ĐẶT LỊCH CĂN HỘ
      </Text>

      <Text style={{ marginTop: 15, fontWeight: 'bold' }}>
        Họ tên khách hàng:
      </Text>

      <TextInput
        placeholder="Nhập họ tên của bạn"
        value={name}
        onChangeText={setName}
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 8,
          marginTop: 5
        }}
      />

      <DateSelector date={date} setDate={setDate} />

      <TimeSlot time={time} setTime={setTime} />

      <BookingSummary
        service={service}
        date={date}
        time={time}
        name={name}
      />

      <Button title="XÁC NHẬN ĐẶT PHÒNG" onPress={confirmBooking} />

      <View style={{ height: 25 }} />
    </ScrollView>
  );
}