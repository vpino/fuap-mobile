import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type HambugerMenuType = {
  style?: StyleProp<ViewStyle>;
};

const HambugerMenu = ({ style }: HambugerMenuType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.hambugerMenu, style]}
      onPress={() => navigation.navigate("Menu")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/hambugermenu1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  hambugerMenu: {
    width: 26,
    height: 16,
  },
});

export default HambugerMenu;
