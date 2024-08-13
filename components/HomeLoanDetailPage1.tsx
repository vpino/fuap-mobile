import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import HomeWelcome from "./HomeWelcome";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import PersonalLoan5 from "./PersonalLoan5";
import HeaderFooter from "./HeaderFooter";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HomeLoanDetailPage1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeLoanDetailPage}>
      <View style={styles.homeWelcomeWrapper}>
        <HomeWelcome
          bienvenidoCustomerName="Detalles de Préstamo"
          puedesAplicarParaCualquie="Aquí están tus préstamos activos. Puedes pagar y ver el status de cada préstamo fundado."
          showPuedesAplicarPara={false}
          homeWelcomePosition="unset"
          homeWelcomeAlignSelf="stretch"
          homeWelcomeTop="unset"
          homeWelcomeLeft="unset"
          homeWelcomeWidth="unset"
        />
      </View>
      <View style={[styles.lineParent, styles.buttonPosition]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <View style={[styles.loanDetails, styles.parentLayout]}>
          <View style={[styles.frameParent, styles.framePosition]}>
            <View
              style={[
                styles.montoOriginalDelPrstamoParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Monto original del préstamo
              </Text>
              <Text style={[styles.text, styles.delClr]}>$7,000.00</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Tasa de interés
              </Text>
              <Text style={[styles.text, styles.delClr]}>12%</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Deuda principal
              </Text>
              <Text style={[styles.text, styles.delClr]}>$6,404.45</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Saldo de intereses
              </Text>
              <Text style={[styles.text, styles.delClr]}>$35.57</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Deuda principal atrasado
              </Text>
              <Text style={[styles.text, styles.delClr]}>$0</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Intereses vencidos
              </Text>
              <Text style={[styles.text, styles.delClr]}>$0</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Plazo del préstamo
              </Text>
              <Text style={[styles.text, styles.delClr]}>12 meses</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Fecha de asunto
              </Text>
              <Text style={[styles.text, styles.delClr]}>29 de Nov</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Fecha de vencimiento
              </Text>
              <Text style={[styles.text, styles.delClr]}>15 de Dec</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                Fecha final
              </Text>
              <Text style={[styles.text, styles.delClr]}>29 de Dec</Text>
            </View>
            <View style={[styles.tasaDeIntersParent, styles.parentFlexBox]}>
              <Text style={[styles.montoOriginalDel, styles.delClr]}>
                LTV pendiente, %
              </Text>
              <Text style={[styles.text, styles.delClr]}>99.08</Text>
            </View>
          </View>
        </View>
        <View style={[styles.pagoTotalAdeudadoParent, styles.parentFlexBox]}>
          <Text style={[styles.pagoTotalAdeudado, styles.text7Typo]}>
            Pago total adeudado:
          </Text>
          <Text style={[styles.text7, styles.text7Typo]}>$1,104.24</Text>
        </View>
        <View
          style={[styles.fechaDelBorrador12DeDecWrapper, styles.parentFlexBox]}
        >
          <Text style={[styles.fechaDelBorrador, styles.delClr]}>
            fecha del borrador: 12 de Dec
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Step1ConnectedHomeRepayment1")}
        >
          <Text style={styles.button1}>Pagar mi préstamo</Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon26.png")}
          />
        </Pressable>
      </View>
      <PersonalLoan5 />
      <Pressable
        style={[styles.iconParent, styles.buttonFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    marginLeft: -190,
    width: 380,
    left: "50%",
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 380,
    left: 0,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  delClr: {
    color: Color.colorGray_400,
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
  },
  text7Typo: {
    color: Color.slate900,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.subtleMedium_size,
    lineHeight: 24,
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  homeWelcomeWrapper: {
    top: 137,
    alignItems: "center",
    left: 0,
    position: "absolute",
    width: 428,
  },
  frameChild: {
    marginLeft: -190.5,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 381,
    height: 1,
    left: "50%",
  },
  montoOriginalDel: {
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_400,
  },
  text: {
    textAlign: "right",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_400,
  },
  montoOriginalDelPrstamoParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  tasaDeIntersParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  frameParent: {
    width: 380,
    left: 0,
  },
  loanDetails: {
    top: 24,
    height: 364,
    width: 380,
    position: "absolute",
  },
  pagoTotalAdeudado: {
    textAlign: "left",
  },
  text7: {
    textAlign: "right",
  },
  pagoTotalAdeudadoParent: {
    top: 412,
    width: 380,
    left: 0,
    position: "absolute",
  },
  fechaDelBorrador: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    textAlign: "left",
  },
  fechaDelBorrador12DeDecWrapper: {
    top: 440,
    width: 380,
    left: 0,
    position: "absolute",
  },
  button1: {
    fontSize: FontSize.textLargeBolder_size,
    color: Color.dominant,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
    lineHeight: 24,
  },
  icon: {
    width: 18,
    height: 18,
    display: "none",
    marginLeft: 6,
    overflow: "hidden",
  },
  button: {
    top: 480,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray1,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    width: 380,
    left: "50%",
    marginLeft: -190,
    overflow: "hidden",
  },
  lineParent: {
    top: 343,
    height: 654,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    width: 11,
    height: 16,
    overflow: "hidden",
  },
  back: {
    lineHeight: 20,
    color: Color.gray,
    marginLeft: 6,
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
  },
  iconParent: {
    top: 101,
    left: 24,
    width: 50,
  },
  homeLoanDetailPage: {
    backgroundColor: Color.dominant,
    height: 926,
    overflow: "hidden",
    width: 428,
  },
});

export default HomeLoanDetailPage1;
