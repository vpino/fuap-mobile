import React from 'react';
import { StyleSheet, View, Pressable, ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button3 from "./Button3";

export type FrameComponent1Type = {
  icon?: ImageSourcePropType;
  icon1?: ImageSourcePropType;

  /** Action props */
  onFramePressablePress?: () => void;
};

const FrameComponent1 = ({
  icon,
  icon1,
  onFramePressablePress,
}: FrameComponent1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.buttonParent} onPress={onFramePressablePress}>
      <Button3
        button="Continuar"
        icon={require("../assets/icon8.png")}
        buttonPosition="unset"
        buttonBorderStyle="unset"
        buttonBorderColor="unset"
        buttonBackgroundColor="#333"
        buttonMarginTop="unset"
        buttonFlex={1}
        buttonMarginLeft="unset"
        buttonColor="#fff"
        iconMarginLeft={8}
      />
      <Button3
        button="No disponible"
        icon={require("../assets/icon9.png")}
        buttonPosition="unset"
        buttonBorderStyle="solid"
        buttonBorderColor="#457eff"
        buttonBorderWidth={1}
        buttonBackgroundColor="unset"
        buttonMarginTop="unset"
        buttonFlex={1}
        buttonMarginLeft={32}
        buttonColor="#457eff"
        iconMarginLeft={6}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonParent: {
    width: 380,
    flexDirection: "row",
    marginTop: 16,
  },
});

export default FrameComponent1;
