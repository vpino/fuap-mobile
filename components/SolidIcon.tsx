import React from 'react';
import { Image, StyleSheet } from 'react-native';

const SolidIcon = () => {
  return (
    <Image
      style={styles.property1searchIcon}
      resizeMode="cover"
      source={require("../assets/property-1search.png")}
    />
  );
};

const styles = StyleSheet.create({
  property1searchIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
});

export default SolidIcon;
