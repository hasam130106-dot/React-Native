
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import Header from './components/Header';

const days = [
  { id: 'T2', name: 'Thứ 2' },
  { id: 'T3', name: 'Thứ 3' },
  { id: 'T4', name: 'Thứ 4' },
  { id: 'T5', name: 'Thứ 5' },
  { id: 'T6', name: 'Thứ 6' },
  { id: 'T7', name: 'Thứ 7' },
  { id: 'CN', name: 'Chủ nhật' },
];

const schedules = [
  {
    day: 'T2', subject: 'Lập trình React Native',
    time: '07:00 - 09:30', room: 'Phòng A101',
    teacher: 'Nguyễn Văn Bình', color: '#4F80F7',
  },
  {
    day: 'T2', subject: 'Cơ sở dữ liệu',
    time: '13:00 - 15:30', room: 'Phòng B203',
    teacher: 'Trần Thị Lan', color: '#13B89A',
  },
  {
    day: 'T3', subject: 'Thiết kế giao diện',
    time: '07:00 - 09:30', room: 'Phòng C102',
    teacher: 'Lê Minh Tuấn', color: '#A16BE8',
  },
  {
    day: 'T4', subject: 'Lập trình JavaScript',
    time: '09:45 - 11:15', room: 'Phòng A202',
    teacher: 'Phạm Hoàng Nam', color: '#F29B38',
  },
  {
    day: 'T5', subject: 'Phát triển ứng dụng Web',
    time: '13:00 - 15:30', room: 'Phòng B105',
    teacher: 'Nguyễn Thị Hoa', color: '#E66B91',
  },
  {
    day: 'T6', subject: 'Kiểm thử phần mềm',
    time: '07:00 - 09:30', room: 'Phòng C201',
    teacher: 'Đỗ Văn Hùng', color: '#13B89A',
  },
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState('T2');

  const todaySchedules = schedules.filter(
    item => item.day === selectedDay
  );

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Header />

        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>Xin chào! 👋</Text>
          <Text style={styles.welcomeText}>
            Chúc bạn có một ngày học tập hiệu quả.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📅 Lịch học trong tuần</Text>
          <Text style={styles.sectionSub}>
            Chọn ngày để xem lịch học của bạn
          </Text>

          <View style={styles.days}>
            {days.map(day => (
              <TouchableOpacity
                key={day.id}
                style={[
                  styles.dayButton,
                  selectedDay === day.id && styles.activeDay,
                ]}
                onPress={() => setSelectedDay(day.id)}
              >
                <Text style={[
                  styles.dayText,
                  selectedDay === day.id && styles.activeDayText,
                ]}>
                  {day.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.listHeader}>
            <View>
              <Text style={styles.sectionTitle}>📚 Danh sách môn học</Text>
              <Text style={styles.sectionSub}>
                Lịch học {days.find(d => d.id === selectedDay)?.name}
              </Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.countText}>
                {todaySchedules.length} môn
              </Text>
            </View>
          </View>

          {todaySchedules.length > 0 ? (
            <View style={styles.grid}>
              {todaySchedules.map((item, index) => (
                <View key={index} style={styles.card}>
                  <View style={[
                    styles.colorBar,
                    { backgroundColor: item.color },
                  ]} />

                  <View style={styles.cardContent}>
                    <Text style={styles.subject}>{item.subject}</Text>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoIcon}>🕒</Text>
                      <Text style={styles.info}>{item.time}</Text>
                    </View>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoIcon}>📍</Text>
                      <Text style={styles.info}>{item.room}</Text>
                    </View>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoIcon}>👨‍🏫</Text>
                      <Text style={styles.info}>{item.teacher}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.empty}>
              <Text style={styles.emptyIcon}>🎉</Text>
              <Text style={styles.emptyTitle}>Hôm nay được nghỉ!</Text>
              <Text style={styles.emptyText}>
                Không có lịch học trong ngày này.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.footer}>
          MY SCHEDULE · HỌC TẬP HIỆU QUẢ MỖI NGÀY
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F3F6FC',
  },
  container: {
    width: '92%',
    maxWidth: 1200,
    alignSelf: 'center',
    paddingVertical: 25,
  },
  welcome: {
    marginTop: 28,
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
  },
  welcomeText: {
    color: '#718096',
    marginTop: 7,
    fontSize: 14,
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 18,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#E8EDF5',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#172554',
  },
  sectionSub: {
    color: '#8994A8',
    fontSize: 13,
    marginTop: 6,
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 22,
  },
  dayButton: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#F1F4FA',
  },
  activeDay: {
    backgroundColor: '#2457D6',
  },
  dayText: {
    color: '#536179',
    fontWeight: '600',
    fontSize: 13,
  },
  activeDayText: {
    color: '#FFFFFF',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  count: {
    backgroundColor: '#E9F0FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  countText: {
    color: '#2457D6',
    fontWeight: 'bold',
    fontSize: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EDF5',
    borderRadius: 14,
    overflow: 'hidden',
    width: '48%',
    minWidth: 260,
    flexGrow: 1,
  },
  colorBar: {
    width: 6,
  },
  cardContent: {
    padding: 18,
    flex: 1,
  },
  subject: {
    color: '#172554',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  infoIcon: {
    width: 27,
    fontSize: 14,
  },
  info: {
    color: '#64748B',
    fontSize: 13,
  },
  empty: {
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#F7F9FE',
    borderRadius: 15,
  },
  emptyIcon: {
    fontSize: 40,
  },
  emptyTitle: {
    color: '#172554',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 12,
  },
  emptyText: {
    color: '#8994A8',
    marginTop: 7,
  },
  footer: {
    textAlign: 'center',
    color: '#9AA5B5',
    fontSize: 11,
    marginVertical: 15,
    letterSpacing: 1,
  },
});
