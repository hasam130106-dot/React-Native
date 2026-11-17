
# BÀI TẬP 05 – ANIMATEAPP

## 1. Giới thiệu ứng dụng

**Tên ứng dụng:** AnimateApp  
**Công nghệ:** React Native và Expo.

AnimateApp là ứng dụng theo dõi mục tiêu học tập hằng ngày. Ứng dụng giúp người dùng theo dõi tiến độ học tập, bắt đầu thực hiện mục tiêu và nhận thông báo khi hoàn thành.

## 2. Cấu trúc thư mục

```text
Bt05/
│
├── App.js
│
├── components/
│   ├── ProgressCard.js
│   ├── ActionButton.js
│   └── AnimatedMessage.js
│
└── README.md
```

## 3. Chức năng chi tiết từng file

### 3.1. App.js – Màn hình chính

- Sử dụng `useState` để quản lý tiến độ học tập.
- Import và kết nối 3 component.
- Tạo tiêu đề MY STUDY GOALS.
- Xử lý nút bắt đầu học.
- Mỗi lần nhấn nút, tiến độ tăng 25%.
- Khi đạt 100%, hiển thị trạng thái hoàn thành.
- Khi nhấn học lại, tiến độ trở về 0%.

### 3.2. ProgressCard.js – Thẻ tiến độ

- Hiển thị mục tiêu học React Native 30 phút.
- Hiển thị thanh tiến độ học tập.
- Hiển thị phần trăm hoàn thành.
- Nhận dữ liệu `progress` từ App.js thông qua props.
- Thanh tiến độ thay đổi theo phần trăm hoàn thành.

### 3.3. ActionButton.js – Nút hành động

- Tạo nút BẮT ĐẦU HỌC.
- Sử dụng `TouchableOpacity` để xử lý sự kiện nhấn.
- Nhận `onPress` và `completed` từ App.js.
- Khi hoàn thành, nút chuyển thành HỌC LẠI.

### 3.4. AnimatedMessage.js – Thông báo hoàn thành

- Hiển thị thông báo CHÚC MỪNG khi hoàn thành mục tiêu.
- Sử dụng `Animated.Value` để tạo hiệu ứng.
- Sử dụng `Animated.spring()` tạo hiệu ứng phóng to.
- Sử dụng `useEffect` để điều khiển hiệu ứng khi trạng thái hoàn thành thay đổi.
- Thông báo xuất hiện khi tiến độ đạt 100%.

## 4. Kết quả thực hiện

### Giao diện ban đầu

- Hiển thị tên ứng dụng.
- Hiển thị mục tiêu học tập.
- Tiến độ bắt đầu từ 0%.
- Có nút BẮT ĐẦU HỌC.

<img width="320" height="680" alt="image" src="https://github.com/user-attachments/assets/6e24e2de-f7fb-473d-9d35-a5ff10a0dd16" />


### Giao diện khi bắt đầu học

- Nhấn nút bắt đầu học.
- Tiến độ tăng thêm 25% sau mỗi lần nhấn.
- Thanh tiến độ thay đổi theo phần trăm.

<img width="319" height="679" alt="image" src="https://github.com/user-attachments/assets/9dcac5ff-0870-4eb1-a303-ee522668103b" />


### Giao diện khi hoàn thành

- Tiến độ đạt 100%.
- Xuất hiện thông báo chúc mừng.
- Thông báo có hiệu ứng phóng to.
- Nút chuyển thành HỌC LẠI.

<img width="321" height="676" alt="image" src="https://github.com/user-attachments/assets/b8ac2ee0-346a-47d0-a71c-06105995785b" />


## 5. Link ứng dụng Expo

**Tên ứng dụng:** AnimateApp

[**Link Expo:** DÁN LINK EXPO CỦA BẠN VÀO ĐÂY.](https://snack.expo.dev/@sam79vs/-animateapp)

## 6. Kết luận

Ứng dụng AnimateApp đã xây dựng được chức năng theo dõi mục tiêu học tập, hiển thị tiến độ và thông báo hoàn thành.

Chương trình được chia thành 3 component riêng biệt gồm ProgressCard, ActionButton và AnimatedMessage. Đồng thời sử dụng Animated để tạo hiệu ứng chuyển động khi hoàn thành mục tiêu.

Ứng dụng đáp ứng các yêu cầu của bài thực hành React Native.
