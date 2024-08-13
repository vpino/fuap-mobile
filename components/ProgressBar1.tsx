import React from 'react';
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ProgressBar1 = () => {
  return (
    <View style={styles.progressBar}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderRadius: Border.br_61xl,
    top: 0,
    height: 16,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.lightBorder,
    width: 380,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.gray1,
    width: 88,
  },
  rectangleParent: {
    top: 2,
    height: 16,
    left: 0,
    position: "absolute",
    width: 380,
  },
  progressBar: {
    alignSelf: "stretch",
    height: 20,
    overflow: "hidden",
  },
});

export default ProgressBar1;
