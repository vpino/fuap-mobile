import React from 'react';
import Button3 from "./Button3";
import {
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
  Padding,
} from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const HLQuestions1 = () => {
  return (
    <View style={styles.homehometype}>
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
        <Text style={styles.de6}>de 6</Text>
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
          style={[styles.apartamento, styles.esUnaCasaClr]}
          numberOfLines={1}
        >
          Apartamento
        </Text>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon7.png")}
        />
      </View>
      <Button3
        button="Continuar"
        icon={require("../assets/icon8.png")}
        buttonPosition="unset"
        buttonBorderStyle="unset"
        buttonBorderColor="unset"
        buttonBackgroundColor="#000"
        buttonMarginTop={16}
        buttonMarginLeft="unset"
        buttonColor="#fff"
        iconMarginLeft={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  de6: {
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
    flex: 1,
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    overflow: "hidden",
  },
  icon1: {
    width: 18,
    height: 18,
    marginLeft: 10,
    overflow: "hidden",
  },
  apartamentoParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    height: 56,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    marginTop: 16,
  },
  homehometype: {
    width: 380,
  },
});

export default HLQuestions1;
