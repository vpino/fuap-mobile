import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PersonalLoan5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.personalLoan}
      onPress={() => navigation.navigate("Step1ConnectedHomeRepayment1")}
    >
      <View style={styles.personalText}>
        <View style={styles.personalText}>
          <Text
            style={[styles.prstamoDeCasa, styles.deDiciembreTypo]}
          >{`Préstamo de Casa `}</Text>
        </View>
        <Text style={[styles.bancoMercantil, styles.fechaDePagoTypo]}>
          #10358405 | Banco Mercantil
        </Text>
      </View>
      <View style={[styles.personalLoanChild, styles.personalSpaceBlock]} />
      <View style={[styles.personalTextParent, styles.buttonFlexBox]}>
        <View style={styles.personalText}>
          <Text style={[styles.fechaDePago, styles.fechaDePagoTypo]}>
            Fecha de pago:
          </Text>
          <View
            style={[styles.deDiciembreAtrasado5dWrapper, styles.buttonFlexBox]}
          >
            <Text style={[styles.deDiciembreContainer, styles.button1Layout]}>
              <Text style={styles.deDiciembreTypo}>{`7 de Diciembre | `}</Text>
              <Text style={styles.atrasado5d}>Atrasado 5d</Text>
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Step1ConnectedHomeRepayment1")}
        >
          <Text style={[styles.button1, styles.button1Layout]}>
            Pagar mi préstamo
          </Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon18.png")}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  deDiciembreTypo: {
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  fechaDePagoTypo: {
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  personalSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  button1Layout: {
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  prstamoDeCasa: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.black,
    textAlign: "left",
    alignSelf: "stretch",
  },
  personalText: {
    alignSelf: "stretch",
  },
  bancoMercantil: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  personalLoanChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    height: 1,
  },
  fechaDePago: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  atrasado5d: {
    fontFamily: FontFamily.textSmall,
  },
  deDiciembreContainer: {
    color: Color.colorTomato,
    textAlign: "left",
  },
  deDiciembreAtrasado5dWrapper: {
    marginTop: 4,
  },
  button1: {
    fontWeight: "500",
    fontFamily: FontFamily.subtleMedium,
    color: Color.dominant,
    textAlign: "center",
  },
  icon: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 6,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray1,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
  },
  personalTextParent: {
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  personalLoan: {
    position: "absolute",
    top: 201,
    left: 24,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    paddingHorizontal: Padding.p_base,
  },
});

export default PersonalLoan5;
