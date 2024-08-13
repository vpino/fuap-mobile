import React, { useMemo } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Button1Type = {
  button?: string;
  icon?: ImageSourcePropType;
  showIcon?: boolean;

  /** Style props */
  buttonPosition?: string;
  buttonBackgroundColor?: string;
  buttonPaddingVertical?: number | string;
  buttonMarginTop?: number | string;
  buttonPaddingHorizontal?: number | string;
  buttonMarginLeft?: number | string;
  buttonTop?: number | string;
  buttonLeft?: number | string;
  buttonWidth?: number | string;
  buttonOpacity?: number;
  buttonFontFamily?: string;
  buttonFontWeight?: string;
  buttonFontSize?: number;
  buttonColor?: string;
  iconWidth?: number | string;
  iconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  button,
  icon,
  showIcon,
  buttonPosition,
  buttonBackgroundColor,
  buttonPaddingVertical,
  buttonMarginTop,
  buttonPaddingHorizontal,
  buttonMarginLeft,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonOpacity,
  buttonFontFamily,
  buttonFontWeight,
  buttonFontSize,
  buttonColor,
  iconWidth,
  iconHeight,
}: Button1Type) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("paddingVertical", buttonPaddingVertical),
      ...getStyleValue("marginTop", buttonMarginTop),
      ...getStyleValue("paddingHorizontal", buttonPaddingHorizontal),
      ...getStyleValue("marginLeft", buttonMarginLeft),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("opacity", buttonOpacity),
    };
  }, [
    buttonPosition,
    buttonBackgroundColor,
    buttonPaddingVertical,
    buttonMarginTop,
    buttonPaddingHorizontal,
    buttonMarginLeft,
    buttonTop,
    buttonLeft,
    buttonWidth,
    buttonOpacity,
  ]);

  const button1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", buttonFontFamily),
      ...getStyleValue("fontWeight", buttonFontWeight),
      ...getStyleValue("fontSize", buttonFontSize),
      ...getStyleValue("color", buttonColor),
    };
  }, [buttonFontFamily, buttonFontWeight, buttonFontSize, buttonColor]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconWidth),
      ...getStyleValue("height", iconHeight),
    };
  }, [iconWidth, iconHeight]);

  return (
    <View style={[styles.sizesmallStylecontainedS, buttonStyle]}>
      <Text style={[styles.button, button1Style]}>{button}</Text>
      {showIcon && (
        <Image
          style={[styles.icon, iconStyle]}
          resizeMode="cover"
          source={icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.dominant,
    textAlign: "center",
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 6,
    overflow: "hidden",
  },
  sizesmallStylecontainedS: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.accent,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
  },
});

export default Button1;
