import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const TopHeader = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.logovibrant, styles.textParentFlexBox]}>
      <View style={styles.topContainer}>
        <View style={styles.groupParent}>
          <View style={[styles.vibrantLogoParent, styles.vibrantLayout]}>
            <Image
              style={styles.vibrantLogoIcon}
              resizeMode="cover"
              source={require("../assets/vibrant-logo2.png")}
            />
            <Text style={[styles.vibrant, styles.vibrantLayout]}>VIBRANT</Text>
          </View>
          <View style={[styles.textParent, styles.textParentFlexBox]}>
            <Text style={styles.text}>Powered by</Text>
            <Image
              style={styles.group791}
              resizeMode="cover"
              source={require("../assets/group-79-13.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.hambugerMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hambugermenu.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textParentFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.dominant,
    alignItems: "center",
    flexDirection: "row",
  },
  vibrantLayout: {
    height: 24,
    position: "absolute",
  },
  vibrantLogoIcon: {
    top: 4,
    width: 27,
    height: 20,
    left: 0,
    position: "absolute",
  },
  vibrant: {
    top: 0,
    left: 34,
    fontSize: FontSize.size_sm_5,
    letterSpacing: 6.5,
    fontFamily: FontFamily.noirPro,
    color: Color.gray1,
    width: 140,
    textAlign: "left",
  },
  vibrantLogoParent: {
    top: 2,
    width: 174,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_5xs_5,
    lineHeight: 12,
    fontWeight: "300",
    fontFamily: FontFamily.helvetica,
    color: Color.black,
    opacity: 0.6,
    textAlign: "left",
  },
  group791: {
    width: 31,
    height: 8,
    marginLeft: 1.7,
  },
  textParent: {
    marginLeft: -48.5,
    top: 18,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    width: 165,
    height: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  hambugerMenu: {
    width: 26,
    height: 16,
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  logovibrant: {
    width: 428,
    height: 77,
    padding: Padding.p_5xl,
  },
});

export default TopHeader;
