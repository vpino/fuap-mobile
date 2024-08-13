import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type PersonalLoan3Type = {
  prstamoPersonal?: string;
  prop?: string;
  pendiente?: string;
  icon?: ImageSourcePropType;

  /** Style props */
  buttonPosition?: string;
  buttonTop?: number | string;
  buttonLeft?: number | string;
  buttonMarginTop?: number | string;
  propAlignSelf?: string;
  propColor?: string;

  /** Action props */
  onPersonalLoanPress?: () => void;
  onButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonalLoan3 = ({
  prstamoPersonal,
  prop,
  pendiente,
  icon,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonMarginTop,
  propAlignSelf,
  propColor,
  onPersonalLoanPress,
  onButtonPress,
}: PersonalLoan3Type) => {
  const personalLoan1Style = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("marginTop", buttonMarginTop),
    };
  }, [buttonPosition, buttonTop, buttonLeft, buttonMarginTop]);

  const personalTextStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  const pendienteStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.personalLoan, personalLoan1Style]}
      onPress={onPersonalLoanPress}
    >
      <View style={styles.personalText}>
        <View style={styles.personalText}>
          <Text style={[styles.prstamoPersonal, styles.textTypo]}>
            {prstamoPersonal}
          </Text>
        </View>
        <Text style={[styles.bancoMercantil, styles.pendienteClr]}>
          #10358405 | Banco Mercantil
        </Text>
      </View>
      <View style={[styles.personalLoanChild, styles.personalSpaceBlock]} />
      <View style={[styles.personalTextParent, styles.parentFlexBox]}>
        <View>
          <Text style={[styles.fechaDePago, styles.pendienteClr]}>
            Fecha de pago:
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textLayout]}>{prop}</Text>
            <Text
              style={[styles.pendiente, styles.pendienteClr, pendienteStyle]}
            >
              {pendiente}
            </Text>
          </View>
        </View>
        <Pressable style={styles.button} onPress={onButtonPress}>
          <Text style={[styles.button1, styles.textLayout]}>
            Pagar mi préstamo
          </Text>
          <Image style={styles.icon} resizeMode="cover" source={icon} />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  pendienteClr: {
    color: Color.gray,
    textAlign: "left",
  },
  personalSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  prstamoPersonal: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  personalText: {
    alignSelf: "stretch",
  },
  bancoMercantil: {
    marginTop: 4,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    alignSelf: "stretch",
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
  },
  personalLoanChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    height: 1,
  },
  fechaDePago: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    alignSelf: "stretch",
  },
  text: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  pendiente: {
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
    color: Color.gray,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
  },
  parent: {
    width: 110,
    marginTop: 4,
  },
  button1: {
    fontWeight: "500",
    fontFamily: FontFamily.subtleMedium,
    color: Color.dominant,
    textAlign: "center",
  },
  icon: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 6,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray1,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  personalTextParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  personalLoan: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
    paddingHorizontal: Padding.p_base,
  },
});

export default PersonalLoan3;
