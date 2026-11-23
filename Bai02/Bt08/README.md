# 🌴 KHÁM PHÁ NINH HÒA

## 1. Giới thiệu đề tài

**Khám Phá Ninh Hòa** là ứng dụng du lịch được xây dựng bằng React Native và Expo. Ứng dụng giúp người dùng tìm hiểu các địa điểm du lịch nổi bật tại Ninh Hòa, Khánh Hòa.

Ứng dụng hỗ trợ xem thông tin địa điểm, xem chi tiết, lưu địa điểm yêu thích và quản lý thông tin cá nhân.

- **Tên ứng dụng:** Khám Phá Ninh Hòa
- **Công nghệ:** React Native, Expo
- **Ngôn ngữ:** JavaScript
- **Điều hướng:** Tab Navigation, Drawer Navigation, Stack Navigation

## 2. Link ứng dụng Expo

👉 **Link Expo Snack:** https://snack.expo.dev/@sam79vs/travellingapp

## 3. Cấu trúc thư mục dự án

```text
NinhHoaTravel/
│
├── App.js
│
├── data/
│   └── places.js
│
├── context/
│   └── FavoriteContext.js
│
├── components/
│   ├── TravelHeader.js
│   ├── DestinationCard.js
│   ├── CategoryList.js
│   ├── FavoriteCard.js
│   └── ProfileInfo.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── FavoriteScreen.js
│   ├── ProfileScreen.js
│   ├── DetailScreen.js
│   ├── AboutScreen.js
│   ├── SettingsScreen.js
│   └── ContactScreen.js
│
└── README.md
```

## 4. Chức năng từng tập tin

### 4.1. App.js
- Là tập tin chính khởi chạy ứng dụng.
- Cấu hình NavigationContainer.
- Sử dụng Stack Navigation để chuyển đến màn hình chi tiết.
- Sử dụng Tab Navigation để chuyển giữa Trang chủ, Yêu thích và Cá nhân.
- Sử dụng Drawer Navigation để mở Giới thiệu, Cài đặt và Liên hệ.
- Kết nối FavoriteProvider để quản lý danh sách yêu thích.

### 4.2. Thư mục data

**places.js**
- Lưu danh sách các địa điểm du lịch.
- Mỗi địa điểm có tên, hình ảnh, vị trí, đánh giá, giá tham khảo và mô tả.

### 4.3. Thư mục context

**FavoriteContext.js**
- Quản lý danh sách địa điểm yêu thích.
- Thêm hoặc xóa địa điểm khỏi danh sách yêu thích.
- Chia sẻ dữ liệu yêu thích giữa các màn hình.

### 4.4. Thư mục components

| Tập tin | Chức năng |
|---|---|
| TravelHeader.js | Hiển thị tiêu đề và phần giới thiệu ứng dụng |
| DestinationCard.js | Hiển thị thẻ địa điểm du lịch |
| CategoryList.js | Hiển thị danh mục địa điểm |
| FavoriteCard.js | Hiển thị địa điểm đã yêu thích |
| ProfileInfo.js | Hiển thị thông tin cá nhân |

### 4.5. Thư mục screens

| Tập tin | Chức năng |
|---|---|
| HomeScreen.js | Màn hình trang chủ, danh sách địa điểm |
| FavoriteScreen.js | Hiển thị danh sách yêu thích |
| ProfileScreen.js | Hiển thị thông tin cá nhân |
| DetailScreen.js | Hiển thị thông tin chi tiết địa điểm |
| AboutScreen.js | Giới thiệu ứng dụng |
| SettingsScreen.js | Màn hình cài đặt |
| ContactScreen.js | Thông tin liên hệ |

## 5. Các chức năng chính

1. Hiển thị danh sách địa điểm du lịch tại Ninh Hòa.
2. Hiển thị hình ảnh và thông tin từng địa điểm.
3. Phân loại địa điểm theo danh mục.
4. Nhấn vào địa điểm để xem thông tin chi tiết.
5. Thêm và xóa địa điểm yêu thích.
6. Hiển thị thông tin cá nhân.
7. Chuyển màn hình bằng Tab Navigation.
8. Mở menu bằng Drawer Navigation.
9. Chuyển đến màn hình chi tiết bằng Stack Navigation.

## 6. Hình ảnh kết quả giao diện

### Hình 1: Màn hình trang chủ

<img width="318" height="673" alt="image" src="https://github.com/user-attachments/assets/a5afecb7-dc0b-4adc-83b9-78184a2e0764" />


### Hình 2: Danh sách địa điểm du lịch

<img width="298" height="567" alt="image" src="https://github.com/user-attachments/assets/72895ea9-b675-4c0f-b807-c88e88bb0d0a" />


### Hình 3: Màn hình chi tiết địa điểm

<img width="317" height="591" alt="image" src="https://github.com/user-attachments/assets/13c24bcb-9e81-408d-bd00-082712cc6894" />


### Hình 4: Màn hình yêu thích

<img width="321" height="675" alt="image" src="https://github.com/user-attachments/assets/c576885a-2a29-4069-bc48-4c99e24e505a" />


### Hình 5: Màn hình cá nhân

<img width="319" height="456" alt="image" src="https://github.com/user-attachments/assets/c073007f-6b73-47a5-bddb-93f21082f11f" />


### Hình 6: Menu điều hướng

<img width="319" height="63" alt="image" src="https://github.com/user-attachments/assets/a8399621-8977-4424-bb0a-661c34d024ad" />


## 7. Kết quả đạt được

Sau khi hoàn thành, ứng dụng có thể:
- Hiển thị các địa điểm du lịch nổi bật tại Ninh Hòa.
- Xem thông tin chi tiết của từng địa điểm.
- Quản lý danh sách địa điểm yêu thích.
- Chuyển đổi giữa các màn hình.
- Hiển thị giao diện đơn giản, dễ sử dụng.

## 8. Kết luận

Qua bài thực hành, em đã tìm hiểu và vận dụng React Native để xây dựng ứng dụng du lịch nhiều màn hình. Đồng thời, em đã thực hành sử dụng FlatList, Flexbox, Component và các phương thức điều hướng Tab, Drawer, Stack Navigation.
