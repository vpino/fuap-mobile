import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import DropdownsTuniTuni from "../components/DropdownsTuniTuni";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const HomeLoan6monthlys = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeLoan6monthlys}>
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
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso6}>{`Paso 6 `}</Text>
          <Text style={styles.de8}>de 8</Text>
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
          dropdownsTuniTuniWidth="unset"
          dropdownsTuniTuniMarginTop={16}
          dropdownsTuniTuniAlignSelf="stretch"
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
          dropdownsTuniTuniWidth="unset"
          dropdownsTuniTuniMarginTop={16}
          dropdownsTuniTuniAlignSelf="stretch"
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("HomeLoan7assets")}
        >
          <Text style={styles.continuar}>Continuar</Text>
          <Image
            style={styles.icon1}
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
  buttonFlexBox: {
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
  paso6: {
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
  continuar: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.dominant,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
  },
  icon1: {
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
  homeLoan6monthlys: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomeLoan6monthlys;
