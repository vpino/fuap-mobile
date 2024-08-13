import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import DropdownsTuniAddress from "./DropdownsTuniAddress";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Address1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.address}>
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
      <View style={styles.address}>
        <Text style={styles.porFavorConfirma}>
          Por favor confirma tu dirección principal
        </Text>
        <Text style={styles.porFavorComparta}>
          Por favor comparta calle y numero, numero de apt, provincia,
          municipio, y distrito
        </Text>
        <DropdownsTuniAddress
          icon={require("../assets/icon24.png")}
          icon1={require("../assets/icon1.png")}
          dropdownsTuniAddressWidth={380}
          dropdownsTuniAddressMarginTop={16}
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor1="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor2="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor3="rgba(130, 130, 130, 0.2)"
          frameViewBorderColor4="rgba(130, 130, 130, 0.2)"
          showEmail={false}
          showIcon={false}
          showThisIsA={false}
        />
      </View>
      <Pressable
        style={[styles.button, styles.iconParentFlexBox]}
        onPress={() => navigation.navigate("OwnOrRent")}
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
    width: 380,
    height: 16,
  },
  progressBarItem: {
    backgroundColor: Color.gray1,
    width: 176,
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
  porFavorConfirma: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    textAlign: "left",
    alignSelf: "stretch",
  },
  porFavorComparta: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    textAlign: "left",
    alignSelf: "stretch",
    marginTop: 16,
  },
  address: {
    marginTop: 16,
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

export default Address1;
