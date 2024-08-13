import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import PersonalApplicationQuestion from "./PersonalApplicationQuestion";
import Button3 from "./Button3";
import HeaderFooter from "./HeaderFooter";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Employment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.employment}>
      <Pressable
        style={styles.profileQuestions}
        onPress={() => navigation.navigate("ContactInfo")}
      >
        <View style={styles.iconParentFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
        </View>
        <View style={styles.employment1}>
          <View style={styles.progressBar}>
            <View style={[styles.progressBarChild, styles.progressPosition]} />
            <View style={[styles.progressBarItem, styles.progressPosition]} />
          </View>
          <View style={[styles.breadcrumbs, styles.iconParentFlexBox]}>
            <View style={styles.iconParentFlexBox}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon21.png")}
              />
              <Text style={[styles.home, styles.backTypo]}>Home</Text>
            </View>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/icon22.png")}
            />
            <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/solidicon11.png")}
              />
              <Text style={[styles.home, styles.backTypo]}>Aplicaciones</Text>
            </View>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/icon22.png")}
            />
            <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/solidicon12.png")}
              />
              <Text style={[styles.home, styles.backTypo]}>Crear Cuenta</Text>
            </View>
          </View>
          <PersonalApplicationQuestion />
          <Button3
            button="Confirmar Cuenta"
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
      </Pressable>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo1.png")}
        group791={require("../assets/group-79-1.png")}
        solidIcon={require("../assets/solidicon10.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  progressPosition: {
    borderRadius: Border.br_61xl,
    left: 0,
    top: 2,
    height: 16,
    position: "absolute",
  },
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    color: Color.gray,
  },
  progressBarChild: {
    backgroundColor: Color.lightBorder,
    width: 380,
  },
  progressBarItem: {
    backgroundColor: Color.gray1,
    width: 361,
  },
  progressBar: {
    alignSelf: "stretch",
    height: 20,
    overflow: "hidden",
  },
  home: {
    color: Color.black,
  },
  icon2: {
    width: 10,
    height: 10,
    marginLeft: 11,
    overflow: "hidden",
  },
  solidIconParent: {
    marginLeft: 11,
  },
  breadcrumbs: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_5xs,
    marginTop: 16,
  },
  employment1: {
    marginTop: 16,
    width: 380,
  },
  profileQuestions: {
    marginTop: -526,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    overflow: "hidden",
    width: 380,
    position: "absolute",
  },
  employment: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 1270,
  },
});

export default Employment;
