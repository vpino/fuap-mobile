import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import SignUp1 from "./SignUp1";
import { Color } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={[styles.signup, styles.signupFlexBox]}>
      <SignUp1 />
    </View>
  );
};

const styles = StyleSheet.create({
  signupFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.dominant,
  },
  signupFlexBox1: {
    alignItems: "center",
    width: 428,
  },
  topFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  vibrantLayout: {
    height: 24,
    position: "absolute",
  },
  signup: {
    height: 926,
    overflow: "hidden",
    alignItems: "center",
    width: 428,
  },
});

export default Signup;
