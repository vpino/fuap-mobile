import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import OfferPersonal1 from "../components/OfferPersonal1";
import OfferPersonal from "../components/OfferPersonal";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Header from "../components/Header";
import HomeIndicator from "../components/HomeIndicator";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const RejectionHome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rejectionHome}>
      <View style={[styles.homeWelcome, styles.homeWelcomeFlexBox]}>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.ningnPartnerAprob}>
            Ningún partner aprobó su préstamo...
          </Text>
          <Text style={styles.aContinuacinSe}>
            A continuación se detallan los términos del préstamo para los que se
            usaron para tu aprobación según sus respuestas y estándares de
            préstamo.
          </Text>
        </View>
        <View style={styles.homeWelcomeChild} />
        <OfferPersonal1 />
        <View style={styles.homeWelcomeChild} />
        <OfferPersonal />
      </View>
      <Pressable
        style={[styles.iconParent, styles.iconParentFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <View style={[styles.headerFooter, styles.headerFooterPosition]}>
        <Header group791={require("../assets/group-79-1.png")} />
        <View style={styles.footer}>
          <View
            style={[styles.tabsWithIconsWrapper, styles.headerFooterPosition]}
          >
            <View style={[styles.tabsWithIcons, styles.iconParentFlexBox]}>
              <Pressable
                style={[styles.solidIconWrapper, styles.solidIconLayout]}
                onPress={() => navigation.navigate("HomePageFilled")}
              >
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon.png")}
                />
              </Pressable>
              <View style={[styles.solidIconContainer, styles.solidIconLayout]}>
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon1.png")}
                />
              </View>
              <Pressable
                style={[styles.solidIconFrame, styles.solidIconLayout]}
                onPress={() => navigation.navigate("ApplicationHome")}
              >
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon2.png")}
                />
              </Pressable>
              <Pressable
                style={styles.solidIconLayout}
                onPress={() => navigation.navigate("Submissions1")}
              >
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon3.png")}
                />
              </Pressable>
            </View>
          </View>
          <HomeIndicator
            homeIndicatorPosition="absolute"
            homeIndicatorHeight="35.79%"
            homeIndicatorTop="64.21%"
            homeIndicatorRight="0%"
            homeIndicatorBottom="0%"
            homeIndicatorLeft="0%"
            homeIndicatorMarginLeft={-67}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWelcomeFlexBox: {
    alignItems: "center",
    width: 428,
  },
  iconParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  headerFooterPosition: {
    top: 0,
    position: "absolute",
  },
  solidIconLayout: {
    minWidth: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
    alignItems: "center",
  },
  ningnPartnerAprob: {
    fontSize: FontSize.header_size,
    lineHeight: 52,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.colorGray_600,
    textAlign: "left",
    alignSelf: "stretch",
  },
  aContinuacinSe: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    width: 380,
    marginTop: 4,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
  },
  homeWelcomeChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    height: 1,
    marginTop: 16,
    alignSelf: "stretch",
  },
  homeWelcome: {
    top: 137,
    left: 0,
    height: 855,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.dominant,
  },
  icon: {
    width: 11,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
  },
  iconParent: {
    top: 101,
    left: 24,
    width: 50,
  },
  solidIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  solidIconWrapper: {
    borderRadius: Border.br_9xl,
  },
  solidIconContainer: {
    display: "none",
    maxWidth: 68,
  },
  solidIconFrame: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_9xl,
  },
  tabsWithIcons: {
    height: "90%",
    top: "10%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_200,
    padding: Padding.p_9xs,
    borderRadius: Border.br_9xl,
    overflow: "hidden",
    width: "100%",
  },
  tabsWithIconsWrapper: {
    left: 109,
    width: 212,
    height: 60,
  },
  footer: {
    height: 95,
    width: 428,
    backgroundColor: Color.dominant,
  },
  headerFooter: {
    marginLeft: -214,
    left: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    width: 428,
    height: 926,
  },
  rejectionHome: {
    flex: 1,
    height: 926,
    width: "100%",
    backgroundColor: Color.dominant,
  },
});

export default RejectionHome;
