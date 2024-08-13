import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import InputFieldBase from "./InputFieldBase";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Name1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.name}>
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
        <View style={styles.iconParentFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressBarChild, styles.progressPosition]} />
          <View style={[styles.progressBarItem, styles.progressPosition]} />
        </View>
        <View style={[styles.breadcrumbs, styles.iconParentFlexBox]}>
          <View style={styles.iconParentFlexBox}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon21.png")}
            />
            <Text style={[styles.home, styles.backTypo]}>Home</Text>
          </View>
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon22.png")}
          />
          <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/solidicon11.png")}
            />
            <Text style={[styles.home, styles.backTypo]}>Aplicaciones</Text>
          </View>
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon22.png")}
          />
          <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/solidicon12.png")}
            />
            <Text style={[styles.home, styles.backTypo]}>Crear Cuenta</Text>
          </View>
        </View>
        <View style={styles.personalApplicationQuestion}>
          <Text style={[styles.cualEsTu, styles.cualEsTuFlexBox]}>
            Cual es tu nombre oficial?
          </Text>
          <Text style={[styles.porFavorComparta, styles.cualEsTuFlexBox]}>
            Por favor comparta el nombre en su licencia, pasaporte, o cualquier
            documento gubernamental.
          </Text>
          <InputFieldBase
            icon={require("../assets/icon1.png")}
            jeraldinelocofyuiai="Primer Nombre"
            showEmail={false}
            showIcon={false}
            showThisIsA={false}
            inputFieldBasePosition="unset"
            inputFieldBaseWidth="unset"
            inputFieldBaseHeight={56}
            inputFieldBaseTop="unset"
            inputFieldBaseRight="unset"
            inputFieldBaseBottom="unset"
            inputFieldBaseLeft="unset"
            inputFieldBaseAlignSelf="stretch"
            inputFieldBaseMarginTop={16}
            frameViewFlex={1}
            frameViewBorderColor="rgba(130, 130, 130, 0.2)"
            jeraldinelocofyuiaiColor="#676f82"
          />
          <InputFieldBase
            icon={require("../assets/icon1.png")}
            jeraldinelocofyuiai="Oficial Nombre"
            showEmail={false}
            showIcon={false}
            showThisIsA={false}
            inputFieldBasePosition="unset"
            inputFieldBaseWidth="unset"
            inputFieldBaseHeight={56}
            inputFieldBaseTop="unset"
            inputFieldBaseRight="unset"
            inputFieldBaseBottom="unset"
            inputFieldBaseLeft="unset"
            inputFieldBaseAlignSelf="stretch"
            inputFieldBaseMarginTop={16}
            frameViewFlex={1}
            frameViewBorderColor="rgba(130, 130, 130, 0.2)"
            jeraldinelocofyuiaiColor="#676f82"
          />
        </View>
        <Pressable
          style={[styles.button, styles.iconParentFlexBox]}
          onPress={() => navigation.navigate("GovID")}
        >
          <Text style={styles.continuar}>Continuar</Text>
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/icon8.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    marginLeft: 6,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  progressPosition: {
    borderRadius: Border.br_61xl,
    left: 0,
    top: 2,
    height: 16,
    position: "absolute",
  },
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cualEsTuFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    color: Color.gray,
  },
  progressBarChild: {
    backgroundColor: Color.lightBorder,
    width: 380,
  },
  progressBarItem: {
    backgroundColor: Color.gray1,
    width: 56,
  },
  progressBar: {
    height: 20,
    marginTop: 16,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  home: {
    color: Color.black,
  },
  icon2: {
    width: 10,
    height: 10,
    marginLeft: 11,
    overflow: "hidden",
  },
  solidIconParent: {
    marginLeft: 11,
  },
  breadcrumbs: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_5xs,
    marginTop: 16,
  },
  cualEsTu: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
  },
  porFavorComparta: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    marginTop: 16,
    alignSelf: "stretch",
  },
  personalApplicationQuestion: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  continuar: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.dominant,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
  },
  icon4: {
    width: 18,
    height: 18,
    marginLeft: 8,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    marginTop: 16,
    overflow: "hidden",
  },
  profileQuestions: {
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
    position: "absolute",
  },
  name: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 926,
    overflow: "hidden",
  },
});

export default Name1;
