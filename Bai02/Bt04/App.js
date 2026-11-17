
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const rooms = [
  { id: '1', name: 'Phòng đơn', price: '800.000 VNĐ', people: '1 người' },
  { id: '2', name: 'Phòng đôi', price: '1.300.000 VNĐ', people: '2 người' },
  { id: '3', name: 'Phòng VIP', price: '1.800.000 VNĐ', people: '2-4 người' },
];

// TRANG CHỦ
function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>🏨 SÂM TRAVEL</Text>
      <Text>Chào mừng bạn đến với dịch vụ đặt phòng!</Text>
      <Text style={styles.info}>
        Đặt phòng nhanh chóng - Giá cả hợp lý
      </Text>
    </View>
  );
}

// DANH SÁCH PHÒNG
function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách phòng</Text>

      <FlatList
        data={rooms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { room: item })}
          >
            <Text style={styles.name}>🏨 {item.name}</Text>
            <Text>{item.people}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.link}>Xem chi tiết →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// CÁ NHÂN
function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>👤 Cá nhân</Text>
      <Text>Khách hàng: Sâm</Text>
      <Text style={styles.info}>Chào mừng đến với SÂM TRAVEL!</Text>
    </View>
  );
}

// CHI TIẾT PHÒNG
function DetailScreen({ route, navigation }) {
  const room = route.params.room;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Quay lại</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Chi tiết phòng</Text>
      <Text style={styles.name}>{room.name}</Text>
      <Text>Sức chứa: {room.people}</Text>
      <Text style={styles.price}>{room.price}</Text>

      <TouchableOpacity
        style={styles.book}
        onPress={() => alert('Bạn đã chọn ' + room.name)}
      >
        <Text style={styles.bookText}>ĐẶT PHÒNG NGAY</Text>
      </TouchableOpacity>
    </View>
  );
}

// 3 NÚT ĐIỀU HƯỚNG
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1769D2',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },
        tabBarIcon: () => {
          let icon = route.name === 'Trang chủ' ? '🏠' :
            route.name === 'Danh sách' ? '🛏️' : '👤';

          return <Text style={{ fontSize: 19 }}>{icon}</Text>;
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Danh sách" component={ListScreen} />
      <Tab.Screen name="Cá nhân" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// APP CHÍNH - STACK NAVIGATION
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    padding: 20,
    paddingTop: 55,
  },
  center: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1769D2',
    marginBottom: 20,
  },
  info: {
    marginTop: 15,
    color: '#555',
  },
  item: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    color: '#1769D2',
    fontSize: 17,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  link: {
    color: '#1769D2',
  },
  back: {
    backgroundColor: '#1769D2',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
  },
  book: {
    backgroundColor: '#20A464',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  bookText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
