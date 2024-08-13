import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const HomeLoan2Type = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homeLoan2type, styles.apartamentoFlexBox]}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-11.png")}
        solidIcon={require("../assets/solidicon.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon2.png")}
        solidIcon3={require("../assets/solidicon3.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="stretch"
        personalApplicationQuestiWidth="unset"
        framePressableBackgroundColor="unset"
        framePressableBorderRadius={28}
        framePressableBackgroundColor1="#e0e8ff"
        framePressableBackgroundColor2="unset"
      />
      <View style={styles.hlQuestions}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso2}>{`Paso 2 `}</Text>
          <Text style={styles.de8}>de 8</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text
            style={styles.queTipoDe}
          >{`Que tipo de casa es que quieres comprar? `}</Text>
          <Text style={[styles.esUnaCasa, styles.esUnaCasaClr]}>
            Es una casa, apartamento, o townhouse? Dejanos saber.
          </Text>
        </View>
        <View style={[styles.apartamentoParent, styles.parentFlexBox]}>
          <Text
            style={[styles.apartamento, styles.continuarTypo]}
            numberOfLines={1}
          >
            Apartamento
          </Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
        </View>
        <Pressable
          style={[styles.button, styles.parentFlexBox]}
          onPress={() => navigation.navigate("HomeLoan3address")}
        >
          <Text style={[styles.continuar, styles.continuarTypo]}>
            Continuar
          </Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  apartamentoFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 30,
    marginTop: 16,
  },
  esUnaCasaClr: {
    color: Color.base700LightTertiary,
    textAlign: "left",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  continuarTypo: {
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    fontFamily: FontFamily.textSmall,
  },
  iconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  paso2: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
  },
  de8: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.helveticaNeue,
  },
  text: {
    fontSize: FontSize.size_xl,
    marginTop: 16,
    textAlign: "left",
  },
  queTipoDe: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  esUnaCasa: {
    fontSize: FontSize.subtleMedium_size,
    fontFamily: FontFamily.body,
    alignSelf: "stretch",
    marginTop: 16,
    lineHeight: 30,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  apartamento: {
    color: Color.base700LightTertiary,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  icon1: {
    marginLeft: 10,
  },
  apartamentoParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    height: 56,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    marginTop: 16,
    backgroundColor: Color.dominant,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon2: {
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    marginTop: 16,
    overflow: "hidden",
  },
  hlQuestions: {
    position: "absolute",
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
  },
  homeLoan2type: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.dominant,
  },
});

export default HomeLoan2Type;
