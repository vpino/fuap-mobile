import React from 'react';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const Badge3 = () => {
  return (
    <View style={styles.closeIconfalseTextstring}>
      <Image
        style={styles.iconDot}
        resizeMode="cover"
        source={require("../assets/icon--dot9.png")}
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
    color: Color.confirm,
    textAlign: "center",
    marginLeft: 4,
  },
  closeIconfalseTextstring: {
    borderRadius: Border.br_base,
    backgroundColor: Color.confirm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Badge3;
