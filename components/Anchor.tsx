import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "./HomeIndicator";
import { Padding, Color, Border } from "../GlobalStyles";
import { Image, Pressable, StyleSheet, View } from 'react-native';

const Anchor = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuhome}>
      <View style={styles.tabsWithIconsWrapper}>
        <View style={styles.tabsWithIcons}>
          <Pressable
            style={[styles.solidIconWrapper, styles.solidIconLayout]}
            onPress={() => navigation.navigate("HomePageFilled")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon20.png")}
            />
          </Pressable>
          <View style={[styles.solidIconContainer, styles.solidIconLayout]}>
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon17.png")}
            />
          </View>
          <Pressable
            style={styles.solidIconLayout}
            onPress={() => navigation.navigate("ApplicationHome")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon18.png")}
            />
          </Pressable>
          <Pressable
            style={styles.solidIconLayout}
            onPress={() => navigation.navigate("Submissions1")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon21.png")}
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
  );
};

const styles = StyleSheet.create({
  solidIconLayout: {
    minWidth: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
    alignItems: "center",
  },
  solidIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  solidIconWrapper: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_9xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
  },
  solidIconContainer: {
    display: "none",
    maxWidth: 68,
  },
  tabsWithIcons: {
    height: "90%",
    width: "100%",
    top: "10%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_200,
    flexDirection: "row",
    padding: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  tabsWithIconsWrapper: {
    top: 0,
    left: 109,
    width: 212,
    height: 60,
    position: "absolute",
  },
  menuhome: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 95,
  },
});

export default Anchor;
