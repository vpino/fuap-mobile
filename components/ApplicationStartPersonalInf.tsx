import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import PersonalLoan from "./PersonalLoan";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ApplicationStartPersonalInf = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.applicationStartpersonalInf}
      onPress={() => navigation.navigate("Profile")}
    >
      <PersonalLoan
        misPrstamosActivos="Información Personal"
        verTodos="Cambiar Datos"
        icon={require("../assets/icon20.png")}
        propColor="#000"
      />
      <View style={styles.productOffering}>
        <View style={styles.personalLoan}>
          <View style={styles.personalText}>
            <View style={styles.personalText}>
              <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
            </View>
            <Text style={[styles.roadStreetMiami, styles.roadStreetMiamiTypo]}>
              01/01/2000 | 10000 Road street Miami, FL 33155
            </Text>
          </View>
          <View style={[styles.personalLoanChild, styles.personalSpaceBlock]} />
          <View
            style={[styles.personalTextParent, styles.mastersWrapperFlexBox]}
          >
            <View>
              <Text
                style={[styles.nivelDeEducacin, styles.roadStreetMiamiTypo]}
              >
                Nivel de Educación:
              </Text>
              <View
                style={[styles.mastersWrapper, styles.mastersWrapperFlexBox]}
              >
                <Text style={[styles.masters, styles.mastersLayout]}>
                  Master’s
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={[styles.nivelDeEducacin, styles.roadStreetMiamiTypo]}
              >
                Estatus de propiedad:
              </Text>
              <View
                style={[styles.mastersWrapper, styles.mastersWrapperFlexBox]}
              >
                <Text style={[styles.masters, styles.mastersLayout]}>
                  Dueño
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  johnDoeTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  roadStreetMiamiTypo: {
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  personalSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  mastersWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  mastersLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  johnDoe: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  personalText: {
    alignSelf: "stretch",
  },
  roadStreetMiami: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  personalLoanChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    height: 1,
  },
  nivelDeEducacin: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  masters: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  mastersWrapper: {
    width: 110,
    marginTop: 4,
  },
  personalTextParent: {
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  personalLoan: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
  },
  productOffering: {
    marginTop: -63,
    top: "50%",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  applicationStartpersonalInf: {
    top: 564,
    width: 428,
    height: 190,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
});

export default ApplicationStartPersonalInf;
