import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Tables1 from "./Tables1";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

export type Submissions2Type = {
  /** Style props */
  submissionsPosition?: string;
  submissionsTop?: number | string;
  submissionsLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Submissions2 = ({
  submissionsPosition,
  submissionsTop,
  submissionsLeft,
}: Submissions2Type) => {
  const submissionsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", submissionsPosition),
      ...getStyleValue("top", submissionsTop),
      ...getStyleValue("left", submissionsLeft),
    };
  }, [submissionsPosition, submissionsTop, submissionsLeft]);

  return (
    <View style={[styles.submissions, submissionsStyle]}>
      <View style={styles.frameParent}>
        <View style={[styles.headingWrapper, styles.headingFlexBox]}>
          <View style={styles.headingFlexBox}>
            <View
              style={[styles.badgesxlincrease, styles.badgesxlincreaseLayout]}
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
        <View style={[styles.headingContainer, styles.headingContainerFlexBox]}>
          <View style={styles.headingFlexBox}>
            <View
              style={[styles.badgesxlincrease, styles.badgesxlincreaseLayout]}
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
      <Tables1 tablesPosition="absolute" tablesTop={56} tablesLeft={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  headingFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  badgesxlincreaseLayout: {
    paddingVertical: Padding.p_9xs,
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
  prstamo: {
    lineHeight: 32,
    color: Color.gray3,
  },
  badgesxlincrease: {
    backgroundColor: Color.dominant,
    paddingHorizontal: 0,
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
    overflow: "hidden",
    marginLeft: 4,
  },
  badgesxlincrease1: {
    backgroundColor: Color.gray6,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    height: 32,
    borderRadius: Border.br_9xs,
  },
  headingWrapper: {
    flex: 1,
  },
  headingContainer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  frameParent: {
    position: "absolute",
    marginLeft: -189,
    top: 0,
    left: "50%",
    width: 378,
    flexDirection: "row",
  },
  submissions: {
    width: 380,
    height: 483,
  },
});

export default Submissions2;
