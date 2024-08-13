import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type PersonalLoanType = {
  misPrstamosActivos?: string;
  verTodos?: string;
  icon?: ImageSourcePropType;

  /** Style props */
  propColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonalLoan = ({
  misPrstamosActivos,
  verTodos,
  icon,
  propColor,
}: PersonalLoanType) => {
  const verTodosStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.personalLoan, styles.personalPosition]}>
      <View style={[styles.personalText, styles.personalTextFlexBox]}>
        <View style={styles.misPrstamosActivosWrapper}>
          <Text style={styles.misPrstamosActivos}>{misPrstamosActivos}</Text>
        </View>
        <View style={[styles.verTodosParent, styles.personalTextFlexBox]}>
          <Text style={[styles.verTodos, verTodosStyle]}>{verTodos}</Text>
          <Image style={styles.icon} resizeMode="cover" source={icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalPosition: {
    left: "50%",
    position: "absolute",
  },
  personalTextFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  misPrstamosActivos: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
    textAlign: "left",
  },
  misPrstamosActivosWrapper: {
    width: 348,
  },
  verTodos: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.subtleMedium,
    color: Color.accent,
    textAlign: "right",
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 4,
  },
  verTodosParent: {
    justifyContent: "center",
  },
  personalText: {
    marginLeft: -190,
    top: 12,
    width: 380,
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
  },
  personalLoan: {
    marginLeft: -214,
    top: 0,
    borderRadius: Border.br_xs,
    width: 428,
    height: 48,
  },
});

export default PersonalLoan;
