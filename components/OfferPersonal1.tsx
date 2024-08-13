import React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import OfferDisplay1 from "./OfferDisplay1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const OfferPersonal1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.offerPersonal}>
      <Text style={styles.aplicarDeNuevo}>
        Aplicar de nuevo con diferentes condiciones con tu misma informacion:
      </Text>
      <View style={styles.plQuestions}>
        <View style={styles.dropdownstunituni}>
          <View style={styles.inputFieldBase}>
            <Text style={styles.email}>Email</Text>
            <View
              style={[styles.jeraldinelocofyuiaiParent, styles.parentFlexBox]}
            >
              <Text
                style={[styles.jeraldinelocofyuiai, styles.continuarTypo]}
                numberOfLines={1}
              >
                Ingreso mensual
              </Text>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.sliderLoan}>
          <OfferDisplay1 precioDeLaCasa="Precio de la casa" prop="$250,500" />
          <View style={[styles.offerDisplay, styles.buttonFlexBox]}>
            <View style={[styles.pagoInicial10Parent, styles.parentFlexBox]}>
              <Text style={[styles.pagoInicialContainer, styles.text3Typo]}>
                <Text style={styles.pagoInicial}>{`Pago inicial `}</Text>
                <Text style={styles.text}>|</Text>
                <Text style={styles.pagoInicial}>{` `}</Text>
                <Text style={styles.text2}>10%</Text>
              </Text>
              <View style={styles.frameWrapper}>
                <View style={styles.wrapper}>
                  <Text style={[styles.text3, styles.text3Typo]}>$25,500</Text>
                </View>
              </View>
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
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("ApprovalHome")}
        >
          <Text style={[styles.continuar, styles.continuarTypo]}>
            Aplicar con nuevo términos
          </Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon8.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  continuarTypo: {
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textLargeBolder_size,
  },
  iconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    marginTop: 16,
  },
  text3Typo: {
    lineHeight: 20,
    fontSize: FontSize.subtleMedium_size,
    textAlign: "left",
  },
  groupPosition: {
    borderRadius: 11,
    height: 9,
    left: 0,
    top: 0,
    position: "absolute",
  },
  aplicarDeNuevo: {
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.textLargeBolder_size,
    alignSelf: "stretch",
  },
  email: {
    lineHeight: 22,
    color: Color.darkGray,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.subtleMedium_size,
    display: "none",
    textAlign: "left",
    alignSelf: "stretch",
  },
  jeraldinelocofyuiai: {
    flex: 1,
    color: Color.base700LightTertiary,
    overflow: "hidden",
    textAlign: "left",
  },
  icon: {
    marginLeft: 10,
  },
  jeraldinelocofyuiaiParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    borderColor: Color.colorGray_800,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.dominant,
    height: 56,
  },
  inputFieldBase: {
    height: 56,
    alignSelf: "stretch",
  },
  dropdownstunituni: {
    display: "none",
    height: 56,
    width: 380,
  },
  pagoInicial: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
  },
  text: {
    fontWeight: "200",
    fontFamily: FontFamily.manropeExtraLight,
  },
  text2: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
  },
  pagoInicialContainer: {
    color: Color.gray,
  },
  text3: {
    letterSpacing: -0.1,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.black,
  },
  wrapper: {
    justifyContent: "flex-end",
    left: 0,
    top: 0,
    position: "absolute",
    width: 92,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    height: 20,
    width: 92,
  },
  pagoInicial10Parent: {
    justifyContent: "space-between",
  },
  groupChild: {
    backgroundColor: Color.lightBorder,
    width: 348,
  },
  groupItem: {
    backgroundColor: Color.accent,
    width: 141,
  },
  rectangleParent: {
    top: 9,
    height: 9,
    width: 348,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    left: 129,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: 24,
    width: 348,
    marginTop: 8,
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
    borderColor: Color.colorAliceblue_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.dominant,
    alignSelf: "stretch",
  },
  sliderLoan: {
    width: 380,
    marginTop: 16,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon1: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: Color.black,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: Border.br_7xs,
    width: 380,
  },
  plQuestions: {
    marginTop: 8,
    width: 380,
  },
  offerPersonal: {
    marginTop: 16,
  },
});

export default OfferPersonal1;
