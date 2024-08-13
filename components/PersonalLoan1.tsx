import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type PersonalLoan1Type = {
  todavaNoTienesUnPrstamoAc?: string;
  button?: string;
  icon?: ImageSourcePropType;
  showIcon?: boolean;

  /** Style props */
  propMarginTop?: number | string;
  propFontSize?: number;
  propFontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonalLoan1 = ({
  todavaNoTienesUnPrstamoAc,
  button,
  icon,
  propMarginTop,
  propFontSize,
  propFontFamily,
  showIcon,
}: PersonalLoan1Type) => {
  const personalLoanStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const todavaNoTienesStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontSize, propFontFamily]);

  return (
    <View style={[styles.personalLoan, personalLoanStyle]}>
      <View style={styles.personalText}>
        <View style={styles.personalText}>
          <Text style={[styles.todavaNoTienes, todavaNoTienesStyle]}>
            {todavaNoTienesUnPrstamoAc}
          </Text>
        </View>
      </View>
      <Button1
        button="Aplicar ahorra"
        icon={require("../assets/icon11.png")}
        showIcon={showIcon}
        buttonPosition="unset"
        buttonBackgroundColor="#e0e8ff"
        buttonPaddingVertical="unset"
        buttonMarginTop={8}
        buttonPaddingHorizontal="unset"
        buttonMarginLeft="unset"
        buttonTop="unset"
        buttonLeft="unset"
        buttonWidth={348}
        buttonFontFamily="Manrope-Bold"
        buttonFontWeight="700"
        buttonFontSize={16}
        buttonColor="#333"
        iconWidth={18}
        iconHeight={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todavaNoTienes: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.black,
    textAlign: "center",
    alignSelf: "stretch",
  },
  personalText: {
    alignSelf: "stretch",
  },
  personalLoan: {
    position: "absolute",
    marginTop: -30,
    marginLeft: -190,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 380,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    minWidth: 300,
  },
});

export default PersonalLoan1;
