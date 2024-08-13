import React from 'react';
import { Image, StyleSheet } from 'react-native';

const IconDot = () => {
  return (
    <Image
      style={styles.iconDot}
      resizeMode="cover"
      source={require("../assets/icon--dot8.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconDot: {
    width: 6,
    height: 6,
  },
});

export default IconDot;
