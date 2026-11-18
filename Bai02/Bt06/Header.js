
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.small}>ỨNG DỤNG QUẢN LÝ HỌC TẬP</Text>
        <Text style={styles.title}>MY SCHEDULE</Text>
        <Text style={styles.subtitle}>
          Theo dõi lịch học của bạn mỗi ngày
        </Text>
      </View>

      <View style={styles.profile}>
        <Text style={styles.avatar}>A</Text>
        <View>
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.role}>Sinh viên</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2457D6',
    padding: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  small: {
    color: '#D5E3FF',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    color: '#E1EAFF',
    fontSize: 14,
    marginTop: 6,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: 15,
  },
  avatar: {
    backgroundColor: '#E3ECFF',
    color: '#2457D6',
    fontSize: 20,
    fontWeight: 'bold',
    width: 42,
    height: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 12,
  },
  name: {
    color: '#172554',
    fontWeight: 'bold',
    fontSize: 14,
  },
  role: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 3,
  },
});
