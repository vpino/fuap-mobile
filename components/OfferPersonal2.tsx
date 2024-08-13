import React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import OfferDisplay1 from "./OfferDisplay1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const OfferPersonal2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.offerPersonal}>
      <Text style={styles.aplicarDeNuevo}>
        Aplicar de nuevo con diferentes condiciones con tu misma informacion:
      </Text>
      <View style={styles.plQuestions}>
        <View style={styles.dropdownstunituni}>
          <View style={styles.inputFieldBaseLayout}>
            <Text style={styles.email}>Email</Text>
            <View
              style={[styles.jeraldinelocofyuiaiParent, styles.buttonFlexBox]}
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
        <View style={styles.buttonSpaceBlock}>
          <OfferDisplay1
            precioDeLaCasa="Cantidad de prestamo"
            prop="$2,500"
            propMarginTop="unset"
          />
          <OfferDisplay1
            precioDeLaCasa="Duración del prestamo"
            prop="6 Months"
            propMarginTop={16}
          />
        </View>
        <Pressable
          style={[styles.button, styles.buttonSpaceBlock]}
          onPress={() => navigation.navigate("ApprovalPersonal")}
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
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  buttonSpaceBlock: {
    marginTop: 16,
    width: 380,
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
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    fontFamily: FontFamily.textSmall,
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
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
    height: 56,
    alignSelf: "stretch",
  },
  inputFieldBaseLayout: {
    height: 56,
    alignSelf: "stretch",
  },
  dropdownstunituni: {
    display: "none",
    height: 56,
    width: 380,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon1: {
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  plQuestions: {
    marginTop: 8,
    width: 380,
  },
  offerPersonal: {
    position: "absolute",
    top: 367,
    left: 24,
  },
});

export default OfferPersonal2;
