import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HeaderFooter from "../components/HeaderFooter";
import DropdownsTuniAddress from "../components/DropdownsTuniAddress";
import FrameComponent1 from "../components/FrameComponent1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeLoan3address = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeLoan3address}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-1.png")}
        solidIcon={require("../assets/solidicon.png")}
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
      <View style={styles.hlQuestions}>
        <View style={styles.iconParent}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso3}>{`Paso 3 `}</Text>
          <Text style={styles.de8}>de 8</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.porFavorConfirme}>
            Por favor confirme la direcion que quieres comprar?
          </Text>
          <Text style={[styles.confirmeElNumero, styles.textLayout]}>
            Confirme el numero de telefono y la dirrecion sobre la empresa.
          </Text>
        </View>
        <DropdownsTuniAddress
          icon={require("../assets/icon16.png")}
          icon1={require("../assets/icon1.png")}
          dropdownsTuniAddressWidth={380}
          dropdownsTuniAddressMarginTop={16}
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor1="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor2="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor3="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor4="rgba(130, 130, 130, 0.2)"
          showEmail={false}
          showIcon={false}
          showThisIsA={false}
        />
        <FrameComponent1
          icon={require("../assets/icon2.png")}
          icon1={require("../assets/icon17.png")}
          onFramePressablePress={() => navigation.navigate("HomeLoan4price")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    lineHeight: 30,
    marginTop: 16,
    textAlign: "left",
  },
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
    marginLeft: 6,
    textAlign: "left",
  },
  iconParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  paso3: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
  },
  de8: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.helveticaNeue,
  },
  text: {
    fontSize: FontSize.size_xl,
    marginTop: 16,
  },
  porFavorConfirme: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  confirmeElNumero: {
    fontSize: FontSize.subtleMedium_size,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    marginTop: 16,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  hlQuestions: {
    position: "absolute",
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
  },
  homeLoan3address: {
    backgroundColor: Color.dominant,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomeLoan3address;
