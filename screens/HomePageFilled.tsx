import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import PersonalLoan from "../components/PersonalLoan";
import PersonalLoan3 from "../components/PersonalLoan3";
import ApplicationStartPersonalInf from "../components/ApplicationStartPersonalInf";
import HomeWelcome from "../components/HomeWelcome";
import HeaderFooter from "../components/HeaderFooter";
import { Color, Padding } from "../GlobalStyles";

const HomePageFilled = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePageFilled}>
      <View style={styles.lineParent}>
        <View style={styles.frameChild} />
        <View style={[styles.activeLoansHome, styles.activeLoansHomePosition]}>
          <PersonalLoan
            misPrstamosActivos="Mis préstamos activos"
            verTodos="Ver todos"
            icon={require("../assets/icon12.png")}
            propColor="#457eff"
          />
          <View
            style={[styles.productOffering, styles.activeLoansHomePosition]}
          >
            <PersonalLoan3
              prstamoPersonal="Préstamo personal "
              prop="12/10"
              pendiente="Pendiente"
              icon={require("../assets/icon19.png")}
              onPersonalLoanPress={() =>
                navigation.navigate("PersonalLoanDetailPage")
              }
              onButtonPress={() =>
                navigation.navigate("PersonalLoanDetailPage")
              }
            />
            <PersonalLoan3
              prstamoPersonal="Préstamo de Casa "
              prop="12/12"
              pendiente="Atrazado 5d"
              icon={require("../assets/icon18.png")}
              buttonPosition="unset"
              buttonTop="unset"
              buttonLeft="unset"
              buttonMarginTop={16}
              propAlignSelf="stretch"
              propColor="#f14336"
              onPersonalLoanPress={() =>
                navigation.navigate("HomeLoanDetailPage")
              }
              onButtonPress={() => navigation.navigate("HomeLoanDetailPage")}
            />
          </View>
        </View>
        <ApplicationStartPersonalInf />
        <HomeWelcome
          bienvenidoCustomerName={`Bienvenido,
{Customer Name}!`}
          puedesAplicarParaCualquie="Puedes aplicar para cualquier producto ofrecido abajo o realizar cualquier información asociado a su cuenta."
          showPuedesAplicarPara
          homeWelcomePosition="absolute"
          homeWelcomeAlignSelf="unset"
          homeWelcomeTop={0}
          homeWelcomeLeft={0}
          homeWelcomeWidth={428}
        />
      </View>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-1.png")}
        solidIcon={require("../assets/solidicon6.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon4.png")}
        solidIcon3={require("../assets/solidicon3.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft="50%"
        headerFooterMarginLeft={-214}
        personalApplicationQuestiAlignSelf="unset"
        personalApplicationQuestiWidth={380}
        framePressableBackgroundColor="#e0e8ff"
        framePressableBackgroundColor1="unset"
        framePressableBackgroundColor2="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeLoansHomePosition: {
    marginLeft: -214,
    left: "50%",
    width: 428,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -190.5,
    top: 548,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 381,
    height: 1,
    left: "50%",
    position: "absolute",
  },
  productOffering: {
    marginTop: -126,
    top: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
  activeLoansHome: {
    top: 184,
    height: 348,
  },
  lineParent: {
    top: 109,
    left: 0,
    height: 852,
    width: 428,
    position: "absolute",
  },
  homePageFilled: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default HomePageFilled;
