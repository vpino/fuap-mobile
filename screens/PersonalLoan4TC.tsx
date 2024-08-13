import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "../components/HeaderFooter";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const PersonalLoan4TC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.personalLoan4tc}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-11.png")}
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
      <View style={styles.plQuestions}>
        <View style={[styles.iconParent, styles.parentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.paso4}>{`Paso 4 `}</Text>
          <Text style={styles.de4}>de 4</Text>
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
        <Pressable
          style={[styles.button, styles.parentFlexBox]}
          onPress={() => navigation.navigate("ApprovalPersonal")}
        >
          <Text style={styles.continuar}>Confirmar y Aplicar</Text>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon8.png")}
          />
        </Pressable>
      </View>
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
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  iconParent: {
    alignItems: "center",
  },
  paso4: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
  },
  de4: {
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
  continuar: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    color: Color.dominant,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
  },
  icon1: {
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
    alignItems: "center",
    overflow: "hidden",
  },
  plQuestions: {
    position: "absolute",
    marginTop: -354,
    top: "50%",
    left: 24,
    width: 380,
  },
  personalLoan4tc: {
    backgroundColor: Color.dominant,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default PersonalLoan4TC;
