import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import BankAccount from "./BankAccount";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent6 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
        <View>
          <Text style={styles.cuentaBancaria}>Cuenta Bancaria</Text>
        </View>
        <View style={[styles.bankAccount, styles.frameGroupFlexBox]}>
          <Image
            style={styles.bankAccountChild}
            resizeMode="cover"
            source={require("../assets/frame-2608920.png")}
          />
          <View style={styles.agregarNuevaCuentaWrapper}>
            <Text
              style={styles.agregarNuevaCuenta}
              numberOfLines={1}
            >{`Agregar nueva cuenta `}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bankAccountWrapper}>
        <BankAccount />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cuentaBancaria: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    opacity: 0.8,
    textAlign: "left",
  },
  bankAccountChild: {
    borderRadius: Border.br_11xs,
    width: 18,
    height: 18,
  },
  agregarNuevaCuenta: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.black,
    overflow: "hidden",
    textAlign: "left",
  },
  agregarNuevaCuentaWrapper: {
    marginLeft: 8,
  },
  bankAccount: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.dominant,
    width: 166,
    padding: Padding.p_5xs,
    opacity: 0.8,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  bankAccountWrapper: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    top: 438,
    left: 24,
    width: 380,
  },
});

export default FrameComponent6;
