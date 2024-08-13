import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type InputBaseFieldType = {
  bank?: ImageSourcePropType;
  seleccioneTuBanco?: string;
  hintText?: string;
  hintText1?: boolean;

  /** Style props */
  propOverflow?: string;
  propOpacity?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputBaseField = ({
  bank,
  seleccioneTuBanco,
  hintText,
  hintText1,
  propOverflow,
  propOpacity,
}: InputBaseFieldType) => {
  const bankIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propOverflow]);

  const seleccioneTuBancoStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity),
    };
  }, [propOpacity]);

  return (
    <View style={styles.inputBaseField}>
      <Text style={[styles.label, styles.labelTypo]}>CVU/CBU</Text>
      <View
        style={[styles.stateplaceholderDestructive, styles.hintTextSpaceBlock]}
      >
        <Image
          style={[styles.bankIcon, bankIconStyle]}
          resizeMode="cover"
          source={bank}
        />
        <Text style={[styles.seleccioneTuBanco, seleccioneTuBancoStyle]}>
          {seleccioneTuBanco}
        </Text>
      </View>
      {!hintText1 && (
        <Text style={[styles.hintText, styles.hintTextSpaceBlock]}>
          {hintText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    display: "none",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.subtleMedium_size,
  },
  hintTextSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.subtleMedium,
    color: Color.colorsBlack80,
  },
  bankIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  seleccioneTuBanco: {
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "center",
    opacity: 0.5,
    marginLeft: 10,
  },
  stateplaceholderDestructive: {
    shadowColor: "rgba(18, 18, 32, 0.14)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.dominant,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  hintText: {
    fontFamily: FontFamily.textSmall,
    color: Color.colorGrey,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.subtleMedium_size,
  },
  inputBaseField: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 380,
  },
});

export default InputBaseField;
