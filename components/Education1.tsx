import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Education1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.education}>
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
          <Text style={styles.home}>Home</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon22.png")}
        />
        <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/solidicon11.png")}
          />
          <Text style={styles.home}>Aplicaciones</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon22.png")}
        />
        <View style={[styles.solidIconParent, styles.iconParentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/solidicon12.png")}
          />
          <Text style={styles.home}>Crear Cuenta</Text>
        </View>
      </View>
      <View style={styles.education}>
        <Text style={styles.culEsTu}>
          ¿Cuál es tu nivel más alto completado de educación?
        </Text>
        <Text style={styles.confirmeLaEscuela}>
          Confirme la escuela, el área de estudio y la fecha de graduación. La
          graduación esperada está bien.
        </Text>
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Universidad"
          dropdownsTuniTuniPosition="unset"
          dropdownsTuniTuniHeight={56}
          dropdownsTuniTuniTop="unset"
          dropdownsTuniTuniRight="unset"
          dropdownsTuniTuniBottom="unset"
          dropdownsTuniTuniLeft="unset"
          dropdownsTuniTuniWidth={379}
          dropdownsTuniTuniMarginTop={16}
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Area de estudio"
          dropdownsTuniTuniPosition="unset"
          dropdownsTuniTuniHeight={56}
          dropdownsTuniTuniTop="unset"
          dropdownsTuniTuniRight="unset"
          dropdownsTuniTuniBottom="unset"
          dropdownsTuniTuniLeft="unset"
          dropdownsTuniTuniWidth={379}
          dropdownsTuniTuniMarginTop={16}
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Ano de graduacion"
          dropdownsTuniTuniPosition="unset"
          dropdownsTuniTuniHeight={56}
          dropdownsTuniTuniTop="unset"
          dropdownsTuniTuniRight="unset"
          dropdownsTuniTuniBottom="unset"
          dropdownsTuniTuniLeft="unset"
          dropdownsTuniTuniWidth={379}
          dropdownsTuniTuniMarginTop={16}
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
      </View>
      <Pressable
        style={[styles.button, styles.iconParentFlexBox]}
        onPress={() => navigation.navigate("Occupation")}
      >
        <Text style={styles.continuar}>Continuar</Text>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/icon2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  progressPosition: {
    borderRadius: Border.br_61xl,
    left: 0,
    top: 2,
    position: "absolute",
    height: 16,
  },
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  progressBarChild: {
    backgroundColor: Color.lightBorder,
    height: 16,
    width: 380,
  },
  progressBarItem: {
    backgroundColor: Color.gray1,
    width: 262,
    height: 16,
  },
  progressBar: {
    height: 20,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.black,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  icon1: {
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
  culEsTu: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    textAlign: "left",
    alignSelf: "stretch",
  },
  confirmeLaEscuela: {
    fontSize: FontSize.body_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    textAlign: "left",
    alignSelf: "stretch",
    marginTop: 16,
  },
  education: {
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
  icon3: {
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
    overflow: "hidden",
    marginTop: 16,
  },
});

export default Education1;
