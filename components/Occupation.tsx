import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Occupation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.occupation}>
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
        <View style={styles.occupation1}>
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
          <View style={styles.occupation1}>
            <Text
              style={[
                styles.confirmeSuOcupacin,
                styles.porFavorSelecioneFlexBox,
              ]}
            >
              Confirme su ocupación y tipo de empresa?
            </Text>
            <Text
              style={[
                styles.porFavorSelecione,
                styles.porFavorSelecioneFlexBox,
              ]}
            >
              Por favor selecione su ocupacion, y confirme informacion sobre la
              empresa.
            </Text>
            <DropdownsTuniTuni
              jeraldinelocofyuiai="Seleccione una ocupacion"
              dropdownsTuniTuniPosition="unset"
              dropdownsTuniTuniHeight={56}
              dropdownsTuniTuniTop="unset"
              dropdownsTuniTuniRight="unset"
              dropdownsTuniTuniBottom="unset"
              dropdownsTuniTuniLeft="unset"
              dropdownsTuniTuniWidth={380}
              dropdownsTuniTuniMarginTop={16}
              dropdownsTuniTuniAlignSelf="unset"
              frameViewBorderColor="rgba(130, 130, 130, 0.2)"
              jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
            />
            <DropdownsTuniTuni
              jeraldinelocofyuiai="Tipo de Empresa"
              dropdownsTuniTuniPosition="unset"
              dropdownsTuniTuniHeight={56}
              dropdownsTuniTuniTop="unset"
              dropdownsTuniTuniRight="unset"
              dropdownsTuniTuniBottom="unset"
              dropdownsTuniTuniLeft="unset"
              dropdownsTuniTuniWidth={380}
              dropdownsTuniTuniMarginTop={16}
              dropdownsTuniTuniAlignSelf="unset"
              frameViewBorderColor="rgba(130, 130, 130, 0.2)"
              jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
            />
          </View>
          <Pressable
            style={[styles.button, styles.iconParentFlexBox]}
            onPress={() => navigation.navigate("Employment")}
          >
            <Text style={styles.continuar}>Confirmar Cuenta</Text>
            <Image
              style={styles.icon4}
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
  porFavorSelecioneFlexBox: {
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
    width: 317,
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
  confirmeSuOcupacin: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
  },
  porFavorSelecione: {
    fontSize: FontSize.body_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    marginTop: 16,
  },
  occupation1: {
    marginTop: 16,
    width: 380,
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
  occupation: {
    backgroundColor: Color.dominant,
    width: 428,
    height: 926,
    overflow: "hidden",
  },
});

export default Occupation;
