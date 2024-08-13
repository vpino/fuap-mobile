import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import HomeWelcome from "./HomeWelcome";
import FrameComponent6 from "./FrameComponent6";
import Badge2 from "./Badge2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Step2AccountConnectedPersonalRepayment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.step2AccountConnectedPerso}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo3.png")}
        group791={require("../assets/group-79-1.png")}
        solidIcon={require("../assets/solidicon13.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon4.png")}
        solidIcon3={require("../assets/solidicon14.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="stretch"
        personalApplicationQuestiWidth="unset"
        framePressableBackgroundColor="unset"
        framePressableBackgroundColor1="unset"
        framePressableBorderRadius1={28}
        framePressableBackgroundColor2="#e0e8ff"
      />
      <View style={[styles.homeWelcomeWrapper, styles.wrapperPosition]}>
        <HomeWelcome
          bienvenidoCustomerName="Pagar tu Préstamo"
          puedesAplicarParaCualquie="Aquí están tus préstamos activos. Puedes pagar y ver el status de cada préstamo fundado."
          showPuedesAplicarPara={false}
          homeWelcomePosition="unset"
          homeWelcomeAlignSelf="stretch"
          homeWelcomeTop="unset"
          homeWelcomeLeft="unset"
          homeWelcomeWidth="unset"
        />
      </View>
      <View style={[styles.personalLoan, styles.iconParentPosition]}>
        <View style={styles.personalText}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={[styles.prstamoPersonalWrapper, styles.wrapperPosition]}
              >
                <Text style={styles.prstamoPersonal}>Préstamo Personal</Text>
              </View>
              <Text style={[styles.bancoMercantil, styles.text5Typo]}>
                #10358405 | Banco Mercantil
              </Text>
            </View>
            <View style={styles.personalText1}>
              <View
                style={[
                  styles.personalTextChild,
                  styles.personalTextChildLayout,
                ]}
              />
            </View>
          </View>
        </View>
        <View style={[styles.personalLoanChild, styles.personalSpaceBlock]} />
        <View style={[styles.personalTextParent, styles.personalSpaceBlock]}>
          <View style={styles.personalText2}>
            <Text style={styles.fechaDePago}>Fecha de pago:</Text>
            <View
              style={[
                styles.deDiciembrePendienteWrapper,
                styles.personalTextChildLayout,
              ]}
            >
              <Text style={[styles.deDiciembreContainer, styles.backTypo]}>
                <Text style={styles.deDiciembre}>{`10 de Diciembre | `}</Text>
                <Text style={styles.pendiente}>Pendiente</Text>
              </Text>
            </View>
          </View>
          <View style={styles.pagoTotalAdeudadoParent}>
            <Text style={[styles.pagoTotalAdeudado, styles.textTypo]}>
              Pago total adeudado:
            </Text>
            <Text style={[styles.text, styles.textTypo]}>$1,104.24</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.step2AccountConnectedPersoChild, styles.buttonPosition]}
      />
      <FrameComponent6 />
      <View style={[styles.textWrapper, styles.iconParentPosition]}>
        <Text style={styles.text1}>
          <Text style={styles.paso2}>
            <Text style={styles.paso21}>Paso 2</Text>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.de3}>de 3</Text>
        </Text>
      </View>
      <View style={styles.tables}>
        <View style={styles.headerRow}>
          <Text style={[styles.text3, styles.text3Typo]}>#</Text>
          <Text style={[styles.text3, styles.text3Typo]}>Tipo de Préstamo</Text>
          <Text style={styles.text3Typo}>{`Fecha `}</Text>
          <Text style={styles.text3Typo}>{`Monto  `}</Text>
          <Text style={styles.text3Typo}>Resultado</Text>
        </View>
        <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
          <Text style={[styles.text4, styles.backTypo]}>1</Text>
          <Text style={[styles.eleanorPena, styles.text5Typo]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>9/18/2024</Text>
          <Text style={[styles.text5, styles.text5Typo]}>$3,000</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot.png")}
              text="Completado"
              badgePosition="unset"
              badgeBackgroundColor="#16ae65"
              badgeBorderStyle="unset"
              badgeBorderColor="unset"
              textColor="#16ae65"
            />
          </View>
        </View>
        <View style={styles.dataSpaceBlock}>
          <Text style={[styles.text4, styles.backTypo]}>2</Text>
          <Text style={[styles.brooklynSimmons, styles.text5Typo]}>
            Préstamo de Casa
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>10/28/2024</Text>
          <Text style={[styles.text5, styles.text5Typo]}>$273,000</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot1.png")}
              text="En Progreso"
              badgePosition="unset"
              badgeBackgroundColor="#fff"
              badgeBorderStyle="solid"
              badgeBorderColor="#333"
              badgeBorderWidth={1}
              textColor="#333"
            />
          </View>
        </View>
        <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
          <Text style={[styles.text4, styles.backTypo]}>3</Text>
          <Text style={[styles.eleanorPena, styles.text5Typo]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>9/4/2023</Text>
          <Text style={[styles.france, styles.text5Typo]}>$10,000</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot1.png")}
              text="En Progreso"
              badgePosition="unset"
              badgeBackgroundColor="#fff"
              badgeBorderStyle="solid"
              badgeBorderColor="#333"
              badgeBorderWidth={1}
              textColor="#333"
            />
          </View>
        </View>
        <View style={styles.dataSpaceBlock}>
          <Text style={[styles.text4, styles.backTypo]}>4</Text>
          <Text style={[styles.eleanorPena, styles.text5Typo]}>
            Tarjeta de Crédito
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>7/27/2023</Text>
          <Text style={[styles.france, styles.text5Typo]}>--</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot.png")}
              text="Completado"
              badgePosition="unset"
              badgeBackgroundColor="#16ae65"
              badgeBorderStyle="unset"
              badgeBorderColor="unset"
              textColor="#16ae65"
            />
          </View>
        </View>
        <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
          <Text style={[styles.text4, styles.backTypo]}>5</Text>
          <Text style={[styles.eleanorPena, styles.text5Typo]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>2/11/2023</Text>
          <Text style={[styles.france, styles.text5Typo]}>$5,000</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot2.png")}
              text="Rechazado"
              badgePosition="unset"
              badgeBackgroundColor="#f4485d"
              badgeBorderStyle="unset"
              badgeBorderColor="unset"
              textColor="#f4485d"
            />
          </View>
        </View>
        <View style={styles.dataSpaceBlock}>
          <Text style={[styles.text4, styles.backTypo]}>6</Text>
          <Text style={[styles.eleanorPena, styles.text5Typo]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>4/21/2022</Text>
          <Text style={[styles.france, styles.text5Typo]}>$2,500</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot.png")}
              text="Completado"
              badgePosition="unset"
              badgeBackgroundColor="#16ae65"
              badgeBorderStyle="unset"
              badgeBorderColor="unset"
              textColor="#16ae65"
            />
          </View>
        </View>
        <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
          <Text style={[styles.text4, styles.backTypo]}>7</Text>
          <Text style={[styles.codyFisher, styles.text5Typo]}>
            Tarjeta de Crédito
          </Text>
          <Text style={[styles.france, styles.text5Typo]}>4/4/2022</Text>
          <Text style={[styles.france, styles.text5Typo]}>--</Text>
          <View style={styles.labelwrapper}>
            <Badge2
              iconDot={require("../assets/icon--dot2.png")}
              text="Rechazado"
              badgePosition="unset"
              badgeBackgroundColor="#f4485d"
              badgeBorderStyle="unset"
              badgeBorderColor="unset"
              textColor="#f4485d"
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("Step3ConnectedPersonalRepayment")}
      >
        <Text style={styles.button1}>{`Continuar al ultimo paso -->`}</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon25.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconParent, styles.iconParentPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 0,
    position: "absolute",
  },
  iconParentPosition: {
    left: 24,
    position: "absolute",
  },
  text5Typo: {
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  personalTextChildLayout: {
    width: 110,
    alignItems: "center",
  },
  personalSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  backTypo: {
    color: Color.gray,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  textTypo: {
    color: Color.slate900,
    lineHeight: 24,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  buttonPosition: {
    left: "50%",
    position: "absolute",
  },
  text3Typo: {
    color: Color.darkGray,
    flex: 1,
    fontFamily: FontFamily.textLargeBolder,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    fontWeight: "600",
  },
  dataSpaceBlock: {
    marginTop: 8,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  homeWelcomeWrapper: {
    top: 137,
    alignItems: "center",
    width: 428,
  },
  prstamoPersonal: {
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textLargeBolder_size,
    alignSelf: "stretch",
  },
  prstamoPersonalWrapper: {
    top: 0,
    width: 159,
  },
  bancoMercantil: {
    top: 28,
    lineHeight: 16,
    fontFamily: FontFamily.body,
    color: Color.colorGray_500,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    height: 44,
    width: 159,
  },
  personalTextChild: {
    height: 20,
    justifyContent: "flex-end",
  },
  personalText1: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  frameParent: {
    width: 348,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  personalText: {
    width: 159,
  },
  personalLoanChild: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
  },
  fechaDePago: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontFamily: FontFamily.body,
    textAlign: "left",
    color: Color.colorGray_500,
    alignSelf: "stretch",
  },
  deDiciembre: {
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  pendiente: {
    fontFamily: FontFamily.textSmall,
  },
  deDiciembreContainer: {
    lineHeight: 20,
    color: Color.gray,
  },
  deDiciembrePendienteWrapper: {
    marginTop: 4,
    flexDirection: "row",
  },
  personalText2: {
    alignSelf: "stretch",
  },
  pagoTotalAdeudado: {
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.subtleMedium_size,
    textAlign: "right",
  },
  pagoTotalAdeudadoParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  personalTextParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  personalLoan: {
    top: 201,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    width: 380,
  },
  step2AccountConnectedPersoChild: {
    marginLeft: -190.5,
    top: 373,
    width: 381,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
  },
  paso21: {
    color: Color.black,
  },
  text2: {
    color: Color.colorMediumslateblue,
  },
  paso2: {
    fontWeight: "700",
    fontFamily: FontFamily.header,
  },
  de3: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.body,
  },
  text1: {
    lineHeight: 30,
    textAlign: "left",
    fontSize: FontSize.textLargeBolder_size,
  },
  textWrapper: {
    top: 397,
    flexDirection: "row",
    width: 380,
    alignItems: "center",
  },
  text3: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  headerRow: {
    borderBottomWidth: 0.5,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorLavender,
    borderStyle: "solid",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  text4: {
    flex: 1,
    display: "none",
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
    alignItems: "center",
  },
  eleanorPena: {
    width: 160,
    display: "none",
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
    alignItems: "center",
  },
  france: {
    flex: 1,
    color: Color.black,
    fontFamily: FontFamily.textSmall,
  },
  text5: {
    display: "flex",
    flex: 1,
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelwrapper: {
    height: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  dataRow01: {
    backgroundColor: Color.colorGhostwhite_100,
  },
  brooklynSimmons: {
    flex: 1,
    display: "none",
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    alignSelf: "stretch",
    alignItems: "center",
  },
  codyFisher: {
    flex: 1,
    display: "none",
    color: Color.black,
    fontFamily: FontFamily.textSmall,
  },
  tables: {
    top: 736,
    left: 36,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    height: 427,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    display: "none",
    borderColor: Color.colorLavender,
    borderStyle: "solid",
    width: 380,
    position: "absolute",
    backgroundColor: Color.dominant,
  },
  button1: {
    color: Color.dominant,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textLargeBolder_size,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    display: "none",
    overflow: "hidden",
  },
  button: {
    marginLeft: -190,
    top: 761,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray1,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    flexDirection: "row",
    width: 380,
    alignItems: "center",
    overflow: "hidden",
  },
  icon1: {
    width: 11,
    height: 16,
    overflow: "hidden",
  },
  back: {
    marginLeft: 6,
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    color: Color.gray,
  },
  iconParent: {
    top: 101,
    width: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  step2AccountConnectedPerso: {
    height: 926,
    overflow: "hidden",
    width: 428,
    backgroundColor: Color.dominant,
  },
});

export default Step2AccountConnectedPersonalRepayment;
