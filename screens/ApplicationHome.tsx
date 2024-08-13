import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import ProductOffering from "../components/ProductOffering";
import HomeWelcome from "../components/HomeWelcome";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Anchor1 from "../components/Anchor1";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ApplicationHome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.applicationHome}>
      <View
        style={[styles.productOfferingParent, styles.vibrantLogoIconPosition]}
      >
        <ProductOffering
          button="Aplicar Ahorra"
          button1="Aplicar Ahorra"
          button2="Aplicar Ahorra"
          productOfferingPosition="absolute"
          productOfferingMarginTop={-252}
          productOfferingMarginLeft={-214}
          productOfferingTop="50%"
          productOfferingLeft="50%"
          showIcon
        />
        <HomeWelcome
          bienvenidoCustomerName="¡Obtenga la aprobación en menos de 5 minutos!"
          puedesAplicarParaCualquie="Puedes aplicar para cualquier producto ofrecido abajo. Te preguntaremos datos generales, información laboral, y preguntas sobre tu préstamo."
          showPuedesAplicarPara
          homeWelcomePosition="absolute"
          homeWelcomeAlignSelf="unset"
          homeWelcomeTop={0}
          homeWelcomeLeft={0}
          homeWelcomeWidth={428}
        />
      </View>
      <View style={styles.headerFooter}>
        <View style={styles.welcome}>
          <View style={styles.topHeaderParent}>
            <View style={[styles.topHeader, styles.topHeaderFlexBox]}>
              <View style={styles.topContainer}>
                <Pressable
                  style={styles.groupParent}
                  onPress={() => navigation.navigate("HomePageFilled")}
                >
                  <View
                    style={[styles.vibrantLogoParent, styles.vibrantLayout]}
                  >
                    <Image
                      style={[
                        styles.vibrantLogoIcon,
                        styles.vibrantLogoIconPosition,
                      ]}
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
                      source={require("../assets/group-79-11.png")}
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
        <Anchor1
          solidIcon={require("../assets/solidicon.png")}
          solidIcon1={require("../assets/solidicon1.png")}
          solidIcon2={require("../assets/solidicon2.png")}
          solidIcon3={require("../assets/solidicon3.png")}
          framePressableBackgroundColor="unset"
          framePressableBorderRadius={28}
          framePressableBackgroundColor1="#e0e8ff"
          framePressableBackgroundColor2="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vibrantLogoIconPosition: {
    position: "absolute",
    left: 0,
  },
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
  productOfferingParent: {
    bottom: -83,
    height: 900,
    width: 428,
    left: 0,
  },
  vibrantLogoIcon: {
    top: 4,
    width: 27,
    height: 20,
    left: 0,
  },
  vibrant: {
    left: 34,
    fontSize: FontSize.size_sm_5,
    letterSpacing: 6.5,
    fontFamily: FontFamily.noirPro,
    color: Color.gray1,
    width: 140,
    textAlign: "left",
    top: 0,
    height: 24,
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
    justifyContent: "center",
    position: "absolute",
  },
  groupParent: {
    width: 165,
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  hambugerMenu: {
    width: 26,
    height: 16,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
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
    marginTop: 4,
    width: 380,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    display: "none",
    width: 380,
  },
  topHeaderParent: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 428,
  },
  welcome: {
    paddingTop: Padding.p_5xl,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.dominant,
  },
  headerFooter: {
    marginLeft: -214,
    justifyContent: "space-between",
    alignItems: "center",
    left: "50%",
    top: 0,
    width: 428,
    position: "absolute",
    height: 926,
  },
  applicationHome: {
    height: 926,
    flex: 1,
    width: "100%",
    backgroundColor: Color.dominant,
  },
});

export default ApplicationHome;
