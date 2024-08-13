import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const DropdownsTuniTuni1 = () => {
  return (
    <View style={styles.dropdownstunituni}>
      <View style={styles.parentFlexBox}>
        <Text style={styles.email}>Email</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.textTypo} numberOfLines={1}>
            $
          </Text>
          <Text
            style={[styles.valorTotalDe, styles.textTypo]}
            numberOfLines={1}
          >
            Valor total de los activos
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignSelf: "stretch",
    height: 56,
  },
  textTypo: {
    overflow: "hidden",
    color: Color.base700LightTertiary,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  email: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
  },
  valorTotalDe: {
    flex: 1,
    opacity: 0.5,
    marginLeft: 10,
  },
  parent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
  },
  dropdownstunituni: {
    width: 380,
    marginTop: 16,
    height: 56,
  },
});

export default DropdownsTuniTuni1;
