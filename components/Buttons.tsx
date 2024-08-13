import React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

export type ButtonsType = {
  /** Action props */
  onButtonPress?: () => void;
};

const Buttons = ({ onButtonPress }: ButtonsType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.buttons}>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("HomePageFilled")}
      >
        <Text style={[styles.button1, styles.buttonTypo]}>Aceptar Oferta</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.button2, styles.buttonFlexBox]}
        onPress={onButtonPress}
      >
        <Text style={[styles.button3, styles.buttonTypo]}>
          Hablar con un agente
        </Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_7xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 380,
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.header,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
  },
  button1: {
    color: Color.green1,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    overflow: "hidden",
  },
  button: {
    top: 0,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.confirm,
    borderWidth: 1,
  },
  button3: {
    color: Color.gray1,
  },
  button2: {
    top: 60,
    backgroundColor: Color.colorLavender,
  },
  buttons: {
    height: 112,
    marginTop: 8,
    width: 380,
  },
});

export default Buttons;
