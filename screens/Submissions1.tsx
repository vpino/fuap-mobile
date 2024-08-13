import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import HomeWelcome from "../components/HomeWelcome";
import Submissions2 from "../components/Submissions2";
import { Color } from "../GlobalStyles";

const Submissions1 = () => {
  return (
    <View style={styles.submissions}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-11.png")}
        solidIcon={require("../assets/solidicon.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon4.png")}
        solidIcon3={require("../assets/solidicon5.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="unset"
        personalApplicationQuestiWidth={380}
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
      <Submissions2
        submissionsPosition="absolute"
        submissionsTop={279}
        submissionsLeft={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeWelcomeWrapper: {
    position: "absolute",
    top: 109,
    left: 0,
    width: 428,
    alignItems: "center",
  },
  submissions: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Submissions1;
