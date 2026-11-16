# BÀI THỰC HÀNH – LEARNINGAPP

## 1. Tổng quan ứng dụng

LearningApp là ứng dụng học tập được xây dựng bằng React Native và Expo. Ứng dụng giúp sinh viên theo dõi khóa học, tìm kiếm môn học và xem thông tin học tập.

- **Tên ứng dụng:** LearningApp
- **Nền tảng:** React Native
- **Công cụ:** Expo
- **Ngôn ngữ:** JavaScript

## 2. Các chức năng chính

- Hiển thị lời chào và thông tin sinh viên.
- Tìm kiếm môn học theo tên.
- Lọc danh sách môn học.
- Hiển thị thống kê khóa học.
- Xem thông tin các môn học.
- Hiển thị thanh menu điều hướng.

## 3. Cấu trúc và nhiệm vụ các thành phần

| Thành phần | Nhiệm vụ |
|---|---|
| App.js | Kết nối và hiển thị các thành phần chính. |
| Header | Hiển thị thông tin và lời chào. |
| SearchBar | Nhập từ khóa tìm kiếm. |
| Filter | Lọc các môn học. |
| StatCard | Thống kê số lượng khóa học. |
| CourseCard | Trình bày thông tin môn học. |
| BottomMenu | Hỗ trợ điều hướng giao diện. |

## 4. Hình ảnh kết quả thực hiện

### Ảnh 1: Giao diện chính

<img width="1103" height="419" alt="image" src="https://github.com/user-attachments/assets/c81c93c5-f282-4372-9322-7c8a5ffcc28b" />


<img width="1105" height="418" alt="image" src="https://github.com/user-attachments/assets/5624a7bc-a622-4e98-b0dd-efc1cda133e9" />

### Ảnh 3: Danh sách khóa học


<img width="1101" height="317" alt="image" src="https://github.com/user-attachments/assets/8394a573-8d1e-40ab-bf35-5a1109eda411" />

## 5. Công nghệ và công cụ

- React Native: Xây dựng giao diện ứng dụng.
- Expo: Chạy thử và kiểm tra ứng dụng.
- JavaScript: Xử lý các chức năng.
- GitHub: Lưu trữ và quản lý mã nguồn.

## 6. Kết quả đạt được

Sau khi hoàn thành bài thực hành, em đã biết cách chia giao diện thành các Component, xây dựng chức năng tìm kiếm, lọc và hiển thị dữ liệu bằng React Native.

Ứng dụng có giao diện rõ ràng, dễ sử dụng và đáp ứng các yêu cầu thực hành.

## code app.js

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tất cả');

  const courses = [
    { name: 'React Native', status: 'Đang học' },
    { name: 'JavaScript', status: 'Hoàn thành' },
    { name: 'Cơ sở dữ liệu', status: 'Đang học' },
  ];

  const result = courses.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'Tất cả' || item.status === filter)
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F5FA', paddingTop: 40 }}>
      <ScrollView>
        <Header />

        <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
          <TextInput
            placeholder="Tìm kiếm môn học..."
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1, backgroundColor: 'white', padding: 12, borderRadius: 10 }}
          />
          <Ionicons name="alarm-outline" size={28} color="blue" style={{ marginLeft: 15 }} />
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>Thống kê học tập</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <StatCard title="Khóa học" number="05" />
          <StatCard title="Hoàn thành" number="03" />
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>Môn học của tôi</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
          {['Tất cả', 'Đang học', 'Hoàn thành'].map(item => (
            <Text
              key={item}
              onPress={() => setFilter(item)}
              style={{ color: filter === item ? 'blue' : 'black' }}
            >
              {item}
            </Text>
          ))}
        </View>

        {result.map((item, index) => (
          <CourseCard key={index} name={item.name} />
        ))}

        {result.length === 0 && <Text style={{ textAlign: 'center' }}>Không tìm thấy môn học!</Text>}
      </ScrollView>

      <BottomMenu />
    </View>
  );
}
## StatCard.js
<img width="488" height="531" alt="image" src="https://github.com/user-attachments/assets/1a57e826-ea5f-48c8-bea4-2b790454a1bd" />



## Header.js



<img width="988" height="455" alt="image" src="https://github.com/user-attachments/assets/acc37a70-a834-4313-aece-fba021e79c55" />
<img width="971" height="323" alt="image" src="https://github.com/user-attachments/assets/ce0279fa-77e6-4935-9f81-ab54654b0ce0" />





## CourseCard.js

<img width="469" height="593" alt="image" src="https://github.com/user-attachments/assets/9537352b-c439-45c2-83ea-e7621f5a2df9" />

## BottomMenu.js

<img width="488" height="443" alt="image" src="https://github.com/user-attachments/assets/e92588c0-611f-444a-b3d2-80ce39705250" />





