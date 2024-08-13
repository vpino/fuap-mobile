import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon4 = () => {
  return (
    <Image
      style={styles.iconTypechevronDown}
      resizeMode="cover"
      source={require("../assets/icon-typechevron--down.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypechevronDown: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon4;
