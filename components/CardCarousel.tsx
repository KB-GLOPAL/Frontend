import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const cardData = [
  { id: '1', image: require('../assets/card1.png') },
  { id: '2', image: require('../assets/card2.png') },
  { id: '3', image: require('../assets/card1.png') },
];

export default function CardCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width * 0.8}
        height={200}
        autoPlay={false}
        data={cardData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});