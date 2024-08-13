import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import ProgressBar1 from "./ProgressBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ApplicationStart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.applicationStart}>
      <ProgressBar1 />
      <View style={[styles.breadcrumbs, styles.iconParentFlexBox]}>
        <View style={styles.iconParentFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon21.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon22.png")}
        />
        <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/solidicon11.png")}
          />
          <Text style={styles.home}>Aplicaciones</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon22.png")}
        />
        <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/solidicon12.png")}
          />
          <Text style={styles.home}>Crear Cuenta</Text>
        </View>
      </View>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.bienvenido}>Vamos a empezar!</Text>
        <Text style={styles.comencemosConSu}>
          Comencemos con su información personal para generar tu cuenta. Esto
          debería tomar unos minutos. Te preguntaremos datos generales,
          información laboral para hacerte el proceso de consultar prestamos mas
          fácil.
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.iconParentFlexBox]}
        onPress={() => navigation.navigate("Name1")}
      >
        <Text style={styles.continuar}>Buscar tu prestamo</Text>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/icon8.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.black,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  icon1: {
    width: 10,
    height: 10,
    marginLeft: 11,
    overflow: "hidden",
  },
  solidIconParent: {
    marginLeft: 11,
  },
  breadcrumbs: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_5xs,
    marginTop: 16,
  },
  bienvenido: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    textAlign: "left",
  },
  comencemosConSu: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    textAlign: "left",
    marginTop: 16,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  continuar: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.dominant,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
  },
  icon3: {
    width: 18,
    height: 18,
    marginLeft: 8,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
    marginTop: 16,
  },
  applicationStart: {
    position: "absolute",
    marginTop: -356,
    top: "50%",
    left: 20,
    width: 380,
  },
});

export default ApplicationStart;
