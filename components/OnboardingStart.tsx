import React from 'react';
import { StyleSheet, View } from "react-native";
import HeaderFooter from "./HeaderFooter";
import ApplicationStart from "./ApplicationStart";
import { Color } from "../GlobalStyles";

const OnboardingStart = () => {
  return (
    <View style={styles.onboardingStart}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo1.png")}
        group791={require("../assets/group-79-11.png")}
        solidIcon={require("../assets/solidicon10.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon2.png")}
        solidIcon3={require("../assets/solidicon3.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="stretch"
        personalApplicationQuestiWidth="unset"
        framePressableBackgroundColor="unset"
        framePressableBorderRadius={28}
        framePressableBackgroundColor1="#e0e8ff"
        framePressableBackgroundColor2="unset"
      />
      <ApplicationStart />
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingStart: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 926,
    overflow: "hidden",
  },
});

export default OnboardingStart;
