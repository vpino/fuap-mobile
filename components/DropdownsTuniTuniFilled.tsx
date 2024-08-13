import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

export type DropdownsTuniTuniFilledType = {
  filledUp?: string;
  icon?: ImageSourcePropType;

  /** Style props */
  propRight?: number | string;
  propLeft?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropdownsTuniTuniFilled = ({
  filledUp,
  icon,
  propRight,
  propLeft,
  propWidth,
}: DropdownsTuniTuniFilledType) => {
  const dropdownsTuniTuniFilledStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propRight, propLeft, propWidth]);

  return (
    <View
      style={[styles.dropdownstunituniFilled, dropdownsTuniTuniFilledStyle]}
    >
      <View style={styles.inputFieldBaseLayout}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <View style={[styles.filledUpParent, styles.inputFieldBaseLayout]}>
          <Text style={[styles.filledUp, styles.emailTypo]} numberOfLines={1}>
            {filledUp}
          </Text>
          <Image style={styles.icon} resizeMode="cover" source={icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  inputFieldBaseLayout: {
    height: 56,
    alignSelf: "stretch",
  },
  email: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  filledUp: {
    flex: 1,
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.gray1,
    overflow: "hidden",
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 10,
    overflow: "hidden",
  },
  filledUpParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.lightBorder,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
  },
  dropdownstunituniFilled: {
    position: "absolute",
    height: "100%",
    width: "47.65%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "52.35%",
  },
});

export default DropdownsTuniTuniFilled;
