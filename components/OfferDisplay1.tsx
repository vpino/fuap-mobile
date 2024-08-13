import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type OfferDisplay1Type = {
  precioDeLaCasa?: string;
  prop?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OfferDisplay1 = ({
  precioDeLaCasa,
  prop,
  propMarginTop,
}: OfferDisplay1Type) => {
  const offerDisplayStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View
      style={[
        styles.offerDisplay,
        styles.offerDisplayFlexBox,
        offerDisplayStyle,
      ]}
    >
      <View style={[styles.precioDeLaCasaParent, styles.offerDisplayFlexBox]}>
        <Text style={[styles.precioDeLa, styles.textTypo]}>
          {precioDeLaCasa}
        </Text>
        <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerDisplayFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.subtleMedium_size,
  },
  groupPosition: {
    borderRadius: 11,
    top: 0,
    height: 9,
    left: 0,
    position: "absolute",
  },
  precioDeLa: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.gray,
  },
  text: {
    letterSpacing: -0.1,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.black,
  },
  precioDeLaCasaParent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupChild: {
    backgroundColor: Color.lightBorder,
    width: 348,
    borderRadius: 11,
  },
  groupItem: {
    backgroundColor: Color.accent,
    width: 141,
  },
  rectangleParent: {
    top: 9,
    height: 9,
    left: 0,
    position: "absolute",
    width: 348,
  },
  groupInner: {
    left: 129,
    width: 24,
    top: 0,
    position: "absolute",
    height: 24,
  },
  groupParent: {
    marginTop: 8,
    height: 24,
    width: 348,
  },
  offerDisplay: {
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default OfferDisplay1;
