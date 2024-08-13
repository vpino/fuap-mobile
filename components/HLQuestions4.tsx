import React from 'react';
import DropdownsTuniAddress from "./DropdownsTuniAddress";
import Button3 from "./Button3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const HLQuestions4 = () => {
  return (
    <View style={styles.homehomeaddress}>
      <View style={styles.iconParent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso3}>{`Paso 3 `}</Text>
        <Text style={styles.de6}>de 6</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.porFavorConfirme}>
          Por favor confirme la direcion que quieres comprar?
        </Text>
        <Text style={[styles.confirmeElNumero, styles.textLayout]}>
          Confirme el numero de telefono y la dirrecion sobre la empresa.
        </Text>
      </View>
      <DropdownsTuniAddress
        icon={require("../assets/icon32.png")}
        icon1={require("../assets/icon30.png")}
        dropdownsTuniAddressWidth={380}
        dropdownsTuniAddressMarginTop={16}
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor1="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor2="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor3="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor4="rgba(130, 130, 130, 0.2)"
        showEmail={false}
        showIcon={false}
        showThisIsA={false}
      />
      <View style={styles.buttonParent}>
        <Button3
          button="Continuar"
          icon={require("../assets/icon2.png")}
          buttonPosition="unset"
          buttonBorderStyle="unset"
          buttonBorderColor="unset"
          buttonBackgroundColor="#333"
          buttonMarginTop="unset"
          buttonFlex={1}
          buttonMarginLeft="unset"
          buttonColor="#fff"
          iconMarginLeft={8}
        />
        <Button3
          button="No disponible"
          icon={require("../assets/icon17.png")}
          buttonPosition="unset"
          buttonBorderStyle="solid"
          buttonBorderColor="#457eff"
          buttonBorderWidth={1}
          buttonBackgroundColor="unset"
          buttonMarginTop="unset"
          buttonFlex={1}
          buttonMarginLeft={32}
          buttonColor="#457eff"
          iconMarginLeft={6}
        />
      </View>
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
    alignItems: "center",
    flexDirection: "row",
  },
  paso3: {
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
  confirmeElNumero: {
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
  buttonParent: {
    marginTop: 16,
    flexDirection: "row",
    width: 380,
  },
  homehomeaddress: {
    width: 380,
  },
});

export default HLQuestions4;
