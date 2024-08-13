import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

export type DropdownsTuniTuniType = {
  jeraldinelocofyuiai?: string;

  /** Style props */
  dropdownsTuniTuniPosition?: string;
  dropdownsTuniTuniHeight?: number | string;
  dropdownsTuniTuniTop?: number | string;
  dropdownsTuniTuniRight?: number | string;
  dropdownsTuniTuniBottom?: number | string;
  dropdownsTuniTuniLeft?: number | string;
  dropdownsTuniTuniWidth?: number | string;
  dropdownsTuniTuniMarginTop?: number | string;
  dropdownsTuniTuniAlignSelf?: string;
  frameViewBorderColor?: string;
  jeraldinelocofyuiaiColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropdownsTuniTuni = ({
  jeraldinelocofyuiai,
  dropdownsTuniTuniPosition,
  dropdownsTuniTuniHeight,
  dropdownsTuniTuniTop,
  dropdownsTuniTuniRight,
  dropdownsTuniTuniBottom,
  dropdownsTuniTuniLeft,
  dropdownsTuniTuniWidth,
  dropdownsTuniTuniMarginTop,
  dropdownsTuniTuniAlignSelf,
  frameViewBorderColor,
  jeraldinelocofyuiaiColor,
}: DropdownsTuniTuniType) => {
  const dropdownsTuniTuniStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dropdownsTuniTuniPosition),
      ...getStyleValue("height", dropdownsTuniTuniHeight),
      ...getStyleValue("top", dropdownsTuniTuniTop),
      ...getStyleValue("right", dropdownsTuniTuniRight),
      ...getStyleValue("bottom", dropdownsTuniTuniBottom),
      ...getStyleValue("left", dropdownsTuniTuniLeft),
      ...getStyleValue("width", dropdownsTuniTuniWidth),
      ...getStyleValue("marginTop", dropdownsTuniTuniMarginTop),
      ...getStyleValue("alignSelf", dropdownsTuniTuniAlignSelf),
    };
  }, [
    dropdownsTuniTuniPosition,
    dropdownsTuniTuniHeight,
    dropdownsTuniTuniTop,
    dropdownsTuniTuniRight,
    dropdownsTuniTuniBottom,
    dropdownsTuniTuniLeft,
    dropdownsTuniTuniWidth,
    dropdownsTuniTuniMarginTop,
    dropdownsTuniTuniAlignSelf,
  ]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", frameViewBorderColor),
    };
  }, [frameViewBorderColor]);

  const jeraldinelocofyuiaiStyle = useMemo(() => {
    return {
      ...getStyleValue("color", jeraldinelocofyuiaiColor),
    };
  }, [jeraldinelocofyuiaiColor]);

  return (
    <View style={[styles.dropdownstunituni, dropdownsTuniTuniStyle]}>
      <View style={styles.inputFieldBase}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <View style={[styles.jeraldinelocofyuiaiParent, frameView3Style]}>
          <Text
            style={[
              styles.jeraldinelocofyuiai,
              styles.emailTypo,
              jeraldinelocofyuiaiStyle,
            ]}
            numberOfLines={1}
          >
            {jeraldinelocofyuiai}
          </Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
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
  email: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    alignSelf: "stretch",
  },
  jeraldinelocofyuiai: {
    flex: 1,
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.gray,
    overflow: "hidden",
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 10,
    overflow: "hidden",
  },
  jeraldinelocofyuiaiParent: {
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
    alignSelf: "stretch",
    height: 56,
  },
  inputFieldBase: {
    alignSelf: "stretch",
    height: 56,
  },
  dropdownstunituni: {
    width: 340,
    height: 56,
  },
});

export default DropdownsTuniTuni;
