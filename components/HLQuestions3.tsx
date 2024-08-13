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

const HLQuestions3 = () => {
  return (
    <View style={styles.homedownpayment}>
      <View style={styles.iconParent}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={[styles.text, styles.textLayout]}>
        <Text style={styles.paso5}>{`Paso 5 `}</Text>
        <Text style={styles.de6}>de 6</Text>
      </Text>
      <View style={styles.personalApplicationQuestion}>
        <Text style={styles.culEsSu}>¿Cuál es su pago inicial estimado?</Text>
        <Text
          style={[styles.porFavorConfirme, styles.textLayout]}
        >{`Por favor confirme el pago inicial estimado. Consejeramos que debes pagar 20% - 50% inicialmente para los mejores ratos `}</Text>
      </View>
      <View style={[styles.iconGroup, styles.parentFlexBox]}>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon30.png")}
        />
        <Text
          style={[styles.pagoInicial, styles.text2SpaceBlock]}
          numberOfLines={1}
        >
          $ Pago inicial
        </Text>
      </View>
      <View style={[styles.iconGroup, styles.parentFlexBox]}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.textTypo}>25%</Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
        </View>
        <Text style={[styles.text2, styles.textTypo]} numberOfLines={1}>
          $100,000
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
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 30,
    marginTop: 16,
    textAlign: "left",
  },
  parentFlexBox: {
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  text2SpaceBlock: {
    marginLeft: 10,
    flex: 1,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.gray1,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  icon: {
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
  iconParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  paso5: {
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
  culEsSu: {
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
  pagoInicial: {
    color: Color.colorGray_800,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  iconGroup: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    height: 56,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    marginTop: 16,
  },
  icon2: {
    marginLeft: 4,
    overflow: "hidden",
  },
  parent: {
    borderColor: Color.lightBorder,
    borderRightWidth: 1,
    paddingRight: Padding.p_3xs,
  },
  text2: {
    marginLeft: 10,
    flex: 1,
    overflow: "hidden",
    color: Color.gray1,
  },
  homedownpayment: {
    width: 380,
  },
});

export default HLQuestions3;
