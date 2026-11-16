# BÀI TẬP 01 – MYAPP_V2

## 1. Giới thiệu ứng dụng

**Tên ứng dụng:** MyApp_V2  
**Tên giao diện:** SÂM TRAVEL  
**Công nghệ:** React Native và Expo.

SÂM TRAVEL là ứng dụng giới thiệu dịch vụ đặt phòng khách sạn. Ứng dụng cho phép người dùng xem các loại phòng, hình ảnh minh họa, giá phòng và tình trạng phòng.

Giao diện sử dụng màu xanh dương làm màu chủ đạo, kết hợp với các nút đặt phòng màu xanh lá, tạo cảm giác hiện đại và dễ sử dụng.

## 2. Link ứng dụng Expo

- **Tên bài nộp:** MyApp_V2
- **Link Expo:** https://snack.expo.dev/@sam79vs/7690a7

## 3. Các thành phần giao diện

### 3.1. Component Header

Header là phần đầu của ứng dụng, hiển thị tên thương hiệu SÂM TRAVEL và lời chào mừng người dùng.

Các nội dung chính:
- Hiển thị tên ứng dụng SÂM TRAVEL.
- Hiển thị lời chào khách hàng.
- Sử dụng nền xanh dương.
- Chữ màu trắng và căn giữa.

**Hình ảnh giao diện Header:**

<img width="929" height="98" alt="image" src="https://github.com/user-attachments/assets/99ff5a9f-b86e-43c2-a811-c105ef2925f2" />


### 3.2. Component Main

Main là thành phần chính của ứng dụng, hiển thị danh sách các loại phòng khách sạn.

Các nội dung chính:
- Phòng đơn.
- Phòng đôi.
- Phòng VIP.
- Phòng gia đình.
- Hình ảnh minh họa cho từng loại phòng.
- Giá tiền và tình trạng phòng.
- Nút ĐẶT PHÒNG NGAY.

**Hình ảnh phần đầu Main:**

<img width="922" height="417" alt="image" src="https://github.com/user-attachments/assets/96f1846f-be2e-405e-8b19-b74c9f5da1cb" />


**Hình ảnh phần dưới Main:**

<img width="928" height="330" alt="image" src="https://github.com/user-attachments/assets/77d0ebb1-77b5-4967-ae90-76dc88ad075d" />


### 3.3. Component Footer

Footer nằm ở cuối ứng dụng, hiển thị thông tin thương hiệu và liên hệ.

Các nội dung chính:
- Tên thương hiệu SÂM TRAVEL.
- Thông điệp Đặt phòng nhanh chóng - Giá cả hợp lý.
- Hotline: 0900 123 456.
- Bản quyền © 2026 SÂM TRAVEL.

**Hình ảnh giao diện Footer:**

<img width="928" height="120" alt="image" src="https://github.com/user-attachments/assets/041910f3-57c9-43d8-8b8c-5758faaa6c45" />


### 3.4. Giao diện tổng thể

Ứng dụng được bố trí thành ba thành phần chính Header, Main và Footer.

**Hình ảnh tổng thể ứng dụng:**

<img width="1425" height="504" alt="image" src="https://github.com/user-attachments/assets/b771d05d-dae1-443b-acbd-33ad712fbcaf" />
  <img width="1420" height="474" alt="image" src="https://github.com/user-attachments/assets/a2c28fe8-4f71-40ff-a9db-cbe8eda9f474" />


## 4. Cấu trúc mã nguồn

```text
MyApp_V2/
│
├── App.js
│
└── components/
    ├── Header.js
    ├── Main.js
    └── Footer.js
```

- **App.js:** Kết nối và hiển thị các component

<img width="384" height="153" alt="image" src="https://github.com/user-attachments/assets/6ab3abfd-1812-48a9-a52e-a4fcaa692cdc" />


- **Header.js:** Xây dựng phần đầu ứng dụng.
<img width="510" height="664" alt="image" src="https://github.com/user-attachments/assets/2bb8e6bc-e394-43ed-8560-ee479eeb7cbc" />


- **Main.js:** Hiển thị danh sách phòng khách sạn.

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function Main() {
  const rooms = [
    {
      name: 'PHÒNG ĐƠN',
      price: '800.000 VNĐ',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400'
    },
    {
      name: 'PHÒNG ĐÔI',
      price: '1.300.000 VNĐ',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400'
    },
    {
      name: 'PHÒNG VIP',
      price: '1.800.000 VNĐ',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400'
    },
    {
      name: 'PHÒNG GIA ĐÌNH',
      price: '2.500.000 VNĐ',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SÂM TRAVEL</Text>
      <Text style={styles.subtitle}>DANH SÁCH PHÒNG</Text>

      {rooms.map((room, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.info}>
            <Text style={styles.name}>{room.name}</Text>

            <Text style={styles.price}>{room.price}</Text>

            <Text style={styles.status}>✓ Còn phòng</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>
                ĐẶT PHÒNG NGAY
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: room.image }}
            style={styles.image}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F0F5FF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1769D2'
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center'
  },
  info: {
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    color: '#174A8B',
    fontSize: 15
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10
  },
  status: {
    color: 'green',
    marginTop: 8
  },
  button: {
    backgroundColor: 'green',
    padding: 9,
    borderRadius: 7,
    marginTop: 12,
    alignItems: 'center',
    marginRight: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  image: {
    width: 120,
    height: 110,
    borderRadius: 10
  }
});


- **Footer.js:** Hiển thị thông tin liên hệ.
- 
  <img width="600" height="685" alt="image" src="https://github.com/user-attachments/assets/b2c3feae-5e5a-43bb-887f-0d24f8403b06" />


## 5. Kết quả thực hiện

Sau khi hoàn thành bài tập, ứng dụng đã xây dựng được giao diện đặt phòng khách sạn cơ bản bằng React Native.

Qua bài thực hành, em đã hiểu cách:
- Tạo và sử dụng Component.
- Sử dụng View, Text, Image và StyleSheet.
- Chia giao diện thành Header, Main và Footer.
- Tùy chỉnh màu sắc, kích thước và bố cục.
- Sử dụng Expo để chạy và kiểm tra ứng dụng.

## 6. Kết luận

Bài tập giúp em củng cố kiến thức React Native, thực hành tổ chức các component và xây dựng giao diện ứng dụng di động SÂM TRAVEL.
