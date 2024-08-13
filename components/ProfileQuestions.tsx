import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Country from "./Country";
import DropdownsTuniTuni from "./DropdownsTuniTuni";
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

const ProfileQuestions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profileQuestions}>
      <View style={styles.iconParentFlexBox}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
      <View style={styles.govId}>
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
          <Text style={styles.cualTipoDe}>
            Cual tipo de documento es mas fácil para usted?
          </Text>
          <Text style={[styles.porFavorComparta, styles.localizacinClr]}>
            Por favor comparta el tipo de documento que tu puedes verificar con
            numero
          </Text>
          <View style={[styles.localizacinParent, styles.iconParentFlexBox]}>
            <Text
              style={[styles.localizacin, styles.continuarTypo]}
              numberOfLines={1}
            >
              Localización:
            </Text>
            <View style={[styles.cryptoParent, styles.buttonFlexBox]}>
              <View style={styles.iconParentFlexBox}>
                <Country />
                <Image
                  style={[styles.chevronDownIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevrondown.png")}
                />
              </View>
              <Image
                style={[styles.icon4, styles.iconSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/icon28.png")}
              />
            </View>
          </View>
          <DropdownsTuniTuni
            jeraldinelocofyuiai="Tipo de documento"
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
          <View style={[styles.a9789653426Wrapper, styles.iconParentFlexBox]}>
            <Text
              style={[styles.a9789653426, styles.continuarTypo]}
              numberOfLines={1}
            >
              A9789653426
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={[styles.continuar, styles.continuarTypo]}>
            Continuar
          </Text>
          <Image
            style={[styles.icon5, styles.iconSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/icon2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    marginLeft: 6,
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
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
  localizacinClr: {
    color: Color.base700LightTertiary,
    textAlign: "left",
  },
  continuarTypo: {
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    fontFamily: FontFamily.textSmall,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  iconSpaceBlock: {
    marginLeft: 8,
    overflow: "hidden",
  },
  icon: {
    width: 16,
    overflow: "hidden",
    height: 16,
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
    width: 108,
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
  cualTipoDe: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    textAlign: "left",
  },
  porFavorComparta: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    alignSelf: "stretch",
    marginTop: 16,
  },
  localizacin: {
    color: Color.base700LightTertiary,
    textAlign: "left",
    overflow: "hidden",
  },
  chevronDownIcon: {
    display: "none",
    marginLeft: 4,
    overflow: "hidden",
  },
  icon4: {
    width: 12,
    height: 12,
  },
  cryptoParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorWhitesmoke_300,
    marginLeft: 16,
    padding: Padding.p_5xs,
  },
  localizacinParent: {
    marginTop: 16,
  },
  a9789653426: {
    flex: 1,
    color: Color.gray1,
    textAlign: "left",
    overflow: "hidden",
  },
  a9789653426Wrapper: {
    borderRadius: StyleVariable.defaultBorderRaius,
    backgroundColor: Color.dominant,
    borderStyle: "solid",
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    height: 56,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    marginTop: 16,
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  continuar: {
    color: Color.dominant,
    textAlign: "center",
  },
  icon5: {
    height: 18,
    width: 18,
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    marginTop: 16,
    overflow: "hidden",
  },
  govId: {
    marginTop: 16,
    width: 380,
  },
  profileQuestions: {
    marginTop: -354,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    width: 380,
    position: "absolute",
  },
});

export default ProfileQuestions;
