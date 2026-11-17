# BÀI TẬP – SÂM TRAVEL

## 1. Giới thiệu ứng dụng

**Tên ứng dụng:** SÂM TRAVEL  
**Công nghệ:** React Native và Expo.

SÂM TRAVEL là ứng dụng đặt phòng khách sạn trên điện thoại, giúp người dùng tìm kiếm, xem danh sách phòng, xem chi tiết và thực hiện thao tác đặt phòng.

## 2. Cấu trúc thư mục

```text
SÂM TRAVEL/
│
├── App.js
│
├── components/
│   ├── AssetExample.js
│   ├── HomeScreen.js
│   ├── ListScreen.js
│   └── DetailScreen.js
│
├── assets/
│
├── images/
│   ├── home.png
│   ├── list.png
│   ├── detail.png
│   └── booking.png
│
└── README.md
```

## 3. Mô tả chức năng từng file

### 3.1. App.js
- Là file chính của ứng dụng.
- Kết nối các màn hình.
- Quản lý điều hướng giữa Trang chủ, Danh sách và Chi tiết.
- Chạy ứng dụng trên Expo.

### 3.2. HomeScreen.js – Trang chủ
- Hiển thị logo SÂM TRAVEL.
- Hiển thị lời chào và giới thiệu ứng dụng.
- Có khu vực tìm kiếm phòng.
- Hiển thị ngày nhận phòng, ngày trả phòng và số khách.
- Hiển thị hình ảnh phòng nghỉ dưỡng.
- Có nút Khám phá phòng để chuyển sang màn hình Danh sách.

### 3.3. ListScreen.js – Danh sách phòng
- Hiển thị danh sách các loại phòng.
- Sử dụng FlatList để hiển thị dữ liệu.
- Sử dụng TouchableOpacity để chọn phòng.
- Có nút Quay lại trang chủ để trở về HomeScreen.
- Khi chọn một phòng, chuyển sang màn hình DetailScreen.

### 3.4. DetailScreen.js – Chi tiết phòng
- Hiển thị tên và hình ảnh phòng.
- Hiển thị giá tiền và số lượng khách.
- Có nút Đặt phòng ngay để xác nhận đặt phòng.
- Hiển thị thông báo khi xác nhận đặt phòng.
- Có nút Quay lại để trở về màn hình Danh sách phòng.

### 3.5. AssetExample.js
- File mẫu được tạo sẵn trong project.
- Không sử dụng trong chức năng chính của ứng dụng.

## 4. Kết quả giao diện

### 4.1. Trang chủ
Hiển thị logo, lời chào, thông tin đặt phòng và hình ảnh nghỉ dưỡng.

<img width="464" height="689" alt="image" src="https://github.com/user-attachments/assets/c442497a-19b8-4145-88e0-b9c36c729d84" />


### 4.2. Danh sách phòng
Hiển thị các loại phòng để người dùng lựa chọn. Có nút Quay lại trang chủ.

<img width="307" height="681" alt="image" src="https://github.com/user-attachments/assets/0d6a930c-5a00-46db-86f7-d9c974472fe0" />


### 4.3. Chi tiết phòng
Hiển thị thông tin phòng, giá tiền và nút đặt phòng. Có nút Quay lại danh sách.

<img width="453" height="667" alt="image" src="https://github.com/user-attachments/assets/785ef48a-c98c-4154-a406-c870a260e99b" />


### 4.4.Cá Nhân


<img width="461" height="678" alt="image" src="https://github.com/user-attachments/assets/dafb4920-781c-4c52-b827-891afe8d7285" />


## 5. Quy trình sử dụng ứng dụng

1. Mở ứng dụng và vào Trang chủ.
2. Nhấn Khám phá phòng để xem Danh sách.
3. Chọn một phòng để xem Chi tiết.
4. Nhấn Đặt phòng ngay để xác nhận.
5. Nhấn Quay lại để trở về Danh sách.
6. Nhấn Quay lại trang chủ để trở về Trang chủ.

## 6. Link ứng dụng Expo

[**Expo Snack:** Dán link ứng dụng tại đây.](https://snack.expo.dev/@sam79vs/multiscreenapp)

## 7. Kết luận

Ứng dụng SÂM TRAVEL được xây dựng bằng React Native và Expo với giao diện đơn giản, dễ sử dụng. Ứng dụng hỗ trợ xem danh sách phòng, xem chi tiết, đặt phòng và quay lại giữa các màn hình.
