
import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FavoriteProvider } from './context/FavoriteContext';

import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TextIcon({ symbol }) {
  return <Text style={{ fontSize: 17 }}>{symbol}</Text>;
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#087F8C',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 62,
          paddingBottom: 7,
          paddingTop: 7
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          tabBarIcon: () => <TextIcon symbol="🏠" />
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Yêu thích',
          tabBarIcon: () => <TextIcon symbol="❤️" />
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Cá nhân',
          tabBarIcon: () => <TextIcon symbol="👤" />
        }}
      />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#087F8C' },
        headerTintColor: 'white',
        drawerActiveTintColor: '#087F8C',
        drawerLabelStyle: { fontWeight: 'bold' }
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          title: 'Travel Explorer',
          drawerLabel: 'Trang chủ'
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'Giới thiệu' }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Cài đặt' }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Liên hệ' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainDrawer"
            component={MainDrawer}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Chi tiết địa điểm' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
