import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DropdownsTuniTuni1 from "../components/DropdownsTuniTuni1";
import FrameComponent1 from "../components/FrameComponent1";
import HeaderFooter from "../components/HeaderFooter";
import {
  Padding,
  Color,
  StyleVariable,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const PersonalLoan3assets = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.personalLoan3assets}>
      <View style={styles.plQuestions}>
        <View style={styles.iconParent}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.paso3}>{`Paso 3 `}</Text>
          <Text style={styles.de4}>de 4</Text>
        </Text>
        <View style={styles.personalApplicationQuestion}>
          <Text style={styles.tieneAlgnActivo}>
            ¿Tiene algún activo para poder garantizar el préstamo?
          </Text>
          <Text style={styles.porFavorConfirme}>
            Por favor confirme si tienes algun activo para ayudar garantizar tu
            préstamo, en el caso de que incumplas.
          </Text>
        </View>
        <View style={[styles.dropdownstunituni, styles.collateralLayout]}>
          <View style={styles.inputFieldBase}>
            <Text style={styles.email}>Email</Text>
            <View style={styles.jeraldinelocofyuiaiParent}>
              <Text style={styles.jeraldinelocofyuiai} numberOfLines={1}>
                Ingreso mensual
              </Text>
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.collateralLayout}>
          <View style={styles.frameFlexBox}>
            <View
              style={[
                styles.imageRemovebgPreview101Parent,
                styles.imageParentBorder,
              ]}
            >
              <Image
                style={styles.imageRemovebgPreview101}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-10-1.png")}
              />
              <Text
                style={[styles.automvil, styles.automvilTypo]}
                numberOfLines={1}
              >
                Automóvil
              </Text>
            </View>
            <View
              style={[
                styles.imageRemovebgPreview101Parent,
                styles.imageParentBorder,
              ]}
            >
              <Image
                style={styles.imageRemovebgPreview141}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-14-1.png")}
              />
              <Text
                style={[styles.automvil, styles.automvilTypo]}
                numberOfLines={1}
              >
                Inventario
              </Text>
            </View>
            <View
              style={[
                styles.imageRemovebgPreview151Parent,
                styles.imageParentBorder,
              ]}
            >
              <Image
                style={styles.imageRemovebgPreview151}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-15-1.png")}
              />
              <Text
                style={[styles.automvil, styles.automvilTypo]}
                numberOfLines={1}
              >
                Propiedad
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View
              style={[
                styles.imageRemovebgPreview101Parent,
                styles.imageParentBorder,
              ]}
            >
              <Image
                style={styles.imageRemovebgPreview101}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-13-1.png")}
              />
              <Text
                style={[styles.facturas, styles.automvilTypo]}
                numberOfLines={1}
              >
                Facturas
              </Text>
            </View>
            <View
              style={[
                styles.imageRemovebgPreview101Parent,
                styles.imageParentBorder,
              ]}
            >
              <Image
                style={styles.imageRemovebgPreview101}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-10-11.png")}
              />
              <Text
                style={[styles.facturas, styles.automvilTypo]}
                numberOfLines={1}
              >
                Maquinaria
              </Text>
            </View>
            <View style={styles.imageParentBorder}>
              <Image
                style={styles.imageRemovebgPreview161}
                resizeMode="cover"
                source={require("../assets/imageremovebgpreview-16-1.png")}
              />
              <Text
                style={[styles.facturas, styles.automvilTypo]}
                numberOfLines={1}
              >
                Inversiones
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.porFavorConfirme}>
          ¿Cual es la cantidad estimada de tus activos que pueden ayudar
          garantizar tu préstamo?
        </Text>
        <DropdownsTuniTuni1 />
        <FrameComponent1
          icon={require("../assets/icon8.png")}
          icon1={require("../assets/icon9.png")}
          onFramePressablePress={() => navigation.navigate("PersonalLoan4TC")}
        />
      </View>
      <HeaderFooter
        vibrantLogo={require("../assets/vibrant-logo.png")}
        group791={require("../assets/group-79-11.png")}
        solidIcon={require("../assets/solidicon.png")}
        solidIcon1={require("../assets/solidicon1.png")}
        solidIcon2={require("../assets/solidicon2.png")}
        solidIcon3={require("../assets/solidicon3.png")}
        headerFooterPosition="absolute"
        headerFooterTop={0}
        headerFooterLeft={0}
        headerFooterMarginLeft="unset"
        personalApplicationQuestiAlignSelf="stretch"
        personalApplicationQuestiWidth="unset"
        framePressableBackgroundColor="unset"
        framePressableBorderRadius={28}
        framePressableBackgroundColor1="#e0e8ff"
        framePressableBackgroundColor2="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  collateralLayout: {
    width: 380,
    marginTop: 16,
  },
  imageParentBorder: {
    padding: Padding.p_base,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.gray3,
    borderStyle: "solid",
    borderRadius: StyleVariable.defaultBorderRaius,
    alignItems: "center",
    backgroundColor: Color.dominant,
  },
  automvilTypo: {
    marginTop: 8,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    color: Color.base700LightTertiary,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    color: Color.gray,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  iconParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  paso3: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
  },
  de4: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.helveticaNeue,
  },
  text: {
    fontSize: FontSize.size_xl,
    marginTop: 16,
    lineHeight: 30,
    textAlign: "left",
  },
  tieneAlgnActivo: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontFamily: FontFamily.header,
    color: Color.slate900,
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "left",
  },
  porFavorConfirme: {
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    fontSize: FontSize.subtleMedium_size,
    alignSelf: "stretch",
    marginTop: 16,
    lineHeight: 30,
    textAlign: "left",
  },
  personalApplicationQuestion: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  email: {
    lineHeight: 22,
    color: Color.darkGray,
    display: "none",
    fontSize: FontSize.subtleMedium_size,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
  },
  jeraldinelocofyuiai: {
    lineHeight: 24,
    fontSize: FontSize.textLargeBolder_size,
    color: Color.base700LightTertiary,
    textAlign: "left",
    fontFamily: FontFamily.textSmall,
    overflow: "hidden",
    flex: 1,
  },
  icon1: {
    width: 18,
    height: 18,
    marginLeft: 10,
    overflow: "hidden",
  },
  jeraldinelocofyuiaiParent: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
    borderWidth: 1,
    borderColor: Color.gray3,
    borderStyle: "solid",
    borderRadius: StyleVariable.defaultBorderRaius,
    height: 56,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.dominant,
  },
  inputFieldBase: {
    height: 56,
    alignSelf: "stretch",
  },
  dropdownstunituni: {
    display: "none",
    height: 56,
  },
  imageRemovebgPreview101: {
    width: 72,
    height: 53,
  },
  automvil: {
    fontFamily: FontFamily.textSmall,
  },
  imageRemovebgPreview101Parent: {
    height: 118,
    width: 119,
    padding: Padding.p_base,
    justifyContent: "center",
  },
  imageRemovebgPreview141: {
    width: 80,
    height: 53,
  },
  imageRemovebgPreview151: {
    width: 105,
    height: 54,
  },
  imageRemovebgPreview151Parent: {
    width: 119,
    padding: Padding.p_base,
    justifyContent: "center",
  },
  facturas: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
  },
  imageRemovebgPreview161: {
    width: 57,
    height: 54,
  },
  frameGroup: {
    marginTop: 12,
  },
  plQuestions: {
    position: "absolute",
    top: 109,
    left: 24,
    height: 942,
  },
  personalLoan3assets: {
    width: "100%",
    height: 926,
    flex: 1,
    backgroundColor: Color.dominant,
  },
});

export default PersonalLoan3assets;
