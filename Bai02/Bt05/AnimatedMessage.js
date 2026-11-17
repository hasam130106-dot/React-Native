
import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

export default function AnimatedMessage({ completed }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (completed) {
      scale.setValue(0);
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }).start();
    } else {
      scale.setValue(0);
    }
  }, [completed, scale]);

  if (!completed) return null;

  return (
    <Animated.View
      style={[styles.message, { transform: [{ scale }] }]}
    >
      <Text style={styles.title}>🎉 CHÚC MỪNG!</Text>
      <Text style={styles.text}>
        Bạn đã hoàn thành mục tiêu hôm nay!
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#D5F5E3',
    padding: 22,
    borderRadius: 16,
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#219653',
    marginBottom: 8,
  },
  text: {
    color: '#276749',
    textAlign: 'center',
  },
});
