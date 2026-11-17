
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

// Import 3 components
import ProgressCard from './components/ProgressCard.js';
import ActionButton from './components/ActionButton.js';
import AnimatedMessage from './components/AnimatedMessage.js';

export default function App() {
  const [progress, setProgress] = useState(0);

  // Kiểm tra hoàn thành
  const completed = progress === 100;

  // Xử lý nút bắt đầu
  const handleStart = () => {
    if (completed) {
      setProgress(0);
    } else {
      setProgress(progress + 25);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>
        MY STUDY GOALS
      </Text>

      <Text style={styles.subtitle}>
        Chinh phục mục tiêu mỗi ngày 🌟
      </Text>

      {/* Component tiến độ */}
      <ProgressCard progress={progress} />

      {/* Component nút bắt đầu */}
      <ActionButton
        onPress={handleStart}
        completed={completed}
      />

      {/* Component thông báo có hiệu ứng */}
      <AnimatedMessage completed={completed} />

      <Text style={styles.footer}>
        Cố gắng mỗi ngày để thành công!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1769D2',
  },

  subtitle: {
    fontSize: 15,
    color: '#555',
    marginTop: 10,
    marginBottom: 30,
  },

  footer: {
    marginTop: 35,
    color: '#777',
    fontSize: 13,
  },
});
