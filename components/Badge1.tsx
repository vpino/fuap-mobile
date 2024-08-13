import React from 'react';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const Badge1 = () => {
  return (
    <View style={styles.closeIconfalseTextstring}>
      <Image
        style={styles.iconDot}
        resizeMode="cover"
        source={require("../assets/icon--dot7.png")}
      />
      <Text style={styles.text}>Label</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconDot: {
    width: 6,
    height: 6,
  },
  text: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.accent,
    textAlign: "center",
    marginLeft: 4,
  },
  closeIconfalseTextstring: {
    borderRadius: Border.br_base,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.accent,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Badge1;
