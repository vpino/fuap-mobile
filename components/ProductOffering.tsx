import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import PersonalLoan2 from "./PersonalLoan2";
import HomeLoan from "./HomeLoan";
import CreditCard from "./CreditCard";
import { Padding } from "../GlobalStyles";

export type ProductOfferingType = {
  button?: string;
  button1?: string;
  button2?: string;
  showIcon?: boolean;

  /** Style props */
  productOfferingPosition?: string;
  productOfferingMarginTop?: number | string;
  productOfferingMarginLeft?: number | string;
  productOfferingTop?: number | string;
  productOfferingLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProductOffering = ({
  button,
  button1,
  button2,
  productOfferingPosition,
  productOfferingMarginTop,
  productOfferingMarginLeft,
  productOfferingTop,
  productOfferingLeft,
  showIcon,
}: ProductOfferingType) => {
  const productOfferingStyle = useMemo(() => {
    return {
      ...getStyleValue("position", productOfferingPosition),
      ...getStyleValue("marginTop", productOfferingMarginTop),
      ...getStyleValue("marginLeft", productOfferingMarginLeft),
      ...getStyleValue("top", productOfferingTop),
      ...getStyleValue("left", productOfferingLeft),
    };
  }, [
    productOfferingPosition,
    productOfferingMarginTop,
    productOfferingMarginLeft,
    productOfferingTop,
    productOfferingLeft,
  ]);

  return (
    <View style={[styles.productOffering, productOfferingStyle]}>
      <PersonalLoan2 button="Completar en 5 minutos" showIcon />
      <HomeLoan button="Completar en 5 minutos" showIcon />
      <CreditCard button="Completar en 5 minutos" showIcon={showIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  productOffering: {
    width: 428,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default ProductOffering;
