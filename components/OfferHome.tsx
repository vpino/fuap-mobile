import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import OfferDisplay from "./OfferDisplay";
import Buttons from "./Buttons";
import { FontSize, Padding, FontFamily, Color, Border } from "../GlobalStyles";

const OfferHome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.offerHome}>
      <Text style={[styles.ustedCalificPara, styles.ofertaATypo]}>
        Usted calificó para estas ofertas de préstamos:
      </Text>
      <View
        style={[styles.navigationMenuItemParent, styles.ofertaAWrapperFlexBox]}
      >
        <View style={[styles.navigationMenuItem, styles.navigationItemFlexBox]}>
          <View style={styles.navigationMenuItemInner}>
            <View style={[styles.ofertaAWrapper, styles.ofertaAWrapperFlexBox]}>
              <Text style={[styles.ofertaA, styles.ofertaATypo]}>Oferta A</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.navigationMenuItem1, styles.navigationItemFlexBox]}
        >
          <View style={styles.navigationMenuItemChild}>
            <View style={[styles.ofertaAWrapper, styles.ofertaAWrapperFlexBox]}>
              <Text style={[styles.ofertaA, styles.ofertaATypo]}>Oferta B</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.navigationMenuItem1, styles.navigationItemFlexBox]}
        >
          <View style={styles.navigationMenuItemInner}>
            <View style={[styles.ofertaAWrapper, styles.ofertaAWrapperFlexBox]}>
              <Text style={[styles.ofertaA, styles.ofertaATypo]}>Oferta C</Text>
            </View>
          </View>
        </View>
      </View>
      <OfferDisplay
        prop="$500,100.00"
        prop1="$2,003.26"
        anos="30 anos"
        prop2="12.6% "
      />
      <Buttons onButtonPress={() => navigation.navigate("RejectionHome")} />
    </View>
  );
};

const styles = StyleSheet.create({
  ofertaATypo: {
    textAlign: "left",
    fontSize: FontSize.subtleMedium_size,
  },
  ofertaAWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navigationItemFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    height: 41,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  ustedCalificPara: {
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorGray_300,
    alignSelf: "stretch",
  },
  ofertaA: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.subtleMedium,
    color: Color.slate900,
  },
  ofertaAWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  navigationMenuItemInner: {
    width: 57,
    height: 20,
  },
  navigationMenuItem: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.slate100,
  },
  navigationMenuItemChild: {
    width: 56,
    height: 20,
  },
  navigationMenuItem1: {
    backgroundColor: Color.dominant,
  },
  navigationMenuItemParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  offerHome: {
    width: 380,
    marginTop: 24,
  },
});

export default OfferHome;
