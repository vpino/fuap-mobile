import React, { useMemo } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import DropdownsTuniTuni from "./DropdownsTuniTuni";
import InputFieldBase from "./InputFieldBase";

export type DropdownsTuniAddressType = {
  icon?: ImageSourcePropType;
  icon1?: ImageSourcePropType;
  showEmail?: boolean;
  showIcon?: boolean;
  showThisIsA?: boolean;

  /** Style props */
  dropdownsTuniAddressWidth?: number | string;
  dropdownsTuniAddressMarginTop?: number | string;
  frameViewBorderColor?: string;
  frameViewBorderColor1?: string;
  frameViewBorderColor2?: string;
  frameViewBorderColor3?: string;
  frameViewBorderColor4?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropdownsTuniAddress = ({
  icon,
  icon1,
  dropdownsTuniAddressWidth,
  dropdownsTuniAddressMarginTop,
  frameViewBorderColor,
  frameViewBorderColor1,
  frameViewBorderColor2,
  frameViewBorderColor3,
  frameViewBorderColor4,
  showEmail,
  showIcon,
  showThisIsA,
}: DropdownsTuniAddressType) => {
  const dropdownsTuniAddressStyle = useMemo(() => {
    return {
      ...getStyleValue("width", dropdownsTuniAddressWidth),
      ...getStyleValue("marginTop", dropdownsTuniAddressMarginTop),
    };
  }, [dropdownsTuniAddressWidth, dropdownsTuniAddressMarginTop]);

  return (
    <View style={[styles.tuniaddress, dropdownsTuniAddressStyle]}>
      <View style={[styles.dropdownstunituniParent, styles.parentPosition]}>
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Distrito"
          dropdownsTuniTuniPosition="absolute"
          dropdownsTuniTuniHeight="28%"
          dropdownsTuniTuniTop="72%"
          dropdownsTuniTuniRight="0%"
          dropdownsTuniTuniBottom="0%"
          dropdownsTuniTuniLeft="0%"
          dropdownsTuniTuniWidth="100%"
          dropdownsTuniTuniMarginTop="unset"
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="#e2e4ea"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Municipo"
          dropdownsTuniTuniPosition="absolute"
          dropdownsTuniTuniHeight="28%"
          dropdownsTuniTuniTop="36%"
          dropdownsTuniTuniRight="0%"
          dropdownsTuniTuniBottom="36%"
          dropdownsTuniTuniLeft="0%"
          dropdownsTuniTuniWidth="100%"
          dropdownsTuniTuniMarginTop="unset"
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="#e2e4ea"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
        <DropdownsTuniTuni
          jeraldinelocofyuiai="Provincia"
          dropdownsTuniTuniPosition="absolute"
          dropdownsTuniTuniHeight="28%"
          dropdownsTuniTuniTop="0%"
          dropdownsTuniTuniRight="0%"
          dropdownsTuniTuniBottom="72%"
          dropdownsTuniTuniLeft="0%"
          dropdownsTuniTuniWidth="100%"
          dropdownsTuniTuniMarginTop="unset"
          dropdownsTuniTuniAlignSelf="unset"
          frameViewBorderColor="#e2e4ea"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
      </View>
      <View style={[styles.inputFieldBaseParent, styles.parentPosition]}>
        <InputFieldBase
          icon={require("../assets/icon1.png")}
          jeraldinelocofyuiai="Apt No."
          showEmail={showEmail}
          showIcon={showIcon}
          showThisIsA={showThisIsA}
          inputFieldBasePosition="absolute"
          inputFieldBaseWidth="25.29%"
          inputFieldBaseHeight="100%"
          inputFieldBaseTop="0%"
          inputFieldBaseRight="0%"
          inputFieldBaseBottom="0%"
          inputFieldBaseLeft="74.71%"
          inputFieldBaseAlignSelf="unset"
          inputFieldBaseMarginTop="unset"
          frameViewFlex={1}
          frameViewBorderColor="#e2e4ea"
          jeraldinelocofyuiaiColor="#676f82"
        />
        <InputFieldBase
          icon={require("../assets/icon1.png")}
          jeraldinelocofyuiai="Calle y Numero"
          showEmail={showEmail}
          showIcon={showIcon}
          showThisIsA={showThisIsA}
          inputFieldBasePosition="absolute"
          inputFieldBaseWidth="70%"
          inputFieldBaseHeight="100%"
          inputFieldBaseTop="0%"
          inputFieldBaseRight="30%"
          inputFieldBaseBottom="0%"
          inputFieldBaseLeft="0%"
          inputFieldBaseAlignSelf="unset"
          inputFieldBaseMarginTop="unset"
          frameViewFlex={1}
          frameViewBorderColor="#e2e4ea"
          jeraldinelocofyuiaiColor="rgba(26, 26, 26, 0.7)"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  dropdownstunituniParent: {
    height: "72.73%",
    top: "27.27%",
    bottom: "0%",
  },
  inputFieldBaseParent: {
    height: "20.36%",
    top: "0%",
    bottom: "79.64%",
  },
  tuniaddress: {
    width: 340,
    height: 275,
  },
});

export default DropdownsTuniAddress;
