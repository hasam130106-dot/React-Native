import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [notification, setNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#F0F7F6' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Cài đặt ứng dụng
      </Text>

      <View style={{
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text>🔔 Thông báo</Text>
        <Switch value={notification} onValueChange={setNotification} />
      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text>🌙 Chế độ tối</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <Text style={{ color: '#777', marginTop: 15 }}>
        Các lựa chọn được mô phỏng trong bài thực hành.
      </Text>
    </View>
  );
}