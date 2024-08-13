import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon3 = () => {
  return (
    <Image
      style={styles.iconTypearrowDown}
      resizeMode="cover"
      source={require("../assets/icon-typearrowdown.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypearrowDown: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon3;
