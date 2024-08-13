import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import HomeWelcome from "../components/HomeWelcome";
import ApplicationStartLoanSubmissionTable from "../components/ApplicationStartLoanSubmissionTable";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button1 from "../components/Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Submissions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.submissions}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-1.png")}
        solidIcon={require("../assets/solidicon.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon4.png")}
        solidIcon3={require("../assets/solidicon5.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="stretch"
        personalApplicationQuestiWidth="unset"
        framePressableBackgroundColor="unset"
        framePressableBackgroundColor1="unset"
        framePressableBorderRadius1={28}
        framePressableBackgroundColor2="#e0e8ff"
      />
      <View style={styles.homeWelcomeWrapper}>
        <HomeWelcome
          bienvenidoCustomerName="Sumisiones"
          puedesAplicarParaCualquie="Aquí están tus sumisiones de préstamos asociada a tu cuenta. Tenemos tu pendiente, aprobado, y prestamos rechazados abajo."
          showPuedesAplicarPara
          homeWelcomePosition="unset"
          homeWelcomeAlignSelf="stretch"
          homeWelcomeTop="unset"
          homeWelcomeLeft="unset"
          homeWelcomeWidth="unset"
        />
      </View>
      <ApplicationStartLoanSubmissionTable
        showTables={false}
        applicationStartLoanSubmiPosition="absolute"
        applicationStartLoanSubmiHeight={31}
        applicationStartLoanSubmiTop={279}
        applicationStartLoanSubmiLeft={24}
        frameViewWidth={378}
        frameViewFlex={1}
        badgesxlIncreasePaddingHorizontal="unset"
        frameViewWidth1="unset"
        frameViewFlex1={1}
        badgesxlIncreasePaddingHorizontal1="unset"
        tablesBorderRadius={4}
        tablesBorderStyle="solid"
        tablesBorderColor="#e0e8ff"
        tablesBorderWidth={1}
        tablesPaddingHorizontal="unset"
        tablesPaddingVertical="unset"
      />
      <Pressable
        style={styles.personalLoan}
        onPress={() => navigation.navigate("OnboardingStart")}
      >
        <View style={styles.personalText}>
          <View style={styles.personalText}>
            <Text style={styles.todavaNoTienes}>
              ¡Todavía no tienes una sumisión activo!
            </Text>
          </View>
        </View>
        <Button1
          button="Aplicar ahorra"
          icon={require("../assets/icon11.png")}
          showIcon
          buttonPosition="unset"
          buttonBackgroundColor="#e0e8ff"
          buttonPaddingVertical="unset"
          buttonMarginTop={8}
          buttonPaddingHorizontal="unset"
          buttonMarginLeft="unset"
          buttonTop="unset"
          buttonLeft="unset"
          buttonWidth={348}
          buttonFontFamily="Manrope-Bold"
          buttonFontWeight="700"
          buttonFontSize={16}
          buttonColor="#333"
          iconWidth={18}
          iconHeight={18}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWelcomeWrapper: {
    top: 109,
    left: 0,
    width: 428,
    alignItems: "center",
    position: "absolute",
  },
  todavaNoTienes: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.black,
    textAlign: "center",
    alignSelf: "stretch",
  },
  personalText: {
    alignSelf: "stretch",
  },
  personalLoan: {
    marginTop: -137,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    position: "absolute",
  },
  submissions: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Submissions;
