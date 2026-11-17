
import React from 'react';
import {
  View, Text, FlatList, StyleSheet, StatusBar
} from 'react-native';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: '1',
    name: 'iPhone 16',
    price: '22.990.000đ',
    description: 'Điện thoại Apple hiện đại.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'
  },
  {
    id: '2',
    name: 'MacBook Air',
    price: '25.990.000đ',
    description: 'Laptop mỏng nhẹ, tiện lợi.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
  },
  {
    id: '3',
    name: 'Tai nghe',
    price: '1.500.000đ',
    description: 'Âm thanh chất lượng cao.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
  },
  {
    id: '4',
    name: 'Đồng hồ thông minh',
    price: '3.200.000đ',
    description: 'Theo dõi sức khỏe.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
  },
  {
    id: '5',
    name: 'Máy ảnh',
    price: '12.500.000đ',
    description: 'Chụp ảnh sắc nét.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'
  },
  {
    id: '6',
    name: 'Loa Bluetooth JBL',
    price: '3.000.000đ',
    description: 'Âm thanh sống động.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#142B4A" />

      <View style={styles.header}>
        <Text style={styles.logo}>HVS STORE</Text>
        <Text style={styles.slogan}>TECHNOLOGY & LIFESTYLE</Text>

        <Text style={styles.title}>
          Chào mừng đến với HVS STORE!
        </Text>

        <Text style={styles.subtitle}>
          Khám phá những sản phẩm công nghệ mới nhất
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Sản phẩm nổi bật
          </Text>
          <Text style={styles.count}>6 sản phẩm</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ProductCard item={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F9'
  },
  header: {
    backgroundColor: '#142B4A',
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  logo: {
    color: '#65D6C4',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  slogan: {
    color: '#A9BED8',
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 5
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 25
  },
  subtitle: {
    color: '#D1DCE9',
    fontSize: 13,
    marginTop: 8
  },
  content: {
    flex: 1,
    paddingHorizontal: 9,
    paddingTop: 20
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#142B4A'
  },
  count: {
    color: '#718096',
    fontSize: 12
  },
  list: {
    paddingBottom: 20
  }
});
