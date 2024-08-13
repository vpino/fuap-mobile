import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BankAccount from "./BankAccount";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View>
          <Text style={[styles.cuentaBancaria, styles.bancoPopularTypo]}>
            Cuenta Bancaria
          </Text>
        </View>
        <Pressable
          style={[styles.bankAccount, styles.bankShadowBox]}
          onPress={() => navigation.navigate("Step2AddingAccountPersonal")}
        >
          <Image
            style={styles.bankAccountChild}
            resizeMode="cover"
            source={require("../assets/frame-2608920.png")}
          />
          <View style={styles.agregarNuevaCuentaWrapper}>
            <Text
              style={[styles.agregarNuevaCuenta, styles.bancoPopularClr]}
              numberOfLines={1}
            >{`Agregar nueva cuenta `}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.bankSpaceBlock}>
        <BankAccount />
        <View style={[styles.bankAccount1, styles.bankSpaceBlock]}>
          <View style={styles.groupParent}>
            <Image
              style={styles.groupChild}
              resizeMode="cover"
              source={require("../assets/group-1361.png")}
            />
            <View style={styles.bancoPopularParent}>
              <Text
                style={[styles.bancoPopular, styles.bancoPopularClr]}
                numberOfLines={1}
              >
                Banco Popular
              </Text>
              <View style={styles.cuentaAhorros0199Wrapper}>
                <Text style={styles.cuentaAhorros}>
                  Cuenta: Ahorros | *****0199
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.bankAccountItem}
            resizeMode="cover"
            source={require("../assets/frame-2608919.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bancoPopularTypo: {
    fontFamily: FontFamily.header,
    fontWeight: "700",
    fontSize: FontSize.textLargeBolder_size,
  },
  bankShadowBox: {
    backgroundColor: Color.dominant,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    alignItems: "center",
    flexDirection: "row",
  },
  bancoPopularClr: {
    overflow: "hidden",
    color: Color.black,
    textAlign: "left",
  },
  bankSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  cuentaBancaria: {
    lineHeight: 24,
    color: Color.slate900,
    opacity: 0.8,
    textAlign: "left",
  },
  bankAccountChild: {
    width: 18,
    height: 18,
    borderRadius: Border.br_11xs,
  },
  agregarNuevaCuenta: {
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    fontSize: FontSize.textSmall_size,
  },
  agregarNuevaCuentaWrapper: {
    marginLeft: 8,
  },
  bankAccount: {
    width: 166,
    padding: Padding.p_5xs,
    opacity: 0.8,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignItems: "center",
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
  bancoPopular: {
    opacity: 0.5,
    fontFamily: FontFamily.header,
    fontWeight: "700",
    fontSize: FontSize.textLargeBolder_size,
  },
  cuentaAhorros: {
    lineHeight: 22,
    fontFamily: FontFamily.body,
    color: Color.gray,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  cuentaAhorros0199Wrapper: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bancoPopularParent: {
    top: 0,
    left: 48,
    position: "absolute",
  },
  groupParent: {
    width: 200,
    height: 48,
  },
  bankAccountItem: {
    width: 24,
    height: 24,
    borderRadius: Border.br_11xs,
  },
  bankAccount1: {
    padding: Padding.p_base,
    backgroundColor: Color.dominant,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frameParent: {
    top: 438,
    left: 24,
    width: 380,
    position: "absolute",
  },
});

export default FrameComponent8;
