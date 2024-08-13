import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import InputField from "./InputField";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const ContactInfo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.contactInfo}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo1.png")}
        group791={require("../assets/group-79-1.png")}
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
        <View style={styles.contactInfo1}>
          <View style={styles.progressBar}>
            <View style={[styles.progressBarChild, styles.progressLayout]} />
            <View style={[styles.progressBarItem, styles.progressLayout]} />
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
          <View style={styles.contactInfo1}>
            <Text style={styles.porFavorComparte}>
              Por favor comparte su informacion de contacto
            </Text>
            <Text style={styles.porFavorComparta}>
              Por favor comparta su numero de telfono y su correo electronico
              para mandarle su confirmacion de prestamo
            </Text>
            <InputField />
            <View style={styles.inputFieldBase}>
              <Text style={[styles.email, styles.emailTypo]}>Email</Text>
              <View style={[styles.iconContainer, styles.thisIsASpaceBlock]}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
                <Text
                  style={[styles.jeraldinelocofyuiai, styles.continuarTypo]}
                  numberOfLines={1}
                >
                  JohnDoe@Email.com
                </Text>
              </View>
              <Text style={[styles.thisIsA, styles.thisIsASpaceBlock]}>
                This is a hint text for the user
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.iconParentFlexBox]}
            onPress={() => navigation.navigate("ApplicationHome")}
          >
            <Text style={[styles.continuar, styles.continuarTypo]}>
              Continuar
            </Text>
            <Image
              style={[styles.icon5, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon2.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  progressLayout: {
    borderRadius: Border.br_61xl,
    left: 0,
    top: 2,
    height: 16,
    width: 380,
    position: "absolute",
  },
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  emailTypo: {
    fontFamily: FontFamily.textSmall,
    display: "none",
    textAlign: "left",
  },
  thisIsASpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  continuarTypo: {
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    fontFamily: FontFamily.textSmall,
  },
  iconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
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
  },
  progressBarItem: {
    backgroundColor: Color.gray1,
  },
  progressBar: {
    height: 20,
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
  porFavorComparte: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    textAlign: "left",
  },
  porFavorComparta: {
    fontSize: FontSize.body_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    marginTop: 16,
    textAlign: "left",
  },
  email: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    alignSelf: "stretch",
    textAlign: "left",
  },
  jeraldinelocofyuiai: {
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
    color: Color.gray,
    overflow: "hidden",
  },
  iconContainer: {
    borderRadius: StyleVariable.defaultBorderRaius,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.dominant,
  },
  thisIsA: {
    display: "none",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
    marginTop: 6,
  },
  inputFieldBase: {
    height: 56,
    display: "none",
    alignSelf: "stretch",
    marginTop: 16,
  },
  contactInfo1: {
    marginTop: 16,
    width: 380,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon5: {
    marginLeft: 8,
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
    top: "50%",
    left: 24,
    width: 380,
    position: "absolute",
  },
  contactInfo: {
    width: 428,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.dominant,
  },
});

export default ContactInfo;
