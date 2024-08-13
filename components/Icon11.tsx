import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon11 = () => {
  return (
    <Image
      style={styles.iconTypechevronRight}
      resizeMode="cover"
      source={require("../assets/icon-typechevronright.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypechevronRight: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon11;
