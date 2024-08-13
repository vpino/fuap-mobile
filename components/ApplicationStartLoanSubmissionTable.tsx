import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Badge2 from "./Badge2";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

export type ApplicationStartLoanSubmissionTableType = {
  showTables?: boolean;

  /** Style props */
  applicationStartLoanSubmiPosition?: string;
  applicationStartLoanSubmiHeight?: number | string;
  applicationStartLoanSubmiTop?: number | string;
  applicationStartLoanSubmiLeft?: number | string;
  frameViewWidth?: number | string;
  frameViewFlex?: number;
  badgesxlIncreasePaddingHorizontal?: number | string;
  frameViewWidth1?: number | string;
  frameViewFlex1?: number;
  badgesxlIncreasePaddingHorizontal1?: number | string;
  tablesBorderRadius?: number;
  tablesBorderStyle?: string;
  tablesBorderColor?: string;
  tablesBorderWidth?: number;
  tablesPaddingHorizontal?: number | string;
  tablesPaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ApplicationStartLoanSubmissionTable = ({
  showTables,
  applicationStartLoanSubmiPosition,
  applicationStartLoanSubmiHeight,
  applicationStartLoanSubmiTop,
  applicationStartLoanSubmiLeft,
  frameViewWidth,
  frameViewFlex,
  badgesxlIncreasePaddingHorizontal,
  frameViewWidth1,
  frameViewFlex1,
  badgesxlIncreasePaddingHorizontal1,
  tablesBorderRadius,
  tablesBorderStyle,
  tablesBorderColor,
  tablesBorderWidth,
  tablesPaddingHorizontal,
  tablesPaddingVertical,
}: ApplicationStartLoanSubmissionTableType) => {
  const applicationStartLoanSubmissStyle = useMemo(() => {
    return {
      ...getStyleValue("position", applicationStartLoanSubmiPosition),
      ...getStyleValue("height", applicationStartLoanSubmiHeight),
      ...getStyleValue("top", applicationStartLoanSubmiTop),
      ...getStyleValue("left", applicationStartLoanSubmiLeft),
    };
  }, [
    applicationStartLoanSubmiPosition,
    applicationStartLoanSubmiHeight,
    applicationStartLoanSubmiTop,
    applicationStartLoanSubmiLeft,
  ]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("flex", frameViewFlex),
    };
  }, [frameViewFlex]);

  const badgesxlIncreaseStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", badgesxlIncreasePaddingHorizontal),
    };
  }, [badgesxlIncreasePaddingHorizontal]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth1),
      ...getStyleValue("flex", frameViewFlex1),
    };
  }, [frameViewWidth1, frameViewFlex1]);

  const badgesxlIncrease1Style = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", badgesxlIncreasePaddingHorizontal1),
    };
  }, [badgesxlIncreasePaddingHorizontal1]);

  const tablesStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", tablesBorderRadius),
      ...getStyleValue("borderStyle", tablesBorderStyle),
      ...getStyleValue("borderColor", tablesBorderColor),
      ...getStyleValue("borderWidth", tablesBorderWidth),
      ...getStyleValue("paddingHorizontal", tablesPaddingHorizontal),
      ...getStyleValue("paddingVertical", tablesPaddingVertical),
    };
  }, [
    tablesBorderRadius,
    tablesBorderStyle,
    tablesBorderColor,
    tablesBorderWidth,
    tablesPaddingHorizontal,
    tablesPaddingVertical,
  ]);

  return (
    <View
      style={[
        styles.applicationStartloanSubmiss,
        applicationStartLoanSubmissStyle,
      ]}
    >
      <View style={[styles.frameParent, frameViewStyle]}>
        <View style={[styles.headingWrapperFlexBox, frameView1Style]}>
          <View style={styles.headingWrapperFlexBox}>
            <View
              style={[
                styles.badgesxlincrease,
                styles.badgesxlincreaseSpaceBlock,
                badgesxlIncreaseStyle,
              ]}
            >
              <Text style={[styles.prstamo, styles.textTypo]}>Préstamo:</Text>
            </View>
            <View
              style={[styles.badgesxlincrease1, styles.headingContainerFlexBox]}
            >
              <Text style={[styles.text, styles.textTypo]}>Personal</Text>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon10.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.headingContainer,
            styles.headingContainerFlexBox,
            frameView2Style,
          ]}
        >
          <View style={styles.headingWrapperFlexBox}>
            <View
              style={[
                styles.badgesxlincrease,
                styles.badgesxlincreaseSpaceBlock,
                badgesxlIncrease1Style,
              ]}
            >
              <Text style={[styles.prstamo, styles.textTypo]}>Resultado:</Text>
            </View>
            <View
              style={[styles.badgesxlincrease1, styles.headingContainerFlexBox]}
            >
              <Text style={[styles.text, styles.textTypo]}>Aprobado</Text>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon10.png")}
              />
            </View>
          </View>
        </View>
      </View>
      {showTables && (
        <View style={[styles.tables, tablesStyle]}>
          <View style={styles.headerRow}>
            <Text style={[styles.text2, styles.text2Typo]}>#</Text>
            <Text style={[styles.text2, styles.text2Typo]}>
              Tipo de Préstamo
            </Text>
            <Text style={styles.text2Typo}>{`Fecha `}</Text>
            <Text style={styles.text2Typo}>{`Monto  `}</Text>
            <Text style={styles.text2Typo}>Resultado</Text>
          </View>
          <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
            <Text style={styles.text3}>1</Text>
            <Text style={[styles.eleanorPena, styles.text4Typo]}>
              Préstamo Personal
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>9/18/2024</Text>
            <Text style={[styles.text4, styles.text4Typo]}>$3,000</Text>
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
            <Text style={styles.text3}>2</Text>
            <Text style={[styles.brooklynSimmons, styles.text4Typo]}>
              Préstamo de Casa
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>10/28/2024</Text>
            <Text style={[styles.text4, styles.text4Typo]}>$273,000</Text>
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
            <Text style={styles.text3}>3</Text>
            <Text style={[styles.eleanorPena, styles.text4Typo]}>
              Préstamo Personal
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>9/4/2023</Text>
            <Text style={[styles.france, styles.text4Typo]}>$10,000</Text>
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
          <View style={styles.dataSpaceBlock}>
            <Text style={styles.text3}>4</Text>
            <Text style={[styles.eleanorPena, styles.text4Typo]}>
              Tarjeta de Crédito
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>7/27/2023</Text>
            <Text style={[styles.france, styles.text4Typo]}>--</Text>
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
            <Text style={styles.text3}>5</Text>
            <Text style={[styles.eleanorPena, styles.text4Typo]}>
              Préstamo Personal
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>2/11/2023</Text>
            <Text style={[styles.france, styles.text4Typo]}>$5,000</Text>
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
            <Text style={styles.text3}>6</Text>
            <Text style={[styles.eleanorPena, styles.text4Typo]}>
              Préstamo Personal
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>4/21/2022</Text>
            <Text style={[styles.france, styles.text4Typo]}>$2,500</Text>
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
            <Text style={styles.text3}>7</Text>
            <Text style={[styles.codyFisher, styles.text4Typo]}>
              Tarjeta de Crédito
            </Text>
            <Text style={[styles.france, styles.text4Typo]}>4/4/2022</Text>
            <Text style={[styles.france, styles.text4Typo]}>--</Text>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badgesxlincreaseSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    height: 32,
    borderRadius: Border.br_9xs,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.subtleMedium_size,
  },
  headingContainerFlexBox: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  text2Typo: {
    color: Color.darkGray,
    fontFamily: FontFamily.textLargeBolder,
    fontWeight: "600",
    fontSize: FontSize.textSmall_size,
    flex: 1,
    textAlign: "left",
  },
  dataSpaceBlock: {
    marginTop: 10,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  text4Typo: {
    color: Color.black,
    fontFamily: FontFamily.textSmall,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
  },
  prstamo: {
    lineHeight: 32,
    color: Color.gray3,
  },
  badgesxlincrease: {
    backgroundColor: Color.dominant,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    lineHeight: 20,
    color: Color.gray1,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  badgesxlincrease1: {
    backgroundColor: Color.gray6,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    height: 32,
    borderRadius: Border.br_9xs,
  },
  headingWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  headingContainer: {
    width: 190,
  },
  frameParent: {
    marginLeft: -189,
    top: 0,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  text2: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  headerRow: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "space-between",
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  text3: {
    color: Color.gray,
    fontFamily: FontFamily.textSmall,
    display: "none",
    fontSize: FontSize.textSmall_size,
    flex: 1,
    alignSelf: "stretch",
    textAlign: "left",
    alignItems: "center",
  },
  eleanorPena: {
    width: 160,
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  france: {
    flex: 1,
  },
  text4: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelwrapper: {
    height: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  dataRow01: {
    backgroundColor: Color.lightBackground,
  },
  brooklynSimmons: {
    display: "none",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  codyFisher: {
    display: "none",
    flex: 1,
  },
  tables: {
    top: 56,
    left: 0,
    height: 427,
    backgroundColor: Color.dominant,
    position: "absolute",
    width: 380,
  },
  applicationStartloanSubmiss: {
    height: 483,
    width: 380,
  },
});

export default ApplicationStartLoanSubmissionTable;
