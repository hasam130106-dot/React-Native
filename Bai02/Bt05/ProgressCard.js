
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📚 Mục tiêu hôm nay</Text>
      <Text style={styles.goal}>Học React Native 30 phút</Text>

      <View style={styles.bg}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.percent}>
        {progress}% hoàn thành
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 18,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1769D2',
    marginBottom: 15,
  },
  goal: {
    fontSize: 16,
  },
  bg: {
    height: 12,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },
  fill: {
    height: 12,
    backgroundColor: '#27AE60',
  },
  percent: {
    textAlign: 'center',
    marginTop: 10,
    color: '#27AE60',
  },
});
