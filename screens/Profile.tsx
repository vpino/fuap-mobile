import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import HomeWelcome from "../components/HomeWelcome";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import { Color } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
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
          bienvenidoCustomerName="Editar Perfil"
          puedesAplicarParaCualquie="Aquí puedes editar los detalles de tu perfil y tu configuración de la plataforma"
          showPuedesAplicarPara
          homeWelcomePosition="unset"
          homeWelcomeAlignSelf="stretch"
          homeWelcomeTop="unset"
          homeWelcomeLeft="unset"
          homeWelcomeWidth="unset"
        />
      </View>
      <View style={styles.profileChild} />
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("Name1")}
      >
        <FrameComponent2
          detallesPersonal="Detalles Personal"
          johnDoe="John Doe"
          johnDoeemailcom130512345="JohnDoe@email.com | +1 (305) 123-4567"
        />
        <FrameComponent2
          detallesPersonal="Detalles Documental"
          johnDoe="Pasaporte"
          johnDoeemailcom130512345="# 029485984594"
          propMarginTop={26}
          propAlignSelf="stretch"
        />
        <FrameComponent2
          detallesPersonal="Detalles De Casa"
          johnDoe="1000 Name Rd, Santo Domingo, RD 12324"
          johnDoeemailcom130512345="Dueño | 3 anos y 8 meses"
          propMarginTop={26}
          propAlignSelf="unset"
        />
        <FrameComponent2
          detallesPersonal="Detalles De Educación"
          johnDoe="Master’s en Software Engineering"
          johnDoeemailcom130512345="Universidad UNIBE | 1987"
          propMarginTop={26}
          propAlignSelf="unset"
        />
        <FrameComponent4 />
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
  profileChild: {
    marginLeft: -190.5,
    top: 241,
    left: "50%",
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 381,
    height: 1,
    position: "absolute",
  },
  frameParent: {
    top: 265,
    left: 24,
    width: 380,
    justifyContent: "flex-end",
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Profile;
