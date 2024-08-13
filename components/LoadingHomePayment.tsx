import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import HomeWelcome from "./HomeWelcome";
import Badge2 from "./Badge2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LoadingHomePayment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loadingHomePayment}>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo3.png")}
        group791={require("../assets/group-79-11.png")}
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
      <View style={[styles.personalLoan, styles.personalLoanPosition]}>
        <View style={styles.personalText}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={[styles.prstamoDeCasaWrapper, styles.wrapperPosition]}
              >
                <Text style={styles.prstamoDeCasa}>{`Préstamo de Casa `}</Text>
              </View>
              <Text style={[styles.bancoMercantil, styles.fechaDePagoTypo]}>
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
            <Text style={[styles.fechaDePago, styles.fechaDePagoTypo]}>
              Fecha de pago:
            </Text>
            <View
              style={[
                styles.deDiciembreAtrasado5dWrapper,
                styles.personalTextChildLayout,
              ]}
            >
              <Text style={styles.deDiciembreContainer}>
                <Text style={styles.deDiciembre}>{`7 de Diciembre | `}</Text>
                <Text style={styles.atrasado5d}>Atrasado 5d</Text>
              </Text>
            </View>
          </View>
          <View style={styles.pagoTotalAdeudadoParent}>
            <Text style={styles.pagoTotalAdeudado}>Pago total adeudado:</Text>
            <Text style={[styles.text, styles.textTypo3]}>$1,104.24</Text>
          </View>
        </View>
      </View>
      <View style={[styles.loadingHomePaymentChild, styles.loadingPosition]} />
      <Text style={[styles.text1, styles.textClr]}>{`Status de Pago: `}</Text>
      <View style={styles.badgesxlincrease}>
        <Text style={[styles.text2, styles.textTypo]}>Pendiente</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>1</Text>
          <Text style={[styles.eleanorPena, styles.textClr]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.textClr]}>9/18/2024</Text>
          <Text style={[styles.text5, styles.textClr]}>$3,000</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.brooklynSimmons, styles.textClr]}>
            Préstamo de Casa
          </Text>
          <Text style={[styles.france, styles.textClr]}>10/28/2024</Text>
          <Text style={[styles.text5, styles.textClr]}>$273,000</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>3</Text>
          <Text style={[styles.eleanorPena, styles.textClr]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.textClr]}>9/4/2023</Text>
          <Text style={[styles.france, styles.textClr]}>$10,000</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>4</Text>
          <Text style={[styles.eleanorPena, styles.textClr]}>
            Tarjeta de Crédito
          </Text>
          <Text style={[styles.france, styles.textClr]}>7/27/2023</Text>
          <Text style={[styles.france, styles.textClr]}>--</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>5</Text>
          <Text style={[styles.eleanorPena, styles.textClr]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.textClr]}>2/11/2023</Text>
          <Text style={[styles.france, styles.textClr]}>$5,000</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>6</Text>
          <Text style={[styles.eleanorPena, styles.textClr]}>
            Préstamo Personal
          </Text>
          <Text style={[styles.france, styles.textClr]}>4/21/2022</Text>
          <Text style={[styles.france, styles.textClr]}>$2,500</Text>
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
          <Text style={[styles.text4, styles.textTypo]}>7</Text>
          <Text style={[styles.codyFisher, styles.textClr]}>
            Tarjeta de Crédito
          </Text>
          <Text style={[styles.france, styles.textClr]}>4/4/2022</Text>
          <Text style={[styles.france, styles.textClr]}>--</Text>
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
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <View
        style={[styles.pagoTotalAdeudadoGroup, styles.personalLoanPosition]}
      >
        <Text style={[styles.pagoTotalAdeudado1, styles.textTypo3]}>
          Pago total adeudado:
        </Text>
        <Text style={[styles.text, styles.textTypo3]}>$1,104.24</Text>
      </View>
      <View
        style={[
          styles.fechaDelBorrador12DeDecWrapper,
          styles.personalLoanPosition,
        ]}
      >
        <Text style={styles.fechaDelBorrador}>
          fecha del borrador: 12 de Dec
        </Text>
      </View>
      <View style={[styles.loadingHomePaymentItem, styles.loadingPosition]} />
      <Pressable style={styles.iconParent} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={[styles.back, styles.textTypo]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 0,
    position: "absolute",
  },
  personalLoanPosition: {
    width: 380,
    left: 24,
    position: "absolute",
  },
  fechaDePagoTypo: {
    fontFamily: FontFamily.body,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  personalTextChildLayout: {
    width: 110,
    alignItems: "center",
  },
  personalSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  textTypo3: {
    fontSize: FontSize.subtleMedium_size,
    color: Color.slate900,
    lineHeight: 24,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  loadingPosition: {
    width: 381,
    left: "50%",
    marginLeft: -190.5,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
    position: "absolute",
  },
  textClr: {
    color: Color.black,
    textAlign: "left",
  },
  textTypo: {
    color: Color.gray,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
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
  prstamoDeCasa: {
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textLargeBolder_size,
    alignSelf: "stretch",
  },
  prstamoDeCasaWrapper: {
    top: 0,
    width: 159,
  },
  bancoMercantil: {
    top: 28,
    lineHeight: 16,
    fontSize: FontSize.textSmall_size,
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
    marginTop: 16,
  },
  fechaDePago: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    alignSelf: "stretch",
  },
  deDiciembre: {
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  atrasado5d: {
    fontFamily: FontFamily.textSmall,
  },
  deDiciembreContainer: {
    color: Color.colorTomato,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    lineHeight: 20,
  },
  deDiciembreAtrasado5dWrapper: {
    marginTop: 4,
    flexDirection: "row",
  },
  personalText2: {
    alignSelf: "stretch",
  },
  pagoTotalAdeudado: {
    color: Color.slate900,
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  text: {
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
  },
  loadingHomePaymentChild: {
    top: 373,
  },
  text1: {
    top: 397,
    lineHeight: 30,
    fontFamily: FontFamily.header,
    fontWeight: "700",
    fontSize: FontSize.textLargeBolder_size,
    color: Color.black,
    left: 24,
    position: "absolute",
  },
  text2: {
    lineHeight: 12,
    fontFamily: FontFamily.header,
    fontWeight: "700",
  },
  badgesxlincrease: {
    top: 398,
    left: 328,
    backgroundColor: Color.colorWhitesmoke_300,
    borderColor: Color.gray,
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    alignSelf: "stretch",
    alignItems: "center",
  },
  france: {
    flex: 1,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
  },
  text5: {
    display: "flex",
    flex: 1,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
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
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    alignSelf: "stretch",
    alignItems: "center",
  },
  codyFisher: {
    flex: 1,
    display: "none",
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
  },
  tables: {
    top: 736,
    left: 36,
    height: 427,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    display: "none",
    borderColor: Color.colorLavender,
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    width: 380,
    position: "absolute",
    backgroundColor: Color.dominant,
  },
  maskGroupIcon: {
    top: 435,
    left: 107,
    width: 214,
    height: 214,
    position: "absolute",
  },
  pagoTotalAdeudado1: {
    textAlign: "left",
  },
  pagoTotalAdeudadoGroup: {
    top: 685,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  fechaDelBorrador: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    color: Color.colorGray_400,
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  fechaDelBorrador12DeDecWrapper: {
    top: 713,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  loadingHomePaymentItem: {
    top: 673,
  },
  icon: {
    width: 11,
    height: 16,
    overflow: "hidden",
  },
  back: {
    marginLeft: 6,
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
  },
  iconParent: {
    top: 101,
    width: 50,
    flexDirection: "row",
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  loadingHomePayment: {
    height: 926,
    overflow: "hidden",
    width: 428,
    backgroundColor: Color.dominant,
  },
});

export default LoadingHomePayment;
