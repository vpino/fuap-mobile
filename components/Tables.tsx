import React from 'react';
import Badge2 from "./Badge2";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";
import { Image, StyleSheet, Text, View } from 'react-native';

const Tables = () => {
  return (
    <View style={styles.typesimpleDividerfalseSt}>
      <View style={styles.headerRow}>
        <Text style={styles.text}>#</Text>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Country</Text>
        <Text style={styles.text}>Age</Text>
        <Text style={styles.text}>Segment</Text>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={[styles.text1, styles.text1FlexBox]}>1</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Eleanor Pena
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>France</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>9/18/16</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot3.png")}
            text="Completed"
            badgePosition="unset"
            badgeBackgroundColor="#16ae65"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#16ae65"
          />
        </View>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={[styles.text1, styles.text1FlexBox]}>2</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Brooklyn Simmons
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>USA</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>10/28/12</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot4.png")}
            text="In Progress"
            badgePosition="unset"
            badgeBackgroundColor="#fff"
            badgeBorderStyle="solid"
            badgeBorderColor="#457eff"
            badgeBorderWidth={1}
            textColor="#457eff"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={[styles.text1, styles.text1FlexBox]}>3</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Jerome Bell
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>USA</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>9/4/12</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot4.png")}
            text="In Progress"
            badgePosition="unset"
            badgeBackgroundColor="#fff"
            badgeBorderStyle="solid"
            badgeBorderColor="#457eff"
            badgeBorderWidth={1}
            textColor="#457eff"
          />
        </View>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={[styles.text1, styles.text1FlexBox]}>4</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Kristin Watson
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>UK</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>7/27/13</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot3.png")}
            text="Completed"
            badgePosition="unset"
            badgeBackgroundColor="#16ae65"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#16ae65"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={[styles.text1, styles.text1FlexBox]}>5</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Dianne Russell
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>India</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>2/11/12</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot5.png")}
            text="Inactive"
            badgePosition="unset"
            badgeBackgroundColor="#f4485d"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#f4485d"
          />
        </View>
      </View>
      <View style={styles.dataSpaceBlock}>
        <Text style={[styles.text1, styles.text1FlexBox]}>6</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Darlene Robertson
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>Russia</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>4/21/12</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot3.png")}
            text="Completed"
            badgePosition="unset"
            badgeBackgroundColor="#16ae65"
            badgeBorderStyle="unset"
            badgeBorderColor="unset"
            textColor="#16ae65"
          />
        </View>
      </View>
      <View style={[styles.dataRow01, styles.dataSpaceBlock]}>
        <Text style={[styles.text1, styles.text1FlexBox]}>7</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>
          Cody Fisher
        </Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>China</Text>
        <Text style={[styles.eleanorPena, styles.text1FlexBox]}>4/4/18</Text>
        <View style={styles.labelwrapper}>
          <Badge2
            iconDot={require("../assets/icon--dot5.png")}
            text="Inactive"
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
  dataSpaceBlock: {
    marginTop: 10,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: 850,
  },
  text1FlexBox: {
    fontFamily: FontFamily.textSmall,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.textLargeBolder,
    color: Color.darkGray,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
  },
  headerRow: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: 850,
  },
  text1: {
    color: Color.gray,
  },
  eleanorPena: {
    color: Color.black,
  },
  labelwrapper: {
    height: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  dataRow01: {
    backgroundColor: Color.lightBackground,
  },
  typesimpleDividerfalseSt: {
    backgroundColor: Color.dominant,
    height: 427,
  },
});

export default Tables;
