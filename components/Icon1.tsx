import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon1 = () => {
  return (
    <Image
      style={styles.iconTypearrow}
      resizeMode="cover"
      source={require("../assets/icon-typearrow.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypearrow: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon1;
