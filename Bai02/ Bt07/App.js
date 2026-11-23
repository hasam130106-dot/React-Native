import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import BookingScreen from './screens/BookingScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1769D2' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HOMEBOOK' }} />
        <Stack.Screen name="Detail" component={ServiceDetailScreen} options={{ title: 'Chi tiết căn hộ' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Đặt phòng' }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Xác nhận' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}