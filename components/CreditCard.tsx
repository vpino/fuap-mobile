import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type CreditCardType = {
  button?: string;
  showIcon?: boolean;
};

const CreditCard = ({ button, showIcon }: CreditCardType) => {
  return (
    <View style={styles.creditCard}>
      <View style={styles.cardText}>
        <Text style={[styles.tarjetaDeCredito, styles.aprInicialYFlexBox]}>
          Tarjeta de Credito
        </Text>
        <Text style={[styles.aprInicialY, styles.aprInicialYFlexBox]}>
          0% APR inicial y ofertas de bonificación: cero intereses por hasta 21
          meses y reembolso en efectivo ilimitado. ¡Solicita las mejores
          tarjetas de crédito! Obtén una Tarjeta con 0% TAE Hasta 2026. Nuestros
          Expertos Encontraron las Mejores Ofertas de Tarjetas de Crédito para
          Ti.
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
    </View>
  );
};

const styles = StyleSheet.create({
  aprInicialYFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  tarjetaDeCredito: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
  },
  aprInicialY: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginTop: 4,
  },
  cardText: {
    alignSelf: "stretch",
  },
  creditCard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    marginTop: 24,
  },
});

export default CreditCard;
