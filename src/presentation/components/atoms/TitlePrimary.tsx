import React from 'react';
import {Text} from 'react-native-paper';
import {globalColors, globalFontFamily} from '../../../theme/GlobalStyles';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  label: string;
  styles?: StyleProp<ViewStyle>;
}

export const TitlePrimary = ({label, styles}: Props) => {
  return <Text style={[customStyles.title, styles]}>{label}</Text>;
};

export const customStyles = StyleSheet.create({
  title: {
    color: globalColors.slate900,
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 24,
  },
});
