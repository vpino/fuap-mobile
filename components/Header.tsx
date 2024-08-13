import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

export type HeaderType = {
  group791?: ImageSourcePropType;
};

const Header = ({ group791 }: HeaderType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.header}>
      <View style={styles.topHeaderParent}>
        <View style={[styles.topHeader, styles.topHeaderFlexBox]}>
          <View style={styles.topContainer}>
            <Pressable
              style={styles.groupParent}
              onPress={() => navigation.navigate("HomePageFilled")}
            >
              <View style={[styles.vibrantLogoParent, styles.vibrantLayout]}>
                <Image
                  style={styles.vibrantLogoIcon}
                  resizeMode="cover"
                  source={require("../assets/vibrant-logo.png")}
                />
                <Text style={[styles.vibrant, styles.vibrantLayout]}>
                  VIBRANT
                </Text>
              </View>
              <View style={[styles.textParent, styles.topHeaderFlexBox]}>
                <Text style={styles.text}>Powered by</Text>
                <Image
                  style={styles.group791}
                  resizeMode="cover"
                  source={group791}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.hambugerMenu}
              onPress={() => navigation.navigate("Menu")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/hambugermenu.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.bienvenidoCustomerName}>{`Bienvenido,
{Customer Name}!`}</Text>
          <Text style={styles.puedesAplicarPara}>
            Puedes aplicar para cualquier producto ofrecido abajo. Te
            preguntaremos datos generales, informacion laboral, y preguntas
            sobre tu prestamo.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeaderFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.dominant,
  },
  vibrantLayout: {
    height: 24,
    position: "absolute",
  },
  vibrantLogoIcon: {
    top: 4,
    width: 27,
    height: 20,
    left: 0,
    position: "absolute",
  },
  vibrant: {
    top: 0,
    left: 34,
    fontSize: FontSize.size_sm_5,
    letterSpacing: 6.5,
    fontFamily: FontFamily.noirPro,
    color: Color.gray1,
    width: 140,
    textAlign: "left",
  },
  vibrantLogoParent: {
    top: 2,
    width: 174,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_5xs_5,
    lineHeight: 12,
    fontWeight: "300",
    fontFamily: FontFamily.helvetica,
    color: Color.black,
    opacity: 0.6,
    textAlign: "left",
  },
  group791: {
    width: 31,
    height: 8,
    marginLeft: 1.7,
  },
  textParent: {
    marginLeft: -48.5,
    top: 18,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    width: 165,
    height: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  hambugerMenu: {
    width: 26,
    height: 16,
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  topHeader: {
    height: 77,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    alignSelf: "stretch",
  },
  bienvenidoCustomerName: {
    fontSize: FontSize.header_size,
    lineHeight: 52,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
    textAlign: "left",
    alignSelf: "stretch",
  },
  puedesAplicarPara: {
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    width: 380,
    marginTop: 4,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    display: "none",
    alignSelf: "stretch",
  },
  topHeaderParent: {
    width: 428,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
  },
  header: {
    paddingTop: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.dominant,
    alignSelf: "stretch",
  },
});

export default Header;
