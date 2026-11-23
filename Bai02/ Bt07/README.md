# BÀI THỰC HÀNH: ỨNG DỤNG ĐẶT CĂN HỘ HOMEBOOK

## 1. Giới thiệu đề tài

**Tên ứng dụng:** HOMEBOOK – Ứng dụng đặt căn hộ nghỉ dưỡng.

**Công nghệ sử dụng:**
- React Native
- Expo Snack
- JavaScript
- React Navigation

**Mục tiêu:**

Xây dựng ứng dụng đặt căn hộ với giao diện đơn giản, dễ sử dụng. Người dùng có thể xem danh sách căn hộ, xem thông tin chi tiết, chọn ngày giờ nhận phòng và xác nhận đặt phòng.

## 2. Link chạy ứng dụng React Native

Link Expo:   https://snack.expo.dev/@sam79vs/bookingapp




## 3. Cấu trúc thư mục

```text
ApartmentBooking/
│
├── App.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── ServiceDetailScreen.js
│   ├── BookingScreen.js
│   └── ConfirmationScreen.js
│
├── components/
│   ├── ServiceCard.js
│   ├── DateSelector.js
│   ├── TimeSlot.js
│   └── BookingSummary.js
│
└── README.md
```

## 4. Mô tả chức năng từng tập tin

### 4.1. App.js

- Là tập tin chính của ứng dụng.
- Sử dụng NavigationContainer để quản lý điều hướng.
- Sử dụng createNativeStackNavigator để tạo điều hướng giữa các màn hình.
- Khai báo 4 màn hình: Home, Detail, Booking và Confirmation.

### 4.2. HomeScreen.js

- Hiển thị tên ứng dụng HOMEBOOK.
- Hiển thị lời giới thiệu đặt căn hộ nghỉ dưỡng.
- Hiển thị danh sách 4 căn hộ.
- Sử dụng FlatList để hiển thị danh sách.
- Khi nhấn vào nút XEM CHI TIẾT, ứng dụng chuyển sang màn hình chi tiết căn hộ.

### 4.3. ServiceDetailScreen.js

- Hiển thị hình ảnh căn hộ.
- Hiển thị tên căn hộ.
- Hiển thị mô tả, thời lượng và giá thuê.
- Có nút ĐẶT PHÒNG NGAY để chuyển sang màn hình đặt phòng.
- Sử dụng route.params để nhận dữ liệu căn hộ từ màn hình trước.

### 4.4. BookingScreen.js

- Cho phép người dùng nhập họ tên khách hàng.
- Cho phép chọn ngày nhận phòng.
- Cho phép chọn giờ nhận phòng.
- Hiển thị thông tin đặt phòng.
- Sử dụng useState để quản lý dữ liệu.
- Kiểm tra họ tên trước khi xác nhận đặt phòng.

### 4.5. ConfirmationScreen.js

- Hiển thị thông báo đặt phòng thành công.
- Hiển thị thông tin khách hàng.
- Hiển thị tên căn hộ, ngày giờ nhận phòng và giá tiền.
- Có nút QUAY VỀ TRANG CHỦ.

### 4.6. ServiceCard.js

- Là component hiển thị thông tin từng căn hộ.
- Nhận dữ liệu thông qua props.
- Hiển thị hình ảnh, tên căn hộ, thời lượng và giá.
- Có nút XEM CHI TIẾT.

### 4.7. DateSelector.js

- Hiển thị các ngày nhận phòng.
- Cho phép chọn ngày 24/11/2026, 25/11/2026 hoặc 26/11/2026.
- Sử dụng props date và setDate để cập nhật ngày.

### 4.8. TimeSlot.js

- Hiển thị các khung giờ nhận phòng.
- Cho phép chọn giờ 08:00, 10:00, 13:00, 15:00 hoặc 18:00.
- Làm nổi bật khung giờ đang được chọn.

### 4.9. BookingSummary.js

- Hiển thị thông tin đặt phòng.
- Bao gồm tên khách hàng, căn hộ, ngày giờ và giá tiền.
- Cập nhật thông tin khi người dùng thay đổi lựa chọn.

## 5. Các thư viện sử dụng

```bash
@react-navigation/native
@react-navigation/native-stack
react-native-screens
react-native-safe-area-context
```

Các thư viện trên được thêm trong mục Dependencies của Expo Snack.

## 6. Kết quả giao diện ứng dụng

### Hình 1: Giao diện trang chủ

Hiển thị tên ứng dụng HOMEBOOK và danh sách các căn hộ.

<img width="476" height="668" alt="image" src="https://github.com/user-attachments/assets/8d53ea6a-23ad-4ed7-b140-79bb1acd06d5" />


### Hình 2: Giao diện chi tiết căn hộ

Hiển thị hình ảnh, tên căn hộ, mô tả, thời lượng và giá thuê.

<img width="475" height="388" alt="image" src="https://github.com/user-attachments/assets/15c44eca-af21-4775-b43f-dcabaee1a756" />


### Hình 3: Giao diện đặt phòng

Người dùng nhập họ tên, chọn ngày nhận phòng và chọn giờ nhận phòng.

<img width="473" height="486" alt="image" src="https://github.com/user-attachments/assets/c93d48be-92c5-4bba-84e5-4a004b0b4928" />


### Hình 4: Giao diện xác nhận đặt phòng

Hiển thị thông báo đặt phòng thành công và thông tin đặt phòng của khách hàng.

<img width="469" height="680" alt="image" src="https://github.com/user-attachments/assets/7741a691-11ea-445f-84bb-b8964529c46f" />


## 7. Kết quả thực hiện

Sau khi hoàn thành, ứng dụng HOMEBOOK có các chức năng:

1. Hiển thị danh sách căn hộ nghỉ dưỡng.
2. Xem thông tin chi tiết từng căn hộ.
3. Chuyển màn hình bằng React Navigation.
4. Nhập thông tin khách hàng.
5. Chọn ngày và giờ nhận phòng.
6. Hiển thị thông tin đặt phòng.
7. Xác nhận đặt phòng thành công.
8. Quay về trang chủ sau khi hoàn tất.

**Kết luận:**

Ứng dụng HOMEBOOK đã thực hiện các chức năng cơ bản của một ứng dụng đặt căn hộ bằng React Native. Bài thực hành giúp tìm hiểu cách xây dựng component, truyền dữ liệu bằng props, quản lý trạng thái bằng useState và điều hướng giữa nhiều màn hình bằng React Navigation.



