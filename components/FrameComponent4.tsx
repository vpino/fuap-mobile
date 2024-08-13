import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent4 = () => {
  return (
    <View style={styles.personalTextParent}>
      <View>
        <View style={styles.detallesDeOcupacinYEmpleoWrapper}>
          <Text style={styles.detallesDeOcupacin}>
            Detalles De Ocupación y Empleo
          </Text>
        </View>
        <Text style={[styles.softwareEngineer, styles.appleTechnologyTypo]}>
          Software Engineer | Empresa Privada
        </Text>
        <Text style={styles.appleTechnologyTypo}>
          Apple Technology | 305 123 4567
        </Text>
        <Text style={styles.appleTechnologyTypo}>
          1000 Name Rd, Santo Domingo, RD 12324
        </Text>
        <Text style={[styles.softwareEngineer, styles.appleTechnologyTypo]}>
          3 anos y 8 meses
        </Text>
      </View>
      <Image
        style={styles.editBoxFillIcon}
        resizeMode="cover"
        source={require("../assets/editboxfill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appleTechnologyTypo: {
    marginTop: 4,
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    lineHeight: 20,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  detallesDeOcupacin: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
    textAlign: "left",
  },
  detallesDeOcupacinYEmpleoWrapper: {
    alignSelf: "stretch",
  },
  softwareEngineer: {
    alignSelf: "stretch",
  },
  editBoxFillIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  personalTextParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 26,
    alignSelf: "stretch",
  },
});

export default FrameComponent4;
