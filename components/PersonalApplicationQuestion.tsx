import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import InputFieldBase from "./InputFieldBase";
import InputField from "./InputField";
import DropdownsTuniAddress from "./DropdownsTuniAddress";
import DropdownsTuniTuniDubDrop from "./DropdownsTuniTuniDubDrop";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PersonalApplicationQuestion = () => {
  return (
    <View style={[styles.personalApplicationQuestion, styles.inputFieldLayout]}>
      <Text
        style={[styles.confirmeInformacinSobre, styles.confirmeFlexBox]}
      >{`Confirme información 
sobre la empresa`}</Text>
      <Text style={[styles.confirmeElNombre, styles.confirmeFlexBox]}>
        Confirme el nombre y el numero de telefono de la empresa.
      </Text>
      <View style={[styles.inputField, styles.inputFieldLayout]}>
        <InputFieldBase
          icon={require("../assets/icon1.png")}
          jeraldinelocofyuiai="Nombre de Empresa"
          showEmail={false}
          showIcon={false}
          showThisIsA={false}
          inputFieldBasePosition="unset"
          inputFieldBaseWidth="unset"
          inputFieldBaseHeight={56}
          inputFieldBaseTop="unset"
          inputFieldBaseRight="unset"
          inputFieldBaseBottom="unset"
          inputFieldBaseLeft="unset"
          inputFieldBaseAlignSelf="stretch"
          inputFieldBaseMarginTop="unset"
          frameViewFlex={1}
          frameViewBorderColor="rgba(130, 130, 130, 0.2)"
          jeraldinelocofyuiaiColor="#333"
        />
      </View>
      <InputField />
      <Text style={[styles.confirmeElNombre, styles.confirmeFlexBox]}>
        Confirme la dirrecion de la empresa.
      </Text>
      <DropdownsTuniAddress
        icon={require("../assets/icon24.png")}
        icon1={require("../assets/icon1.png")}
        dropdownsTuniAddressWidth={380}
        dropdownsTuniAddressMarginTop={16}
        frameViewBorderColor="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor1="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor2="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor3="rgba(130, 130, 130, 0.2)"
        frameViewBorderColor4="rgba(130, 130, 130, 0.2)"
        showEmail={false}
        showIcon={false}
        showThisIsA={false}
      />
      <Text style={[styles.confirmeElNombre, styles.confirmeFlexBox]}>
        Por favor confirme el tiempo que he estado con esta empresa.
      </Text>
      <DropdownsTuniTuniDubDrop
        icon={require("../assets/icon27.png")}
        propWidth={380}
        propWidth1="47.66%"
        propRight="52.34%"
        propWidth2="47.66%"
        propLeft="52.34%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldLayout: {
    width: 380,
    marginTop: 16,
  },
  confirmeFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  confirmeInformacinSobre: {
    fontSize: FontSize.header_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
  },
  confirmeElNombre: {
    fontSize: FontSize.body_size,
    lineHeight: 30,
    fontFamily: FontFamily.body,
    color: Color.base700LightTertiary,
    marginTop: 16,
  },
  inputField: {
    height: 56,
    marginTop: 16,
  },
  personalApplicationQuestion: {
    marginTop: 16,
  },
});

export default PersonalApplicationQuestion;
