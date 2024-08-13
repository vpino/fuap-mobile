import React from 'react';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const Button2 = () => {
  return (
    <View style={styles.sizelargeStylecontainedS}>
      <Text style={styles.button}>Button</Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    color: Color.dominant,
    textAlign: "center",
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    overflow: "hidden",
  },
  sizelargeStylecontainedS: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.accent,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
  },
});

export default Button2;
