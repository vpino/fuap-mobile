import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import HeaderFooter from "./HeaderFooter";
import Address1 from "./Address1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Address = () => {
  return (
    <View style={styles.address}>
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
      <View style={styles.profileQuestions}>
        <View style={styles.iconParent}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Address1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    textAlign: "left",
    marginLeft: 6,
  },
  iconParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileQuestions: {
    position: "absolute",
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
  },
  address: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 926,
    overflow: "hidden",
  },
});

export default Address;
