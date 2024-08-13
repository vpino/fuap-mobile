import React, { useMemo } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

export type InputFieldBaseType = {
  icon?: ImageSourcePropType;
  jeraldinelocofyuiai?: string;
  showEmail?: boolean;
  showIcon?: boolean;
  showThisIsA?: boolean;

  /** Style props */
  inputFieldBasePosition?: string;
  inputFieldBaseWidth?: number | string;
  inputFieldBaseHeight?: number | string;
  inputFieldBaseTop?: number | string;
  inputFieldBaseRight?: number | string;
  inputFieldBaseBottom?: number | string;
  inputFieldBaseLeft?: number | string;
  inputFieldBaseAlignSelf?: string;
  inputFieldBaseMarginTop?: number | string;
  frameViewFlex?: number;
  frameViewBorderColor?: string;
  jeraldinelocofyuiaiColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputFieldBase = ({
  icon,
  jeraldinelocofyuiai,
  showEmail,
  showIcon,
  showThisIsA,
  inputFieldBasePosition,
  inputFieldBaseWidth,
  inputFieldBaseHeight,
  inputFieldBaseTop,
  inputFieldBaseRight,
  inputFieldBaseBottom,
  inputFieldBaseLeft,
  inputFieldBaseAlignSelf,
  inputFieldBaseMarginTop,
  frameViewFlex,
  frameViewBorderColor,
  jeraldinelocofyuiaiColor,
}: InputFieldBaseType) => {
  const inputFieldBaseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputFieldBasePosition),
      ...getStyleValue("width", inputFieldBaseWidth),
      ...getStyleValue("height", inputFieldBaseHeight),
      ...getStyleValue("top", inputFieldBaseTop),
      ...getStyleValue("right", inputFieldBaseRight),
      ...getStyleValue("bottom", inputFieldBaseBottom),
      ...getStyleValue("left", inputFieldBaseLeft),
      ...getStyleValue("alignSelf", inputFieldBaseAlignSelf),
      ...getStyleValue("marginTop", inputFieldBaseMarginTop),
    };
  }, [
    inputFieldBasePosition,
    inputFieldBaseWidth,
    inputFieldBaseHeight,
    inputFieldBaseTop,
    inputFieldBaseRight,
    inputFieldBaseBottom,
    inputFieldBaseLeft,
    inputFieldBaseAlignSelf,
    inputFieldBaseMarginTop,
  ]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("flex", frameViewFlex),
      ...getStyleValue("borderColor", frameViewBorderColor),
    };
  }, [frameViewFlex, frameViewBorderColor]);

  const jeraldinelocofyuiai1Style = useMemo(() => {
    return {
      ...getStyleValue("color", jeraldinelocofyuiaiColor),
    };
  }, [jeraldinelocofyuiaiColor]);

  return (
    <View style={[styles.typenormalStatedefault, inputFieldBaseStyle]}>
      {showEmail && <Text style={styles.email}>Email</Text>}
      <View
        style={[styles.iconParent, styles.thisIsASpaceBlock, frameView4Style]}
      >
        {showIcon && (
          <Image style={styles.icon} resizeMode="cover" source={icon} />
        )}
        <Text
          style={[
            styles.jeraldinelocofyuiai,
            styles.thisIsATypo,
            jeraldinelocofyuiai1Style,
          ]}
          numberOfLines={1}
        >
          {jeraldinelocofyuiai}
        </Text>
      </View>
      {showThisIsA && (
        <Text style={[styles.thisIsA, styles.thisIsATypo]}>
          This is a hint text for the user
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  thisIsASpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  thisIsATypo: {
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  email: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
  },
  icon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  jeraldinelocofyuiai: {
    flex: 1,
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    marginLeft: 10,
    overflow: "hidden",
  },
  iconParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.lightBorder,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
  },
  thisIsA: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    marginTop: 6,
    alignSelf: "stretch",
  },
  typenormalStatedefault: {
    width: 340,
  },
});

export default InputFieldBase;
