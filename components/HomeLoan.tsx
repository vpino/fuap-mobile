import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type HomeLoanType = {
  button?: string;
  showIcon?: boolean;
};

const HomeLoan = ({ button, showIcon }: HomeLoanType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.homeLoan}
      onPress={() => navigation.navigate("HomeLoan1Usage")}
    >
      <View style={styles.homeText}>
        <Text style={[styles.prestamoDeCasa, styles.casaFlexBox]}>
          Prestamo de Casa
        </Text>
        <Text style={[styles.financiaLaCasa, styles.casaFlexBox]}>
          Financia la casa de tus sueños o repara la que ya posees con una
          primera hipoteca, una línea de crédito sobre el valor de la vivienda,
          una segunda hipoteca tradicional de tasa fija, ARM o hipoteca inversa.
        </Text>
      </View>
      <Button1
        button="Aplicar Ahorra"
        icon={require("../assets/icon18.png")}
        showIcon={showIcon}
        buttonPosition="unset"
        buttonBackgroundColor="#333"
        buttonPaddingVertical="unset"
        buttonMarginTop={8}
        buttonPaddingHorizontal="unset"
        buttonMarginLeft="unset"
        buttonTop="unset"
        buttonLeft="unset"
        buttonWidth="unset"
        buttonFontFamily="Inter-Regular"
        buttonFontWeight="unset"
        buttonFontSize={12}
        buttonColor="#fff"
        iconWidth={16}
        iconHeight={16}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  casaFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  prestamoDeCasa: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
  },
  financiaLaCasa: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginTop: 4,
  },
  homeText: {
    alignSelf: "stretch",
  },
  homeLoan: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    marginTop: 24,
  },
});

export default HomeLoan;
