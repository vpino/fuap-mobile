import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type HomeWelcomeType = {
  bienvenidoCustomerName?: string;
  puedesAplicarParaCualquie?: string;
  showPuedesAplicarPara?: boolean;

  /** Style props */
  homeWelcomePosition?: string;
  homeWelcomeAlignSelf?: string;
  homeWelcomeTop?: number | string;
  homeWelcomeLeft?: number | string;
  homeWelcomeWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeWelcome = ({
  bienvenidoCustomerName,
  puedesAplicarParaCualquie,
  showPuedesAplicarPara,
  homeWelcomePosition,
  homeWelcomeAlignSelf,
  homeWelcomeTop,
  homeWelcomeLeft,
  homeWelcomeWidth,
}: HomeWelcomeType) => {
  const homeWelcomeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", homeWelcomePosition),
      ...getStyleValue("alignSelf", homeWelcomeAlignSelf),
      ...getStyleValue("top", homeWelcomeTop),
      ...getStyleValue("left", homeWelcomeLeft),
      ...getStyleValue("width", homeWelcomeWidth),
    };
  }, [
    homeWelcomePosition,
    homeWelcomeAlignSelf,
    homeWelcomeTop,
    homeWelcomeLeft,
    homeWelcomeWidth,
  ]);

  return (
    <View style={[styles.homeWelcome, homeWelcomeStyle]}>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.bienvenidoCustomerName}>
          {bienvenidoCustomerName}
        </Text>
        {showPuedesAplicarPara && (
          <Text style={styles.puedesAplicarPara}>
            {puedesAplicarParaCualquie}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bienvenidoCustomerName: {
    fontSize: FontSize.header_size,
    lineHeight: 52,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    textAlign: "left",
    alignSelf: "stretch",
  },
  puedesAplicarPara: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    width: 380,
    marginTop: 4,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
  },
  homeWelcome: {
    backgroundColor: Color.dominant,
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default HomeWelcome;
