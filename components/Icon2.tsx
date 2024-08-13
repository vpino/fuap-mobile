import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon2 = () => {
  return (
    <Image
      style={styles.iconTypechevronLeft}
      resizeMode="cover"
      source={require("../assets/icon-typechevronleft.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconTypechevronLeft: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default Icon2;
