import React from 'react';
import { StyleSheet, View } from "react-native";
import FormCreateAccount from "./FormCreateAccount";
import { Color, Padding } from "../GlobalStyles";

const SignUp1 = () => {
  return (
    <View style={styles.signUp}>
      <FormCreateAccount />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: Color.dominant,
    width: 428,
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    marginTop: 32,
  },
});

export default SignUp1;
