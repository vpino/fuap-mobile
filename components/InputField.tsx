import React from 'react';
import { Text, StyleSheet, Image, View } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const InputField = () => {
  return (
    <View style={styles.inputField}>
      <View style={styles.inputFieldBase}>
        <Text style={[styles.phoneNumber, styles.thisIsATypo]}>
          Phone Number
        </Text>
        <View style={[styles.frameParent, styles.thisIsASpaceBlock]}>
          <View style={[styles.caParent, styles.parentFlexBox]}>
            <Text style={styles.caTypo}>RD</Text>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon6.png")}
            />
          </View>
          <Text style={[styles.text, styles.caTypo]} numberOfLines={1}>
            +1 809 555 5555
          </Text>
        </View>
        <Text style={[styles.thisIsA, styles.thisIsASpaceBlock]}>
          This is a hint text for the user
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thisIsATypo: {
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  thisIsASpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  caTypo: {
    color: Color.gray1,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  phoneNumber: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    alignSelf: "stretch",
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  caParent: {
    borderColor: Color.lightBorder,
    borderRightWidth: 1,
    paddingRight: Padding.p_3xs,
  },
  text: {
    marginLeft: 10,
    overflow: "hidden",
    flex: 1,
  },
  frameParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    flex: 1,
  },
  thisIsA: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.gray,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  inputFieldBase: {
    flex: 1,
    alignSelf: "stretch",
  },
  inputField: {
    width: 380,
    height: 56,
    marginTop: 16,
  },
});

export default InputField;
