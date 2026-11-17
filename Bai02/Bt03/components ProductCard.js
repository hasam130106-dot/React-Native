
import React from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>{item.price}</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Xem sản phẩm
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 7,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4
  },
  image: {
    width: '100%',
    height: 130,
    backgroundColor: '#E8EDF4'
  },
  info: {
    padding: 11
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#142B4A'
  },
  description: {
    fontSize: 11,
    color: '#7A8493',
    marginTop: 6,
    height: 32
  },
  price: {
    color: '#E34B55',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8
  },
  button: {
    backgroundColor: '#142B4A',
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold'
  }
});
