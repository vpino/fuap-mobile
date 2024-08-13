import React from 'react';
import Button3 from "./Button3";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const HLQuestions2 = () => {
  return (
    <View style={styles.homehomeprice}>
      <View style={styles.iconFlexBox}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso4}>{`Paso 4 `}</Text>
        <Text style={styles.de6}>de 6</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.cualEsEl}>¿Cual es el precio de la casa?</Text>
        <Text style={[styles.porFavorConfirme, styles.textLayout]}>
          Por favor confirme el precio de la casa o cuanto tu piensas ofrecer
        </Text>
      </View>
      <View style={[styles.iconGroup, styles.iconFlexBox]}>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon30.png")}
        />
        <Text style={[styles.text1, styles.backTypo]} numberOfLines={1}>
          $500,000
        </Text>
      </View>
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
  backTypo: {
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
  },
  textLayout: {
    lineHeight: 30,
    marginTop: 16,
    textAlign: "left",
  },
  iconFlexBox: {
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
  },
  paso4: {
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
  cualEsEl: {
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
  icon1: {
    width: 18,
    height: 18,
    display: "none",
    overflow: "hidden",
  },
  text1: {
    flex: 1,
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.gray1,
    marginLeft: 10,
    textAlign: "left",
    overflow: "hidden",
  },
  iconGroup: {
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
  homehomeprice: {
    width: 380,
  },
});

export default HLQuestions2;
