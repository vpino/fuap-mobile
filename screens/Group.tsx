import React from 'react';
import { Image, StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -6,
    top: 0,
    width: 12,
    height: 12,
  },
  groupItem: {
    marginLeft: -5.2,
    top: 1,
    width: 10,
    height: 10,
  },
  ellipseParent: {
    flex: 1,
    width: "100%",
    height: 12,
  },
});

export default Group;
