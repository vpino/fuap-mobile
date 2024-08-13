import React, { useMemo } from "react";
import { Border, Color } from "../GlobalStyles";
import { StyleSheet, View } from "react-native";

export type HomeIndicatorType = {
  /** Style props */
  homeIndicatorPosition?: string;
  homeIndicatorHeight?: number | string;
  homeIndicatorTop?: number | string;
  homeIndicatorRight?: number | string;
  homeIndicatorBottom?: number | string;
  homeIndicatorLeft?: number | string;
  homeIndicatorMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeIndicator = ({
  homeIndicatorPosition,
  homeIndicatorHeight,
  homeIndicatorTop,
  homeIndicatorRight,
  homeIndicatorBottom,
  homeIndicatorLeft,
  homeIndicatorMarginLeft,
}: HomeIndicatorType) => {
  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("position", homeIndicatorPosition),
      ...getStyleValue("height", homeIndicatorHeight),
      ...getStyleValue("top", homeIndicatorTop),
      ...getStyleValue("right", homeIndicatorRight),
      ...getStyleValue("bottom", homeIndicatorBottom),
      ...getStyleValue("left", homeIndicatorLeft),
    };
  }, [
    homeIndicatorPosition,
    homeIndicatorHeight,
    homeIndicatorTop,
    homeIndicatorRight,
    homeIndicatorBottom,
    homeIndicatorLeft,
  ]);

  const homeIndicator1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", homeIndicatorMarginLeft),
    };
  }, [homeIndicatorMarginLeft]);

  return (
    <View style={[styles.stylelight, homeIndicatorStyle]}>
      <View style={[styles.homeIndicator, homeIndicator1Style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
  },
  stylelight: {
    width: 375,
    height: 34,
  },
});

export default HomeIndicator;
