import React, { useMemo } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Button3Type = {
  button?: string;
  icon?: ImageSourcePropType;

  /** Style props */
  buttonPosition?: string;
  buttonBorderStyle?: string;
  buttonBorderColor?: string;
  buttonBorderWidth?: number | string;
  buttonBackgroundColor?: string;
  buttonMarginTop?: number | string;
  buttonFlex?: number;
  buttonMarginLeft?: number | string;
  buttonColor?: string;
  iconMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button3 = ({
  button,
  icon,
  buttonPosition,
  buttonBorderStyle,
  buttonBorderColor,
  buttonBorderWidth,
  buttonBackgroundColor,
  buttonMarginTop,
  buttonFlex,
  buttonMarginLeft,
  buttonColor,
  iconMarginLeft,
}: Button3Type) => {
  const button2Style = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("borderStyle", buttonBorderStyle),
      ...getStyleValue("borderColor", buttonBorderColor),
      ...getStyleValue("borderWidth", buttonBorderWidth),
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("marginTop", buttonMarginTop),
      ...getStyleValue("flex", buttonFlex),
      ...getStyleValue("marginLeft", buttonMarginLeft),
    };
  }, [
    buttonPosition,
    buttonBorderStyle,
    buttonBorderColor,
    buttonBorderWidth,
    buttonBackgroundColor,
    buttonMarginTop,
    buttonFlex,
    buttonMarginLeft,
  ]);

  const button3Style = useMemo(() => {
    return {
      ...getStyleValue("color", buttonColor),
    };
  }, [buttonColor]);

  const icon1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", iconMarginLeft),
    };
  }, [iconMarginLeft]);

  return (
    <View style={[styles.sizelargeStylestrokeShap, button2Style]}>
      <Text style={[styles.button, button3Style]}>{button}</Text>
      <Image
        style={[styles.icon, icon1Style]}
        resizeMode="cover"
        source={icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    color: Color.accent,
    textAlign: "center",
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    overflow: "hidden",
  },
  sizelargeStylestrokeShap: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.accent,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
  },
});

export default Button3;
