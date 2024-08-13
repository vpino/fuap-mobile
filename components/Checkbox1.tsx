import React from 'react';
import { Border } from "../GlobalStyles";
import { Image, StyleSheet } from 'react-native';

const Checkbox1 = () => {
  return (
    <Image
      style={styles.sizedefaultStatecheckedD}
      resizeMode="cover"
      source={require("../assets/sizedefault-statechecked-darkfalse1.png")}
    />
  );
};

const styles = StyleSheet.create({
  sizedefaultStatecheckedD: {
    borderRadius: Border.br_5xs,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Checkbox1;
