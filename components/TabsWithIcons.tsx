import React from 'react';
import { Padding, Color, Border } from "../GlobalStyles";
import { Image, StyleSheet, View } from 'react-native';

const TabsWithIcons = () => {
  return (
    <View style={styles.typedefault}>
      <View style={[styles.solidIconWrapper, styles.solidIconLayout]}>
        <Image
          style={styles.solidIcon}
          resizeMode="cover"
          source={require("../assets/solidicon22.png")}
        />
      </View>
      <View style={[styles.solidIconContainer, styles.solidIconLayout]}>
        <Image
          style={styles.solidIcon}
          resizeMode="cover"
          source={require("../assets/solidicon1.png")}
        />
      </View>
      <View style={styles.solidIconLayout}>
        <Image
          style={styles.solidIcon}
          resizeMode="cover"
          source={require("../assets/solidicon23.png")}
        />
      </View>
      <View style={styles.solidIconLayout}>
        <Image
          style={styles.solidIcon}
          resizeMode="cover"
          source={require("../assets/solidicon24.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  solidIconLayout: {
    minWidth: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
    alignItems: "center",
  },
  solidIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  solidIconWrapper: {
    backgroundColor: Color.lightBackground,
    borderRadius: Border.br_9xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 46,
  },
  solidIconContainer: {
    maxWidth: 68,
  },
  typedefault: {
    backgroundColor: Color.dominant,
    flexDirection: "row",
    padding: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_9xl,
  },
});

export default TabsWithIcons;
