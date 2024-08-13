import React, { useMemo } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Anchor1 from "./Anchor1";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

export type HeaderFooterType = {
  vibrantLogo?: ImageSourcePropType;
  group791?: ImageSourcePropType;
  solidIcon?: ImageSourcePropType;
  solidIcon1?: ImageSourcePropType;
  solidIcon2?: ImageSourcePropType;
  solidIcon3?: ImageSourcePropType;

  /** Style props */
  headerFooterPosition?: string;
  headerFooterTop?: number | string;
  headerFooterLeft?: number | string;
  headerFooterMarginLeft?: number | string;
  personalApplicationQuestiAlignSelf?: string;
  personalApplicationQuestiWidth?: number | string;
  framePressableBackgroundColor?: string;
  framePressableBorderRadius?: number;
  framePressableBackgroundColor1?: string;
  framePressableBorderRadius1?: number;
  framePressableBackgroundColor2?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HeaderFooter = ({
  vibrantLogo,
  group791,
  solidIcon,
  solidIcon1,
  solidIcon2,
  solidIcon3,
  headerFooterPosition,
  headerFooterTop,
  headerFooterLeft,
  headerFooterMarginLeft,
  personalApplicationQuestiAlignSelf,
  personalApplicationQuestiWidth,
  framePressableBackgroundColor,
  framePressableBorderRadius,
  framePressableBackgroundColor1,
  framePressableBorderRadius1,
  framePressableBackgroundColor2,
}: HeaderFooterType) => {
  const headerFooterStyle = useMemo(() => {
    return {
      ...getStyleValue("position", headerFooterPosition),
      ...getStyleValue("top", headerFooterTop),
      ...getStyleValue("left", headerFooterLeft),
      ...getStyleValue("marginLeft", headerFooterMarginLeft),
    };
  }, [
    headerFooterPosition,
    headerFooterTop,
    headerFooterLeft,
    headerFooterMarginLeft,
  ]);

  const personalApplicationQuestionStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", personalApplicationQuestiAlignSelf),
      ...getStyleValue("width", personalApplicationQuestiWidth),
    };
  }, [personalApplicationQuestiAlignSelf, personalApplicationQuestiWidth]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.headerfootervibrant, headerFooterStyle]}>
      <View style={styles.welcome}>
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
                    source={vibrantLogo}
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
          <View
            style={[
              styles.personalApplicationQuestion,
              personalApplicationQuestionStyle,
            ]}
          >
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
        solidIcon={require("../assets/solidicon20.png")}
        solidIcon1={require("../assets/solidicon17.png")}
        solidIcon2={require("../assets/solidicon18.png")}
        solidIcon3={require("../assets/solidicon21.png")}
        framePressableBackgroundColor="#e0e8ff"
        framePressableBackgroundColor1="unset"
        framePressableBackgroundColor2="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topHeaderFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.dominant,
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 428,
  },
  welcome: {
    paddingTop: Padding.p_5xl,
    backgroundColor: Color.dominant,
    alignSelf: "stretch",
    alignItems: "center",
  },
  headerfootervibrant: {
    height: 926,
    justifyContent: "space-between",
    alignItems: "center",
    width: 428,
  },
});

export default HeaderFooter;
