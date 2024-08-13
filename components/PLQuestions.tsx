import React from 'react';
import Button3 from "./Button3";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const PLQuestions = () => {
  return (
    <View style={styles.personal4Tc}>
      <View style={[styles.iconParent, styles.parentFlexBox]}>
        <Image
          style={[styles.icon, styles.iconLayout]}
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
          Confirme los terminos y condiciones
        </Text>
      </View>
      <View
        style={[styles.sizedefaultStatecheckedDParent, styles.parentFlexBox]}
      >
        <View style={styles.sizedefaultStatecheckedD}>
          <Image
            style={[styles.containerIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/container.png")}
          />
        </View>
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
        button="Continuar"
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    width: 16,
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 30,
    textAlign: "left",
  },
  icon: {
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
  containerIcon: {
    height: 13,
    overflow: "hidden",
  },
  sizedefaultStatecheckedD: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderRadius: Border.br_9xs,
    backgroundColor: "#1064ca",
    width: 30,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingTop: 5,
    paddingBottom: Padding.p_7xs,
    overflow: "hidden",
    alignItems: "center",
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
    fontSize: FontSize.body_size,
    display: "flex",
    width: 277,
    marginLeft: 16,
    fontFamily: FontFamily.textSmall,
    alignItems: "center",
  },
  sizedefaultStatecheckedDParent: {
    marginTop: 16,
    alignItems: "center",
    width: 380,
  },
  personal4Tc: {
    width: 380,
  },
});

export default PLQuestions;
