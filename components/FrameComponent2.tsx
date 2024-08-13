import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type FrameComponent2Type = {
  detallesPersonal?: string;
  johnDoe?: string;
  johnDoeemailcom130512345?: string;

  /** Style props */
  propMarginTop?: number | string;
  propAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({
  detallesPersonal,
  johnDoe,
  johnDoeemailcom130512345,
  propMarginTop,
  propAlignSelf,
}: FrameComponent2Type) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const johnDoeStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  return (
    <View style={[styles.personalTextParent, frameView5Style]}>
      <View style={styles.personalText}>
        <View style={styles.detallesPersonalWrapper}>
          <Text style={[styles.detallesPersonal, styles.johnDoeFlexBox]}>
            {detallesPersonal}
          </Text>
        </View>
        <Text style={[styles.johnDoe, styles.johnDoeFlexBox, johnDoeStyle]}>
          {johnDoe}
        </Text>
        <Text style={[styles.johnDoe, styles.johnDoeFlexBox]}>
          {johnDoeemailcom130512345}
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
  johnDoeFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  detallesPersonal: {
    fontSize: FontSize.textLargeBolder_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.black,
  },
  detallesPersonalWrapper: {
    alignSelf: "stretch",
  },
  johnDoe: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 20,
    fontFamily: FontFamily.textSmall,
    color: Color.gray,
    marginTop: 4,
  },
  personalText: {
    width: 237,
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
    alignSelf: "stretch",
  },
});

export default FrameComponent2;
