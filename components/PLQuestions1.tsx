import React from 'react';
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import Button3 from "./Button3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const PLQuestions1 = () => {
  return (
    <View style={styles.personal2MonthlyAndReque}>
      <View style={styles.iconParent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso2}>{`Paso 2 `}</Text>
        <Text style={styles.de4}>de 4</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.cualEsTu}>
          Cual es tu ingreso mensual y los terminos que te interesan?
        </Text>
        <Text style={[styles.porFavorConfirme, styles.textLayout]}>
          Por favor confirme el monto que solicites a prestar, cuando ingresas
          mensual, y cuantos meses le gustaría tener para pagar el préstamo.
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
        dropdownsTuniTuniWidth={380}
        dropdownsTuniTuniMarginTop={16}
        dropdownsTuniTuniAlignSelf="unset"
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
      />
      <DropdownsTuniTuni
        jeraldinelocofyuiai="Monto solicitado"
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
      <DropdownsTuniTuni
        jeraldinelocofyuiai="Meses de plazo"
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
  paso2: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
  },
  de4: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.helveticaNeue,
  },
  text: {
    fontSize: FontSize.size_xl,
    marginTop: 16,
  },
  cualEsTu: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  porFavorConfirme: {
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
  personal2MonthlyAndReque: {
    width: 380,
  },
});

export default PLQuestions1;
