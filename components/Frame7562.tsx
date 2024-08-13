import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type FrameType = {
  style?: StyleProp<ViewStyle>;
};

const Frame = ({ style }: FrameType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.groupParent, style]}
      onPress={() => navigation.navigate("HomePageFilled")}
    >
      <View style={[styles.vibrantLogoParent, styles.vibrantLayout]}>
        <Image
          style={styles.vibrantLogoIcon}
          resizeMode="cover"
          source={require("../assets/vibrant-logo1.png")}
        />
        <Text style={[styles.vibrant, styles.vibrantLayout]}>VIBRANT</Text>
      </View>
      <View style={styles.textParent}>
        <Text style={styles.text}>Powered by</Text>
        <Image
          style={styles.group791}
          resizeMode="cover"
          source={require("../assets/group-79-1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: Color.dominant,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  groupParent: {
    width: 165,
    height: 32,
  },
});

export default Frame;
