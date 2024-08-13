import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HeaderFooter from "./HeaderFooter";
import HomeWelcome from "./HomeWelcome";
import Badge2 from "./Badge2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Step3ConnectedPersonalRepayment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.step3ConnectedPersonalRepa}>
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
      <View style={[styles.homeWelcomeWrapper, styles.bancoMercantilPosition]}>
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
      <View style={[styles.personalLoan, styles.textWrapperLayout]}>
        <View style={styles.personalText}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={[styles.prstamoPersonalWrapper, styles.personalPosition]}
              >
                <Text style={[styles.prstamoPersonal, styles.fechaDePagoClr]}>
                  Préstamo Personal
                </Text>
              </View>
              <Text style={[styles.bancoMercantil, styles.fechaDePagoClr]}>
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
            <Text style={[styles.fechaDePago, styles.fechaDePagoClr]}>
              Fecha de pago:
            </Text>
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
            <Text style={[styles.pagoTotalAdeudado, styles.pagoClr]}>
              Pago total adeudado:
            </Text>
            <Text style={[styles.text, styles.textTypo]}>$1,104.24</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.step3ConnectedPersonalRepaChild, styles.step3Position]}
      />
      <View style={[styles.loanDetailsWrapper, styles.loanLayout]}>
        <View style={[styles.loanDetails, styles.loanLayout]}>
          <View style={[styles.frameContainer, styles.personalPosition]}>
            <View style={styles.pagoPrincipalParent}>
              <Text style={[styles.pagoPrincipal, styles.text1Clr]}>
                Pago principal
              </Text>
              <Text style={[styles.text1, styles.text1Clr]}>$968.67</Text>
            </View>
            <View style={styles.pagoDeInteresesParent}>
              <Text style={[styles.pagoPrincipal, styles.text1Clr]}>
                Pago de intereses
              </Text>
              <Text style={[styles.text1, styles.text1Clr]}>$135.57</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.loanDetailsContainer, styles.loanLayout]}>
        <View style={[styles.loanDetails, styles.loanLayout]}>
          <View style={[styles.frameContainer, styles.personalPosition]}>
            <View style={styles.pagoPrincipalParent}>
              <Text style={[styles.pagoPrincipal, styles.text1Clr]}>
                Banco Mercantil
              </Text>
              <Text style={[styles.text1, styles.text1Clr]}>
                Cuenta Primaria
              </Text>
            </View>
            <View style={styles.pagoDeInteresesParent}>
              <Text style={[styles.pagoPrincipal, styles.text1Clr]}>
                Cuenta 2134
              </Text>
              <Text style={[styles.text1, styles.text1Clr]}>*******2134</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.textWrapper, styles.textWrapperLayout]}>
        <Text style={styles.text4}>
          <Text style={styles.paso3Typo}>
            <Text style={styles.paso31}>Paso 3</Text>
            <Text style={styles.text5}>{` `}</Text>
          </Text>
          <Text style={styles.de3}>de 3</Text>
        </Text>
      </View>
      <View style={styles.tables}>
        <View style={styles.headerRow}>
          <Text style={[styles.text6, styles.text6Typo]}>#</Text>
          <Text style={[styles.text6, styles.text6Typo]}>Tipo de Préstamo</Text>
          <Text style={styles.text6Typo}>{`Fecha `}</Text>
          <Text style={styles.text6Typo}>{`Monto  `}</Text>
          <Text style={styles.text6Typo}>Resultado</Text>
        </View>
        <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
          <Text style={[styles.text7, styles.backTypo]}>1</Text>
          <Text style={styles.eleanorPena}>Préstamo Personal</Text>
          <Text style={styles.france}>9/18/2024</Text>
          <Text style={styles.text8}>$3,000</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>2</Text>
          <Text style={styles.brooklynSimmons}>Préstamo de Casa</Text>
          <Text style={styles.france}>10/28/2024</Text>
          <Text style={styles.text8}>$273,000</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>3</Text>
          <Text style={styles.eleanorPena}>Préstamo Personal</Text>
          <Text style={styles.france}>9/4/2023</Text>
          <Text style={styles.france}>$10,000</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>4</Text>
          <Text style={styles.eleanorPena}>Tarjeta de Crédito</Text>
          <Text style={styles.france}>7/27/2023</Text>
          <Text style={styles.france}>--</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>5</Text>
          <Text style={styles.eleanorPena}>Préstamo Personal</Text>
          <Text style={styles.france}>2/11/2023</Text>
          <Text style={styles.france}>$5,000</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>6</Text>
          <Text style={styles.eleanorPena}>Préstamo Personal</Text>
          <Text style={styles.france}>4/21/2022</Text>
          <Text style={styles.france}>$2,500</Text>
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
          <Text style={[styles.text7, styles.backTypo]}>7</Text>
          <Text style={styles.codyFisher}>Tarjeta de Crédito</Text>
          <Text style={styles.france}>4/4/2022</Text>
          <Text style={styles.france}>--</Text>
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
        onPress={() => navigation.navigate("LoadingPersonalPayment")}
      >
        <Text style={styles.button1}>{`Finalizar mi pago -->`}</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon26.png")}
        />
      </Pressable>
      <View style={[styles.personalTextWrapper, styles.buttonPosition]}>
        <View style={[styles.personalText3, styles.personalPosition]}>
          <View>
            <Text style={[styles.detallesDePago, styles.paso3Typo]}>
              Detalles de Pago:
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.pagoTotalAdeudadoGroup, styles.textWrapperLayout]}>
        <Text style={[styles.pagoTotalAdeudado1, styles.textTypo]}>
          Pago total adeudado:
        </Text>
        <Text style={[styles.text, styles.textTypo]}>$1,104.24</Text>
      </View>
      <View
        style={[
          styles.fechaDelBorrador12DeDecWrapper,
          styles.textWrapperLayout,
        ]}
      >
        <Text style={[styles.fechaDelBorrador, styles.text1Clr]}>
          fecha del borrador: 12 de Dec
        </Text>
      </View>
      <View
        style={[styles.step3ConnectedPersonalRepaItem, styles.step3Position]}
      />
      <Pressable style={styles.iconParent} onPress={() => navigation.goBack()}>
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
  bancoMercantilPosition: {
    left: 0,
    position: "absolute",
  },
  textWrapperLayout: {
    width: 380,
    position: "absolute",
  },
  personalPosition: {
    top: 0,
    left: 0,
  },
  fechaDePagoClr: {
    color: Color.colorGray_500,
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
  pagoClr: {
    color: Color.slate900,
    lineHeight: 24,
    textAlign: "left",
  },
  textTypo: {
    fontSize: FontSize.subtleMedium_size,
    color: Color.slate900,
    lineHeight: 24,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  step3Position: {
    width: 381,
    left: "50%",
    marginLeft: -190.5,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
    position: "absolute",
  },
  loanLayout: {
    height: 58,
    width: 380,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorGray_400,
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
  },
  text6Typo: {
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
  buttonPosition: {
    marginLeft: -190,
    left: "50%",
    width: 380,
    position: "absolute",
  },
  paso3Typo: {
    fontFamily: FontFamily.header,
    fontWeight: "700",
  },
  homeWelcomeWrapper: {
    top: 137,
    alignItems: "center",
    width: 428,
  },
  prstamoPersonal: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textLargeBolder_size,
    alignSelf: "stretch",
  },
  prstamoPersonalWrapper: {
    width: 159,
    position: "absolute",
  },
  bancoMercantil: {
    top: 28,
    lineHeight: 16,
    fontFamily: FontFamily.body,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
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
    fontFamily: FontFamily.body,
    textAlign: "left",
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
    left: 24,
  },
  step3ConnectedPersonalRepaChild: {
    top: 373,
  },
  pagoPrincipal: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_400,
    textAlign: "left",
  },
  text1: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_400,
    textAlign: "right",
  },
  pagoPrincipalParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  pagoDeInteresesParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    width: 380,
    position: "absolute",
  },
  loanDetails: {
    top: 0,
    left: 0,
  },
  loanDetailsWrapper: {
    top: 557,
    left: 24,
  },
  loanDetailsContainer: {
    top: 483,
    left: 24,
  },
  paso31: {
    color: Color.black,
  },
  text5: {
    color: Color.colorMediumslateblue,
  },
  de3: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.body,
  },
  text4: {
    lineHeight: 30,
    textAlign: "left",
    fontSize: FontSize.textLargeBolder_size,
  },
  textWrapper: {
    top: 397,
    flexDirection: "row",
    left: 24,
    alignItems: "center",
  },
  text6: {
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
  text7: {
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
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    alignSelf: "stretch",
    alignItems: "center",
  },
  france: {
    flex: 1,
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  text8: {
    display: "flex",
    flex: 1,
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
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
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    alignSelf: "stretch",
    alignItems: "center",
  },
  codyFisher: {
    flex: 1,
    display: "none",
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
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
    top: 761,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray1,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  detallesDePago: {
    color: Color.slate900,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.textLargeBolder_size,
  },
  personalText3: {
    flexDirection: "row",
    width: 380,
    position: "absolute",
    alignItems: "center",
  },
  personalTextWrapper: {
    top: 443,
    height: 24,
  },
  pagoTotalAdeudado1: {
    textAlign: "left",
  },
  pagoTotalAdeudadoGroup: {
    top: 685,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 24,
    alignItems: "center",
  },
  fechaDelBorrador: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    textAlign: "left",
  },
  fechaDelBorrador12DeDecWrapper: {
    top: 713,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 24,
    alignItems: "center",
  },
  step3ConnectedPersonalRepaItem: {
    top: 673,
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
  },
  iconParent: {
    top: 101,
    width: 50,
    flexDirection: "row",
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  step3ConnectedPersonalRepa: {
    height: 926,
    overflow: "hidden",
    width: 428,
    backgroundColor: Color.dominant,
  },
});

export default Step3ConnectedPersonalRepayment;
