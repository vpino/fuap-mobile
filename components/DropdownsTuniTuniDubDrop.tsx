import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import DropdownsTuniTuniFilled from "./DropdownsTuniTuniFilled";

export type DropdownsTuniTuniDubDropType = {
  icon?: ImageSourcePropType;

  /** Style props */
  propWidth?: number | string;
  propWidth1?: number | string;
  propRight?: number | string;
  propWidth2?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropdownsTuniTuniDubDrop = ({
  icon,
  propWidth,
  propWidth1,
  propRight,
  propWidth2,
  propLeft,
}: DropdownsTuniTuniDubDropType) => {
  const dropdownsTuniTuniDubDropStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View
      style={[styles.dropdownstunitunidubdrop, dropdownsTuniTuniDubDropStyle]}
    >
      <DropdownsTuniTuniFilled
        filledUp="2 anos"
        icon={require("../assets/icon23.png")}
        propRight="52.35%"
        propLeft="0%"
        propWidth="47.65%"
      />
      <DropdownsTuniTuniFilled
        filledUp="1 mes"
        icon={require("../assets/icon23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownstunitunidubdrop: {
    width: 340,
    height: 56,
    marginTop: 16,
  },
});

export default DropdownsTuniTuniDubDrop;
