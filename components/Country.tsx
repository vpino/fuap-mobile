import React from 'react';
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Country = () => {
  return (
    <View style={styles.country}>
      <Text style={styles.text}>ARG</Text>
      <Image
        style={styles.flagsIcon}
        resizeMode="cover"
        source={require("../assets/flags.png")}
      />
      <Image
        style={styles.chevronDownIcon}
        resizeMode="cover"
        source={require("../assets/chevrondown.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontFamily: FontFamily.helvetica,
    color: Color.black,
    textAlign: "left",
  },
  flagsIcon: {
    width: 24,
    height: 24,
    marginLeft: 4,
  },
  chevronDownIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
    marginLeft: 4,
  },
  country: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Country;
