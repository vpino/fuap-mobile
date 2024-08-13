import React, { useMemo } from "react";
import Badge2 from "./Badge2";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { StyleSheet, Text, View } from "react-native";

export type Tables1Type = {
  /** Style props */
  tablesPosition?: string;
  tablesTop?: number | string;
  tablesLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tables1 = ({ tablesPosition, tablesTop, tablesLeft }: Tables1Type) => {
  const tables1Style = useMemo(() => {
    return {
      ...getStyleValue("position", tablesPosition),
      ...getStyleValue("top", tablesTop),
      ...getStyleValue("left", tablesLeft),
    };
  }, [tablesPosition, tablesTop, tablesLeft]);

  return (
    <View style={[styles.tables, tables1Style]}>
      <View style={styles.headerRow}>
        <Text style={[styles.text, styles.textTypo1]}>#</Text>
        <Text style={[styles.text, styles.textTypo1]}>Tipo de Préstamo</Text>
        <Text style={styles.textTypo1}>{`Fecha `}</Text>
        <Text style={styles.textTypo1}>{`Monto  `}</Text>
        <Text style={styles.textTypo1}>Resultado</Text>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={styles.text1}>2</Text>
        <Text style={[styles.brooklynSimmons, styles.textTypo]}>
          Préstamo de Casa
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>10/28/2024</Text>
        <Text style={[styles.text3, styles.textTypo]}>$273,000.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot1.png")}
            text="En Progreso"
            badgePosition="unset"
            badgeBackgroundColor="#fff"
            badgeBorderStyle="solid"
            badgeBorderColor="#333"
            badgeBorderWidth={1}
            textColor="#333"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={styles.text1}>1</Text>
        <Text style={[styles.eleanorPena, styles.textTypo]}>
          Préstamo Personal
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>9/18/2024</Text>
        <Text style={[styles.text3, styles.textTypo]}>$3,000.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot.png")}
            text="Completado"
            badgePosition="unset"
            badgeBackgroundColor="#16ae65"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#16ae65"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={styles.text1}>5</Text>
        <Text style={[styles.eleanorPena, styles.textTypo]}>
          Préstamo Personal
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>9/11/2023</Text>
        <Text style={[styles.text2, styles.textTypo]}>$5,000.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot2.png")}
            text="Rechazado"
            badgePosition="unset"
            badgeBackgroundColor="#f4485d"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#f4485d"
          />
        </View>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={styles.text1}>4</Text>
        <Text style={[styles.eleanorPena, styles.textTypo]}>
          Tarjeta de Crédito
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>7/27/2023</Text>
        <Text style={[styles.text2, styles.textTypo]}>$1,750.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot.png")}
            text="Completado"
            badgePosition="unset"
            badgeBackgroundColor="#16ae65"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#16ae65"
          />
        </View>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={styles.text1}>6</Text>
        <Text style={[styles.eleanorPena, styles.textTypo]}>
          Préstamo Personal
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>4/21/2022</Text>
        <Text style={[styles.text2, styles.textTypo]}>$2,500.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot2.png")}
            text="Rechazado"
            badgePosition="unset"
            badgeBackgroundColor="#f4485d"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#f4485d"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={styles.text1}>7</Text>
        <Text style={[styles.codyFisher, styles.textTypo]}>
          Tarjeta de Crédito
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>4/4/2022</Text>
        <Text style={[styles.text2, styles.textTypo]}>$5,000.00</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot2.png")}
            text="Rechazado"
            badgePosition="unset"
            badgeBackgroundColor="#f4485d"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#f4485d"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    color: Color.darkGray,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
    fontSize: FontSize.textSmall_size,
    flex: 1,
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
  },
  dataSpaceBlock: {
    marginTop: 8,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  text: {
    display: "none",
    alignItems: "center",
    alignSelf: "stretch",
  },
  headerRow: {
    borderBottomWidth: 0.5,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderColor: Color.colorLavender,
    borderStyle: "solid",
  },
  text1: {
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    display: "none",
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  brooklynSimmons: {
    display: "none",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  text2: {
    flex: 1,
  },
  text3: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelwrapper: {
    height: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  eleanorPena: {
    width: 160,
    display: "none",
    alignItems: "center",
    alignSelf: "stretch",
  },
  dataRow01: {
    backgroundColor: Color.colorGhostwhite_100,
  },
  codyFisher: {
    display: "none",
    flex: 1,
  },
  tables: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.dominant,
    borderWidth: 1,
    width: 380,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    borderColor: Color.colorLavender,
    borderStyle: "solid",
  },
});

export default Tables1;
