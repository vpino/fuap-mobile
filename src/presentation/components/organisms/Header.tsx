import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  globalColors,
  globalFontFamily,
  globalFontSize,
} from '../../../theme/GlobalStyles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../../../assets/vibrant-logo.png')}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.title]}>VIBRANT</Text>
        <View style={[styles.subTitleContainer]}>
          <Text style={styles.subTitle}>Powered by</Text>
          <Image
            style={styles.group791}
            resizeMode="cover"
            source={require('../../../../assets/tuni-logo.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    width: '100%',
  },
  logo: {
    width: 27,
    height: 20,
  },
  titleContainer: {
    flexDirection: 'column',
    padding: 6,
  },
  title: {
    fontSize: globalFontSize.size_sm_5,
    letterSpacing: 6.5,
    fontFamily: globalFontFamily.noirPro,
    color: globalColors.gray1,
    textAlign: 'left',
  },
  subTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalColors.secondary,
  },
  subTitle: {
    fontSize: globalFontSize.size_5xs_5,
    lineHeight: 12,
    fontWeight: '300',
    fontFamily: globalFontFamily.helvetica,
    color: globalColors.primary,
    opacity: 0.6,
    textAlign: 'left',
  },
  group791: {
    width: 31,
    height: 8,
    marginLeft: 1.7,
  },
});

export default Header;
