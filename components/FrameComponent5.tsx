import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View
        style={[
          styles.personalApplicationQuestionParent,
          styles.frameChildPosition,
        ]}
      >
        <View
          style={[
            styles.personalApplicationQuestion,
            styles.iconParentPosition,
          ]}
        >
          <Text style={styles.ningnPartnerAprob}>
            Ningún partner aprobó su préstamo...
          </Text>
          <Text style={styles.aContinuacinSe}>
            A continuación se detallan los términos del préstamo para los que se
            usaron para tu aprobación según sus respuestas y estándares de
            préstamo.
          </Text>
        </View>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
      </View>
      <Pressable
        style={[styles.iconParent, styles.iconParentPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  iconParentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  ningnPartnerAprob: {
    alignSelf: "stretch",
    fontSize: FontSize.header_size,
    lineHeight: 52,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  aContinuacinSe: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    marginTop: 4,
    textAlign: "left",
    width: 380,
  },
  personalApplicationQuestion: {
    width: 380,
  },
  frameChild: {
    top: 214,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 381,
    height: 1,
  },
  personalApplicationQuestionParent: {
    top: 36,
    height: 214,
    width: 380,
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
    width: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    top: 101,
    left: 24,
    height: 250,
    width: 380,
    position: "absolute",
  },
});

export default FrameComponent5;
