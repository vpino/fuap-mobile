import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

export type FrameComponent3Type = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent3 = ({ propTop }: FrameComponent3Type) => {
  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.loanDetailsParent, frameView6Style]}>
      <View style={styles.loanDetails}>
        <View style={styles.frameParentPosition}>
          <View style={[styles.deudaDelPrstamoParent, styles.delParentFlexBox]}>
            <Text style={styles.deudaDelPrstamo}>Deuda del préstamo</Text>
            <Text style={styles.text}>$117,000.00</Text>
          </View>
          <View
            style={[
              styles.cantidadPagadaDelPrstamoParent,
              styles.delParentFlexBox,
            ]}
          >
            <Text style={styles.deudaDelPrstamo}>
              Cantidad pagada del préstamo
            </Text>
            <Text style={styles.text}>$17,000.00</Text>
          </View>
          <View
            style={[
              styles.cantidadPagadaDelPrstamoParent,
              styles.delParentFlexBox,
            ]}
          >
            <Text style={styles.deudaDelPrstamo}>Tasa de interés</Text>
            <Text style={styles.text}>12%</Text>
          </View>
          <View
            style={[
              styles.cantidadPagadaDelPrstamoParent,
              styles.delParentFlexBox,
            ]}
          >
            <Text style={styles.deudaDelPrstamo}>Pago principal</Text>
            <Text style={styles.text}>$968.67</Text>
          </View>
          <View
            style={[
              styles.cantidadPagadaDelPrstamoParent,
              styles.delParentFlexBox,
            ]}
          >
            <Text style={styles.deudaDelPrstamo}>Pago de intereses</Text>
            <Text style={styles.text}>$135.57</Text>
          </View>
        </View>
      </View>
      <View style={[styles.personalText, styles.delParentFlexBox]}>
        <View>
          <Text style={[styles.trminosDePago, styles.text6Typo]}>
            Términos de Pago:
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.headingWrapper, styles.headingFlexBox]}>
            <View style={styles.headingFlexBox}>
              <View
                style={[styles.badgesxlincrease, styles.badgesxlincreaseLayout]}
              >
                <Text style={[styles.prstamo, styles.text5Typo]}>
                  Préstamo:
                </Text>
              </View>
              <View style={[styles.badgesxlincrease1, styles.heading1FlexBox]}>
                <Text style={[styles.text5, styles.text5Typo]}>Personal</Text>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/icon10.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.heading1FlexBox}>
            <View style={styles.badgesxlincrease2}>
              <Text style={[styles.text6, styles.text6Typo]}>
                Monto adeudado
              </Text>
              <Image
                style={styles.badgesxlincreaseChild}
                resizeMode="cover"
                source={require("../assets/vector-21.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  delParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text6Typo: {
    fontFamily: FontFamily.header,
    fontWeight: "700",
    textAlign: "left",
  },
  headingFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  badgesxlincreaseLayout: {
    paddingVertical: Padding.p_9xs,
    height: 32,
    borderRadius: Border.br_9xs,
  },
  text5Typo: {
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.subtleMedium_size,
    textAlign: "left",
  },
  heading1FlexBox: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  deudaDelPrstamo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
  },
  text: {
    textAlign: "right",
    color: Color.colorGray_400,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.textSmall_size,
  },
  deudaDelPrstamoParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  cantidadPagadaDelPrstamoParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  frameParentPosition: {
    top: 0,
    left: 0,
    width: 380,
    position: "absolute",
  },
  loanDetails: {
    top: 56,
    height: 160,
    left: 0,
    width: 380,
    position: "absolute",
  },
  trminosDePago: {
    fontSize: FontSize.textLargeBolder_size,
    color: Color.slate900,
    opacity: 0.8,
    lineHeight: 24,
    fontWeight: "700",
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
  text5: {
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
    display: "none",
  },
  text6: {
    lineHeight: 16,
    color: Color.dominant,
    fontWeight: "700",
    fontSize: FontSize.textSmall_size,
  },
  badgesxlincreaseChild: {
    borderRadius: Border.br_12xs_2,
    width: 7,
    height: 4,
    marginLeft: 4,
  },
  badgesxlincrease2: {
    backgroundColor: Color.black,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 1,
    padding: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    flexDirection: "row",
  },
  personalText: {
    top: 0,
    left: 0,
    width: 380,
    position: "absolute",
  },
  loanDetailsParent: {
    top: 439,
    left: 24,
    height: 216,
    width: 380,
    position: "absolute",
  },
});

export default FrameComponent3;
