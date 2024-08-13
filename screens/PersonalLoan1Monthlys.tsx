import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import DropdownsTuniTuni from "../components/DropdownsTuniTuni";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  Color,
  FontSize,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const PersonalLoan1Monthlys = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View
      style={[styles.personalLoan1monthlys, styles.jeraldinelocofyuiaiFlexBox]}
    >
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
      <View style={styles.plQuestions}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso1}>{`Paso 1 `}</Text>
          <Text style={styles.de4}>de 4</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text
            style={styles.cualEsTu}
          >{`Por favor confirme detalles de tu finanzas mensuales? `}</Text>
          <Text style={[styles.porFavorConfirme, styles.porFavorConfirmeClr]}>
            ¿Cuanto es el ingreso y A cuánto ascienden tus facturas mensuales??
          </Text>
        </View>
        <View style={styles.dropdownstunituni}>
          <View style={styles.inputFieldBase}>
            <Text style={[styles.email, styles.emailTypo]}>Email</Text>
            <View
              style={[styles.jeraldinelocofyuiaiParent, styles.parentFlexBox]}
            >
              <Text
                style={[styles.jeraldinelocofyuiai, styles.continuarTypo]}
                numberOfLines={1}
              >
                Ingreso mensual
              </Text>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
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
          jeraldinelocofyuiai="Facturas mensuales"
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
        <Pressable
          style={[styles.button, styles.parentFlexBox]}
          onPress={() => navigation.navigate("PersonalLoan2terms")}
        >
          <Text style={[styles.continuar, styles.continuarTypo]}>
            Continuar
          </Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon8.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jeraldinelocofyuiaiFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  backTypo: {
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
  },
  textLayout: {
    lineHeight: 30,
    marginTop: 16,
  },
  porFavorConfirmeClr: {
    color: Color.base700LightTertiary,
    textAlign: "left",
  },
  emailTypo: {
    fontSize: FontSize.subtleMedium_size,
    alignSelf: "stretch",
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
  },
  paso1: {
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
    textAlign: "left",
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
    fontFamily: FontFamily.body,
    fontSize: FontSize.subtleMedium_size,
    alignSelf: "stretch",
    marginTop: 16,
    lineHeight: 30,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  email: {
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  jeraldinelocofyuiai: {
    color: Color.base700LightTertiary,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  icon1: {
    marginLeft: 10,
  },
  jeraldinelocofyuiaiParent: {
    borderRadius: StyleVariable.defaultBorderRaius,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
    height: 56,
    alignSelf: "stretch",
    backgroundColor: Color.dominant,
  },
  inputFieldBase: {
    height: 56,
    alignSelf: "stretch",
  },
  dropdownstunituni: {
    display: "none",
    height: 56,
    marginTop: 16,
    width: 380,
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
  plQuestions: {
    position: "absolute",
    marginTop: -354,
    top: "50%",
    left: 24,
    width: 380,
  },
  personalLoan1monthlys: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.dominant,
  },
});

export default PersonalLoan1Monthlys;
