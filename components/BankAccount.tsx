import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BankAccount = () => {
  return (
    <View style={[styles.bankAccount, styles.bankAccountFlexBox]}>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-136.png")}
        />
        <View style={styles.bancoMercantilParent}>
          <Text style={styles.bancoMercantil} numberOfLines={1}>
            Banco Mercantil
          </Text>
          <View
            style={[
              styles.cuentaPrimaria2134Wrapper,
              styles.bankAccountFlexBox,
            ]}
          >
            <Text style={styles.cuentaPrimaria}>
              Cuenta: Primaria | *****2134
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.bankAccountChild}
        resizeMode="cover"
        source={require("../assets/frame-2608919.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bankAccountFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  groupChild: {
    marginLeft: -100,
    top: 8,
    left: "50%",
    width: 32,
    height: 32,
    position: "absolute",
  },
  bancoMercantil: {
    fontSize: FontSize.textLargeBolder_size,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.black,
    overflow: "hidden",
    textAlign: "left",
  },
  cuentaPrimaria: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 22,
    fontFamily: FontFamily.body,
    color: Color.gray,
    textAlign: "left",
  },
  cuentaPrimaria2134Wrapper: {
    marginTop: 4,
  },
  bancoMercantilParent: {
    top: 0,
    left: 48,
    position: "absolute",
  },
  groupParent: {
    width: 200,
    height: 48,
  },
  bankAccountChild: {
    borderRadius: Border.br_11xs,
    width: 24,
    height: 24,
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
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
  },
});

export default BankAccount;
