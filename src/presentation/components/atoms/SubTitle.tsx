import React from 'react';
import {Text} from 'react-native-paper';
import {globalColors, globalFontFamily} from '../../../theme/GlobalStyles';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  label: string;
  styles?: StyleProp<ViewStyle>;
}

export const SubTitle = ({label, styles}: Props) => {
  return <Text style={[customStyles.subTitle, styles]}>{label}</Text>;
};

export const customStyles = StyleSheet.create({
  subTitle: {
    color: globalColors.base700LightTertiary,
    fontFamily: globalFontFamily.manropeLight,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    marginTop: 10,
  },
});
