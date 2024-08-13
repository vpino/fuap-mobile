import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "../components/HomeIndicator";
import HomeWelcome from "../components/HomeWelcome";
import PersonalLoan from "../components/PersonalLoan";
import PersonalLoan1 from "../components/PersonalLoan1";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomePageEmpty = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePageEmpty}>
      <View style={[styles.headerFooter, styles.textParentPosition]}>
        <View style={styles.welcome}>
          <View style={styles.topHeaderParent}>
            <View style={[styles.topHeader, styles.topHeaderFlexBox]}>
              <View style={[styles.topContainer, styles.topContainerFlexBox]}>
                <Pressable
                  style={styles.groupParent}
                  onPress={() => navigation.navigate("HomePageFilled")}
                >
                  <View
                    style={[styles.vibrantLogoParent, styles.vibrantLayout]}
                  >
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
                      source={require("../assets/group-79-1.png")}
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
        <View style={styles.anchor}>
          <View style={styles.tabsWithIconsWrapper}>
            <View style={[styles.tabsWithIcons, styles.topContainerFlexBox]}>
              <View style={[styles.solidIconWrapper, styles.solidIconLayout]}>
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon6.png")}
                />
              </View>
              <View style={[styles.solidIconContainer, styles.solidIconLayout]}>
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon1.png")}
                />
              </View>
              <Pressable
                style={styles.solidIconLayout}
                onPress={() => navigation.navigate("ApplicationHome")}
              >
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon4.png")}
                />
              </Pressable>
              <Pressable
                style={styles.solidIconLayout}
                onPress={() => navigation.navigate("Submissions")}
              >
                <Image
                  style={styles.solidIcon}
                  resizeMode="cover"
                  source={require("../assets/solidicon3.png")}
                />
              </Pressable>
            </View>
          </View>
          <HomeIndicator
            homeIndicatorPosition="absolute"
            homeIndicatorHeight="35.79%"
            homeIndicatorTop="64.21%"
            homeIndicatorRight="0%"
            homeIndicatorBottom="0%"
            homeIndicatorLeft="0%"
            homeIndicatorMarginLeft={-67}
          />
        </View>
      </View>
      <View style={styles.homeWelcomeParent}>
        <HomeWelcome
          bienvenidoCustomerName={`Bienvenido,
{Customer Name}!`}
          puedesAplicarParaCualquie="Puedes aplicar para cualquier producto ofrecido abajo o realizar cualquier información asociado a su cuenta."
          showPuedesAplicarPara
          homeWelcomePosition="unset"
          homeWelcomeAlignSelf="stretch"
          homeWelcomeTop="unset"
          homeWelcomeLeft="unset"
          homeWelcomeWidth="unset"
        />
        <Pressable
          style={[styles.activeLoansHome, styles.frameChildSpaceBlock]}
          onPress={() => navigation.navigate("OnboardingStart")}
        >
          <PersonalLoan
            misPrstamosActivos="Mis préstamos activos"
            verTodos="Ver todos"
            icon={require("../assets/icon12.png")}
          />
          <PersonalLoan1
            todavaNoTienesUnPrstamoAc="¡Todavía no tienes un préstamo activo!"
            button="Aplicar ahorra"
            icon={require("../assets/icon11.png")}
            showIcon
          />
        </Pressable>
        <View style={[styles.frameChild, styles.frameChildSpaceBlock]} />
        <Pressable
          style={[
            styles.applicationStartpersonalInf,
            styles.frameChildSpaceBlock,
          ]}
          onPress={() => navigation.navigate("OnboardingStart")}
        >
          <PersonalLoan
            misPrstamosActivos="Información Personal"
            verTodos="Cambiar Datos"
            icon={require("../assets/icon12.png")}
            propColor="#457eff"
          />
          <PersonalLoan1
            todavaNoTienesUnPrstamoAc="¡Todavía no he terminado tu onboarding!"
            button="Confirmar información"
            icon={require("../assets/icon13.png")}
            propMarginTop={-34}
            propFontSize={16}
            propFontFamily="Inter-Light"
            showIcon
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textParentPosition: {
    left: "50%",
    position: "absolute",
  },
  topHeaderFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.dominant,
  },
  topContainerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  vibrantLayout: {
    height: 24,
    position: "absolute",
  },
  solidIconLayout: {
    minWidth: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  vibrantLogoIcon: {
    top: 4,
    width: 27,
    height: 20,
    left: 0,
    position: "absolute",
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
    height: "100%",
    width: "100%",
  },
  hambugerMenu: {
    width: 26,
    height: 16,
  },
  topContainer: {
    justifyContent: "space-between",
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
    width: 380,
    marginTop: 4,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    display: "none",
    alignSelf: "stretch",
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
  solidIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  solidIconWrapper: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_9xl,
  },
  solidIconContainer: {
    maxWidth: 68,
    display: "none",
  },
  tabsWithIcons: {
    height: "90%",
    top: "10%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_200,
    padding: Padding.p_9xs,
    borderRadius: Border.br_9xl,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  tabsWithIconsWrapper: {
    left: 109,
    width: 212,
    height: 60,
    top: 0,
    position: "absolute",
  },
  anchor: {
    height: 95,
    width: 428,
    backgroundColor: Color.dominant,
  },
  headerFooter: {
    marginLeft: -214,
    justifyContent: "space-between",
    alignItems: "center",
    width: 428,
    top: 0,
    height: 926,
  },
  activeLoansHome: {
    height: 190,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    height: 1,
  },
  applicationStartpersonalInf: {
    height: 182,
  },
  homeWelcomeParent: {
    top: 109,
    left: 0,
    alignItems: "center",
    width: 428,
    position: "absolute",
  },
  homePageEmpty: {
    overflow: "hidden",
    height: 926,
    width: "100%",
    flex: 1,
    backgroundColor: Color.dominant,
  },
});

export default HomePageEmpty;
