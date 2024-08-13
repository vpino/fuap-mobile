import React from 'react';
import { StyleSheet, View, Image, Pressable } from "react-native";
import OfferPersonal from "../components/OfferPersonal";
import OfferPersonal2 from "../components/OfferPersonal2";
import FrameComponent5 from "../components/FrameComponent5";
import Header from "../components/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "../components/HomeIndicator";
import { Padding, Color, Border } from "../GlobalStyles";

const RejectionPersonal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rejectionPersonal}>
      <OfferPersonal
        propMarginTop="unset"
        propPosition="absolute"
        propTop={703}
        propLeft={24}
      />
      <View style={styles.rejectionPersonalChild} />
      <OfferPersonal2 />
      <FrameComponent5 />
      <View style={[styles.headerFooter, styles.headerFooterFlexBox]}>
        <Header group791={require("../assets/group-79-11.png")} />
        <View style={styles.footer}>
          <View style={styles.tabsWithIconsWrapper}>
            <View style={[styles.tabsWithIcons, styles.headerFooterFlexBox]}>
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
  headerFooterFlexBox: {
    alignItems: "center",
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
  rejectionPersonalChild: {
    top: 687,
    left: 24,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 381,
    height: 1,
    position: "absolute",
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
    flexDirection: "row",
    padding: Padding.p_9xs,
    overflow: "hidden",
    borderRadius: Border.br_9xl,
    width: "100%",
  },
  tabsWithIconsWrapper: {
    left: 109,
    width: 212,
    height: 60,
    top: 0,
    position: "absolute",
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
    width: 428,
    top: 0,
    height: 926,
  },
  rejectionPersonal: {
    flex: 1,
    height: 926,
    width: "100%",
    backgroundColor: Color.dominant,
  },
});

export default RejectionPersonal;
