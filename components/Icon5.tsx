import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon5 = () => {
  return (
    <Image
      style={styles.iconTypemail}
      resizeMode="cover"
      source={require("../assets/icon-typemail.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypemail: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon5;
