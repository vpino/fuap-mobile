import React, { useMemo } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "./HomeIndicator";
import { Padding, Border, Color } from "../GlobalStyles";

export type Anchor1Type = {
  solidIcon?: ImageSourcePropType;
  solidIcon1?: ImageSourcePropType;
  solidIcon2?: ImageSourcePropType;
  solidIcon3?: ImageSourcePropType;

  /** Style props */
  framePressableBackgroundColor?: string;
  framePressableBorderRadius?: number;
  framePressableBackgroundColor1?: string;
  framePressableBorderRadius1?: number | string;
  framePressableBackgroundColor2?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Anchor1 = ({
  solidIcon,
  solidIcon1,
  solidIcon2,
  solidIcon3,
  framePressableBackgroundColor,
  framePressableBorderRadius,
  framePressableBackgroundColor1,
  framePressableBorderRadius1,
  framePressableBackgroundColor2,
}: Anchor1Type) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", framePressableBackgroundColor),
    };
  }, [framePressableBackgroundColor]);

  const framePressable1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", framePressableBorderRadius),
      ...getStyleValue("backgroundColor", framePressableBackgroundColor1),
    };
  }, [framePressableBorderRadius, framePressableBackgroundColor1]);

  const framePressable2Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", framePressableBorderRadius1),
      ...getStyleValue("backgroundColor", framePressableBackgroundColor2),
    };
  }, [framePressableBorderRadius1, framePressableBackgroundColor2]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menusubmission}>
      <View style={styles.tabsWithIconsWrapper}>
        <View style={styles.tabsWithIcons}>
          <Pressable
            style={[
              styles.solidIconWrapper,
              styles.solidIconLayout,
              framePressableStyle,
            ]}
            onPress={() => navigation.navigate("HomePageFilled")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={solidIcon}
            />
          </Pressable>
          <View style={[styles.solidIconContainer, styles.solidIconLayout]}>
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={solidIcon1}
            />
          </View>
          <Pressable
            style={[styles.solidIconLayout, framePressable1Style]}
            onPress={() => navigation.navigate("ApplicationHome")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={solidIcon2}
            />
          </Pressable>
          <Pressable
            style={[
              styles.framePressable,
              styles.solidIconLayout,
              framePressable2Style,
            ]}
            onPress={() => navigation.navigate("Submissions1")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={solidIcon3}
            />
          </Pressable>
        </View>
      </View>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorHeight="35.79%"
        homeIndicatorTop="64.21%"
        homeIndicatorRight="0%"
        homeIndicatorBottom="0%"
        homeIndicatorLeft="0%"
        homeIndicatorMarginLeft={-67}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  solidIconLayout: {
    minWidth: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
    alignItems: "center",
  },
  solidIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  solidIconWrapper: {
    borderRadius: Border.br_9xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
  },
  solidIconContainer: {
    display: "none",
    maxWidth: 68,
  },
  framePressable: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_9xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
  },
  tabsWithIcons: {
    height: "90%",
    width: "100%",
    top: "10%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_200,
    flexDirection: "row",
    padding: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  tabsWithIconsWrapper: {
    top: 0,
    left: 109,
    width: 212,
    height: 60,
    position: "absolute",
  },
  menusubmission: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 95,
  },
});

export default Anchor1;
