import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.menu, styles.menuLayout]}>
      <View style={[styles.menu1, styles.menu1Position]}>
        <View style={[styles.drawers, styles.menu1Position]}>
          <Pressable
            style={[styles.solidIconParent, styles.topFlexBox]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon7.png")}
            />
            <Text style={styles.profile} numberOfLines={1}>
              Editar Profil
            </Text>
          </Pressable>
          <View style={[styles.solidIconParent, styles.topFlexBox]}>
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon8.png")}
            />
            <Text style={styles.profile} numberOfLines={1}>
              Contactar Soporte
            </Text>
          </View>
          <Pressable
            style={[styles.solidIconParent, styles.topFlexBox]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Image
              style={styles.solidIcon}
              resizeMode="cover"
              source={require("../assets/solidicon9.png")}
            />
            <Text style={styles.profile} numberOfLines={1}>
              Cerrar Sesión
            </Text>
          </Pressable>
        </View>
        <View style={[styles.welcome, styles.menu1Position]}>
          <View style={styles.topHeaderWrapper}>
            <View style={[styles.topHeader, styles.topFlexBox]}>
              <View style={[styles.topContainer, styles.topFlexBox]}>
                <Image
                  style={styles.image1RemovebgPreview1Icon}
                  resizeMode="cover"
                  source={require("../assets/image-1removebgpreview-1.png")}
                />
                <Pressable
                  style={styles.icon}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    style={[styles.icon1, styles.menuLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon15.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    width: "100%",
    overflow: "hidden",
  },
  menu1Position: {
    left: 0,
    position: "absolute",
    width: 428,
    backgroundColor: Color.dominant,
  },
  topFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  solidIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  profile: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    color: Color.gray1,
    textAlign: "left",
    marginLeft: 16,
    overflow: "hidden",
    flex: 1,
  },
  solidIconParent: {
    borderRadius: Border.br_7xs,
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  drawers: {
    top: 77,
    borderRadius: Border.br_5xs,
    width: 428,
  },
  image1RemovebgPreview1Icon: {
    width: 98,
    height: 30,
  },
  icon1: {
    borderRadius: Border.br_9xs,
    height: "100%",
    overflow: "hidden",
  },
  icon: {
    width: 26,
    height: 26,
  },
  topContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  topHeader: {
    height: 77,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.dominant,
  },
  topHeaderWrapper: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 428,
  },
  welcome: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_300,
    borderBottomWidth: 1,
    alignItems: "center",
    width: 428,
  },
  menu1: {
    top: 24,
    height: 335,
    width: 428,
  },
  menu: {
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.dominant,
  },
});

export default Menu;
