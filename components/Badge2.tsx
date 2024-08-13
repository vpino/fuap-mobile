import React, { useMemo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

export type Badge2Type = {
  iconDot?: ImageSourcePropType;
  text?: string;

  /** Style props */
  badgePosition?: string;
  badgeBackgroundColor?: string;
  badgeBorderStyle?: string;
  badgeBorderColor?: string;
  badgeBorderWidth?: number;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Badge2 = ({
  iconDot,
  text,
  badgePosition,
  badgeBackgroundColor,
  badgeBorderStyle,
  badgeBorderColor,
  badgeBorderWidth,
  textColor,
}: Badge2Type) => {
  const badgeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", badgePosition),
      ...getStyleValue("backgroundColor", badgeBackgroundColor),
      ...getStyleValue("borderStyle", badgeBorderStyle),
      ...getStyleValue("borderColor", badgeBorderColor),
      ...getStyleValue("borderWidth", badgeBorderWidth),
    };
  }, [
    badgePosition,
    badgeBackgroundColor,
    badgeBorderStyle,
    badgeBorderColor,
    badgeBorderWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.closeIconfalseTextstring, badgeStyle]}>
      <Image style={styles.iconDot} resizeMode="cover" source={iconDot} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
    color: Color.error,
    textAlign: "center",
    marginLeft: 4,
  },
  closeIconfalseTextstring: {
    borderRadius: Border.br_base,
    backgroundColor: Color.error,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Badge2;
