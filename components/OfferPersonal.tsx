import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type OfferPersonalType = {
  /** Style props */
  propMarginTop?: number | string;
  propPosition?: string;
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OfferPersonal = ({
  propMarginTop,
  propPosition,
  propTop,
  propLeft,
}: OfferPersonalType) => {
  const offerPersonalStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propMarginTop, propPosition, propTop, propLeft]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.offerPersonal, offerPersonalStyle]}>
      <Text style={styles.puedesVerificarA}>
        Puedes verificar a continuación que su información sea correcta, lo que
        determina si está aprobado o no.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.button1}>Ajustar mi información personal</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon14.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  puedesVerificarA: {
    alignSelf: "stretch",
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    textAlign: "left",
  },
  button1: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.gray1,
    textAlign: "center",
  },
  icon: {
    width: 18,
    height: 18,
    display: "none",
    marginLeft: 6,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorLavender,
    width: 380,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
    marginTop: 16,
  },
  offerPersonal: {
    marginTop: 16,
  },
});

export default OfferPersonal;
