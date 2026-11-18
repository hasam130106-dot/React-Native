
# BÀI TẬP – ScheduleApp

## 1. Giới thiệu ứng dụng

**Tên ứng dụng:** MY SCHEDULE  
**Công nghệ:** React Native và Expo.

MY SCHEDULE là ứng dụng quản lý lịch học dành cho sinh viên. Ứng dụng giúp theo dõi lịch học trong tuần, xem thông tin môn học, thời gian, phòng học và giảng viên theo từng ngày.

## 2. Cấu trúc thư mục

```text
Bt01/
│
├── App.js
│
├── components/
│   └── Header.js
│
└── README.md
```

## 3. Chức năng chi tiết từng file

### 3.1. File App.js

**Chức năng:** Là file chính của ứng dụng, chịu trách nhiệm xây dựng giao diện và quản lý lịch học.

Các chức năng chính:

- Import React Native và component Header.
- Sử dụng `useState` để quản lý ngày đang được chọn.
- Tạo danh sách 7 ngày trong tuần từ thứ 2 đến chủ nhật.
- Tạo dữ liệu lịch học gồm tên môn, thời gian, phòng học, giảng viên và màu sắc.
- Sử dụng `map()` để hiển thị các ngày trong tuần.
- Sử dụng `TouchableOpacity` để chọn ngày học.
- Sử dụng `filter()` để lọc lịch học theo ngày được chọn.
- Hiển thị số lượng môn học trong ngày.
- Hiển thị thông báo khi ngày được chọn không có lịch học.
- Sử dụng `StyleSheet` để thiết kế giao diện.

**Các thành phần giao diện:**

1. Header: Hiển thị tên ứng dụng và thông tin sinh viên.
2. Welcome: Hiển thị lời chào người dùng.
3. Lịch học trong tuần: Hiển thị 7 nút chọn ngày.
4. Danh sách môn học: Hiển thị thông tin lịch học.
5. Footer: Hiển thị tên ứng dụng và thông điệp.

### 3.2. File components/Header.js

**Chức năng:** Xây dựng phần đầu trang của ứng dụng.

Các chức năng chính:

- Hiển thị dòng chữ ỨNG DỤNG QUẢN LÝ HỌC TẬP.
- Hiển thị tên ứng dụng MY SCHEDULE.
- Hiển thị mô tả theo dõi lịch học mỗi ngày.
- Hiển thị ảnh đại diện dạng chữ cái A.
- Hiển thị tên sinh viên Nguyễn Văn A.
- Hiển thị vai trò Sinh viên.
- Sử dụng `View` và `Text` để tạo bố cục.
- Sử dụng `StyleSheet` để thiết kế màu sắc, kích thước và kiểu chữ.

**Thiết kế:** Header sử dụng màu xanh dương, chữ trắng, khung thông tin sinh viên màu trắng và các góc bo tròn.

## 4. Kết quả thực hiện

Sau khi chạy ứng dụng trên Expo, giao diện MY SCHEDULE hiển thị:

- Phần đầu trang có tên ứng dụng và thông tin sinh viên.
- Có lời chào và thông báo học tập.
- Hiển thị đầy đủ 7 ngày trong tuần.
- Khi nhấn chọn một ngày, ứng dụng tự động cập nhật danh sách môn học.
- Mỗi môn học hiển thị tên môn, giờ học, phòng học và giảng viên.
- Các môn học được phân biệt bằng màu sắc.
- Hiển thị số lượng môn học tương ứng với ngày được chọn.
- Nếu không có lịch học, ứng dụng hiển thị thông báo hôm nay được nghỉ.

## 5. Hình ảnh giao diện ứng dụng

### Giao diện chính

<img width="512" height="600" alt="image" src="https://github.com/user-attachments/assets/f57fa43c-ba36-4acc-9699-067de6a7e764" />


### Giao diện chọn ngày và xem lịch học

<img width="500" height="592" alt="image" src="https://github.com/user-attachments/assets/1f25819a-dc60-4b77-aca1-fa3b15eafe6f" />


### Giao diện ngày không có lịch học

<img width="501" height="631" alt="image" src="https://github.com/user-attachments/assets/7aa269fa-4839-4d47-8d91-fb0c0adc82c5" />


## 6. Link chạy ứng dụng Expo

LINK_EXPO: https://snack.expo.dev/@sam79vs/scheduleapp

## 7. Kết luận

Ứng dụng MY SCHEDULE đã hoàn thành các chức năng cơ bản của một ứng dụng quản lý lịch học. Giao diện đơn giản, dễ sử dụng, giúp sinh viên theo dõi lịch học và thông tin môn học theo từng ngày trong tuần.
