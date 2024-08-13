import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button3 from "../components/Button3";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const HomeLoan8TCs = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeLoan8tcs}>
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
      <Pressable
        style={styles.plQuestions}
        onPress={() => navigation.navigate("ApprovalHome")}
      >
        <View style={[styles.iconParent, styles.parentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso8}>{`Paso 8 `}</Text>
          <Text style={styles.de8}>de 8</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.confirmeLosTerminos}>
            Confirme para mandar tu aplicación
          </Text>
        </View>
        <View
          style={[styles.sizedefaultStatecheckedDParent, styles.parentFlexBox]}
        >
          <Image
            style={styles.sizedefaultStatecheckedD}
            resizeMode="cover"
            source={require("../assets/sizedefault-statechecked-darkfalse.png")}
          />
          <Text style={[styles.alHacerClicContainer, styles.textLayout]}>
            <Text style={styles.alHacerClicContainer1}>
              <Text
                style={styles.alHacerClic}
              >{`Al hacer clic, acepta nuestros `}</Text>
              <Text style={styles.trminosYCondiciones}>
                Términos y condiciones
              </Text>
            </Text>
          </Text>
        </View>
        <Button3
          button="Confirmar y Aplicar"
          icon={require("../assets/icon2.png")}
          buttonPosition="unset"
          buttonBorderStyle="unset"
          buttonBorderColor="unset"
          buttonBackgroundColor="#000"
          buttonMarginTop={16}
          buttonMarginLeft="unset"
          buttonColor="#fff"
          iconMarginLeft={8}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 30,
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
    alignItems: "center",
  },
  paso8: {
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
  confirmeLosTerminos: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  sizedefaultStatecheckedD: {
    borderRadius: Border.br_9xs,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  alHacerClic: {
    color: Color.base700LightTertiary,
  },
  trminosYCondiciones: {
    color: Color.colorCornflowerblue,
  },
  alHacerClicContainer1: {
    width: "100%",
  },
  alHacerClicContainer: {
    fontSize: FontSize.subtleMedium_size,
    fontFamily: FontFamily.body,
    display: "flex",
    width: 277,
    marginLeft: 16,
    alignItems: "center",
  },
  sizedefaultStatecheckedDParent: {
    marginTop: 16,
    alignItems: "center",
    width: 380,
  },
  plQuestions: {
    position: "absolute",
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
  },
  homeLoan8tcs: {
    backgroundColor: Color.dominant,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeLoan8TCs;
