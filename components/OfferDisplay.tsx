import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

export type OfferDisplayType = {
  prop?: string;
  prop1?: string;
  anos?: string;
  prop2?: string;
};

const OfferDisplay = ({ prop, prop1, anos, prop2 }: OfferDisplayType) => {
  return (
    <View style={styles.offerDisplay}>
      <View style={styles.offerDisplayInner}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-135.png")}
        />
      </View>
      <View style={styles.navigationMenuContentItemParent}>
        <View style={styles.navigationContentSpaceBlock}>
          <View>
            <Text style={styles.montoSolicitado}>Monto solicitado</Text>
            <Text style={[styles.text, styles.aprTypo]}>{prop}</Text>
          </View>
        </View>
        <View
          style={[
            styles.navigationMenuContentItem1,
            styles.navigationContentSpaceBlock,
          ]}
        >
          <View>
            <Text style={styles.montoSolicitado}>Pago Mensual</Text>
            <Text style={[styles.text, styles.aprTypo]}>{prop1}</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationMenuContentItemParent}>
        <View style={styles.navigationContentSpaceBlock}>
          <View>
            <Text style={styles.montoSolicitado}>Meses de Plazo</Text>
            <Text style={[styles.text, styles.aprTypo]}>{anos}</Text>
          </View>
        </View>
        <View
          style={[
            styles.navigationMenuContentItem1,
            styles.navigationContentSpaceBlock,
          ]}
        >
          <View>
            <Text style={styles.montoSolicitado}>Tasa % Anual</Text>
            <Text style={styles.aprTypo}>
              <Text style={styles.textTypo}>{prop2}</Text>
              <Text style={styles.apr1}>APR</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aprTypo: {
    color: Color.black,
    lineHeight: 36,
    letterSpacing: -0.1,
    textAlign: "left",
    fontSize: FontSize.subtleMedium_size,
  },
  navigationContentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    backgroundColor: Color.dominant,
    borderRadius: Border.br_7xs,
  },
  frameChild: {
    position: "absolute",
    marginLeft: -20,
    top: 11,
    left: "50%",
    height: 40,
    zIndex: 0,
    width: 40,
  },
  offerDisplayInner: {
    height: 135,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    width: 40,
    justifyContent: "center",
  },
  montoSolicitado: {
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.tertiaryGray400Light,
    textAlign: "left",
    fontSize: FontSize.subtleMedium_size,
  },
  text: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  navigationMenuContentItem1: {
    width: 126,
    marginTop: 8,
  },
  navigationMenuContentItemParent: {
    marginLeft: 8,
  },
  textTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  apr1: {
    fontWeight: "700",
    fontFamily: FontFamily.header,
  },
  offerDisplay: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    marginTop: 8,
    justifyContent: "center",
    backgroundColor: Color.dominant,
    borderRadius: Border.br_7xs,
  },
});

export default OfferDisplay;
