import React from 'react';
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import Button3 from "./Button3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const HLQuestions5 = () => {
  return (
    <View style={styles.homemonthlymovement}>
      <View style={styles.iconParent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso6}>{`Paso 6 `}</Text>
        <Text style={styles.de6}>de 6</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text
          style={styles.porFavorConfirme}
        >{`Por favor confirme detalles de tu finanzas mensuales? `}</Text>
        <Text style={[styles.cuantoEsEl, styles.textLayout]}>
          ¿Cuanto es el ingreso y A cuánto ascienden tus facturas mensuales??
        </Text>
      </View>
      <DropdownsTuniTuni
        jeraldinelocofyuiai="Ingreso mensual"
        dropdownsTuniTuniPosition="unset"
        dropdownsTuniTuniHeight={56}
        dropdownsTuniTuniTop="unset"
        dropdownsTuniTuniRight="unset"
        dropdownsTuniTuniBottom="unset"
        dropdownsTuniTuniLeft="unset"
        dropdownsTuniTuniWidth={340}
        dropdownsTuniTuniMarginTop={16}
        dropdownsTuniTuniAlignSelf="unset"
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
      />
      <DropdownsTuniTuni
        jeraldinelocofyuiai="Facturas mensuales"
        dropdownsTuniTuniPosition="unset"
        dropdownsTuniTuniHeight={56}
        dropdownsTuniTuniTop="unset"
        dropdownsTuniTuniRight="unset"
        dropdownsTuniTuniBottom="unset"
        dropdownsTuniTuniLeft="unset"
        dropdownsTuniTuniWidth={340}
        dropdownsTuniTuniMarginTop={16}
        dropdownsTuniTuniAlignSelf="unset"
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
      />
      <Button3
        button="Continuar"
        icon={require("../assets/icon2.png")}
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
  paso6: {
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
  porFavorConfirme: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  cuantoEsEl: {
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
  homemonthlymovement: {
    width: 380,
  },
});

export default HLQuestions5;
