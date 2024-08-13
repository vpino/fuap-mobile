import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import DropdownsTuniTuniDubDrop from "./DropdownsTuniTuniDubDrop";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const ProfileQuestions1 = () => {
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
      <View style={styles.ownrent}>
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
        <View style={styles.ownrent}>
          <Text
            style={[styles.cualEsEl, styles.cualEsElFlexBox]}
          >{`Cual es el tipo de vivienda? `}</Text>
          <Text style={[styles.estasAlquilandoO, styles.cualEsElFlexBox]}>
            Estas alquilando o es dueno de la propiedad?
          </Text>
          <DropdownsTuniTuni
            jeraldinelocofyuiai="Alquilando o Dueno"
            dropdownsTuniTuniPosition="unset"
            dropdownsTuniTuniHeight={56}
            dropdownsTuniTuniTop="unset"
            dropdownsTuniTuniRight="unset"
            dropdownsTuniTuniBottom="unset"
            dropdownsTuniTuniLeft="unset"
            dropdownsTuniTuniWidth={340}
            dropdownsTuniTuniMarginTop={16}
            dropdownsTuniTuniAlignSelf="unset"
            frameViewBorderColor="rgba(130, 130, 130, 0.2)"
            jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
          />
          <Text
            style={[styles.estasAlquilandoO, styles.cualEsElFlexBox]}
          >{`Cuanto tiempo has vivido aquí? `}</Text>
          <DropdownsTuniTuniDubDrop icon={require("../assets/icon23.png")} />
        </View>
        <Pressable
          style={[styles.button, styles.iconParentFlexBox]}
          onPress={() => navigation.navigate("Education")}
        >
          <Text style={styles.continuar}>Continuar</Text>
          <Image
            style={styles.icon4}
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
  cualEsElFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
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
    width: 216,
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
  cualEsEl: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
  },
  estasAlquilandoO: {
    fontSize: FontSize.body_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    alignSelf: "stretch",
    marginTop: 16,
  },
  ownrent: {
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
});

export default ProfileQuestions1;
