import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type PersonalLoan2Type = {
  button?: string;
  showIcon?: boolean;
};

const PersonalLoan2 = ({ button, showIcon }: PersonalLoan2Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.personalLoan}
      onPress={() => navigation.navigate("PersonalLoan1Monthlys")}
    >
      <View style={styles.personalText}>
        <View style={styles.personalText}>
          <Text style={[styles.prestamoPersonal, styles.personalFlexBox]}>
            Prestamo Personal
          </Text>
        </View>
        <Text style={[styles.unPrstamoPersonal, styles.personalFlexBox]}>
          ¡Un préstamo personal para sus necesidades personales! Consulta tu
          tarifa en 5 minutos y recibe tus fondos en tan solo 24 horas**. Tasas
          fijas bajas desde 5,2% TAE***
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
  personalFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  prestamoPersonal: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
  },
  personalText: {
    alignSelf: "stretch",
  },
  unPrstamoPersonal: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginTop: 4,
  },
  personalLoan: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
  },
});

export default PersonalLoan2;
