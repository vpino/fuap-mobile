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

const HomeLoan5downpayment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeLoan5downpayment}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-1.png")}
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
        <View style={styles.buttonFlexBox}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso5}>{`Paso 5 `}</Text>
          <Text style={styles.de8}>de 8</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.culEsSu}>¿Cuál es su pago inicial estimado?</Text>
          <Text
            style={[styles.porFavorConfirme, styles.textLayout]}
          >{`Por favor confirme el pago inicial estimado. Consejeramos que debes pagar 20% - 50% inicialmente para los mejores ratos `}</Text>
        </View>
        <View style={[styles.iconGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
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
              style={[styles.icon2, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon6.png")}
            />
          </View>
          <Text style={[styles.text2, styles.textTypo]} numberOfLines={1}>
            $100,000
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("HomeLoan6monthlys")}
        >
          <Text style={[styles.continuar, styles.continuarTypo]}>
            Continuar
          </Text>
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon2.png")}
          />
        </Pressable>
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
  parentFlexBox: {
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  text2SpaceBlock: {
    marginLeft: 10,
    overflow: "hidden",
    flex: 1,
  },
  iconLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.gray1,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  continuarTypo: {
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    fontFamily: FontFamily.textSmall,
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  paso5: {
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
    display: "none",
  },
  pagoInicial: {
    color: Color.gray3,
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
  },
  iconGroup: {
    borderRadius: StyleVariable.defaultBorderRaius,
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    height: 56,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    marginTop: 16,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
  },
  icon2: {
    marginLeft: 4,
  },
  parent: {
    borderColor: Color.lightBorder,
    borderRightWidth: 1,
    paddingRight: Padding.p_3xs,
  },
  text2: {
    marginLeft: 10,
    overflow: "hidden",
    flex: 1,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon3: {
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
  homeLoan5downpayment: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.dominant,
  },
});

export default HomeLoan5downpayment;
