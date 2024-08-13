import React from 'react';
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import Button3 from "./Button3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const HLQuestions = () => {
  return (
    <View style={styles.homehomeuse}>
      <View style={styles.iconParent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso1}>{`Paso 1 `}</Text>
        <Text style={styles.de6}>de 6</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text
          style={styles.comoVasA}
        >{`Como vas a usar la propiedad que quieres comprar? `}</Text>
        <Text style={[styles.estasAlquilandoO, styles.textLayout]}>
          Estas alquilando o vas hacer un dueno que vive en esta propiedad?
        </Text>
      </View>
      <DropdownsTuniTuni
        jeraldinelocofyuiai="Casa Primaria"
        dropdownsTuniTuniPosition="unset"
        dropdownsTuniTuniHeight={56}
        dropdownsTuniTuniTop="unset"
        dropdownsTuniTuniRight="unset"
        dropdownsTuniTuniBottom="unset"
        dropdownsTuniTuniLeft="unset"
        dropdownsTuniTuniWidth={380}
        dropdownsTuniTuniMarginTop={16}
        dropdownsTuniTuniAlignSelf="unset"
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
      />
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
    textAlign: "left",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
  },
  iconParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  paso1: {
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
  },
  comoVasA: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  estasAlquilandoO: {
    fontSize: FontSize.subtleMedium_size,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    marginTop: 16,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  homehomeuse: {
    width: 380,
  },
});

export default HLQuestions;
