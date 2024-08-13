import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import PersonalLoan1 from "./PersonalLoan1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.personalTextParent, styles.personalLayout]}
      onPress={() => navigation.navigate("Step2AddingAccountPersonal")}
    >
      <View style={[styles.personalText, styles.personalLayout]}>
        <View>
          <Text style={styles.cuentaBancaria}>Cuenta Bancaria</Text>
        </View>
      </View>
      <PersonalLoan1
        todavaNoTienesUnPrstamoAc="¡Todavía te falta conectar tu cuenta bancaria!"
        button="Agregar nueva cuenta"
        icon={require("../assets/icon11.png")}
        propMarginTop={-34}
        propFontSize={14}
        propFontFamily="Manrope-Light"
        showIcon
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  personalLayout: {
    width: 380,
    position: "absolute",
  },
  cuentaBancaria: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    textAlign: "left",
    opacity: 0.8,
  },
  personalText: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  personalTextParent: {
    top: 443,
    left: 24,
    height: 132,
  },
});

export default FrameComponent7;
