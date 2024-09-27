import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import ArrowLeftWhite from '../../../../assets/svg/arrow-left-white.svg';
import {useNavigationContext} from '../../navigation/NavigationContext';

interface BackButtonProps {
  Icon?: React.FC<SvgProps>;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const BackButton: React.FC<BackButtonProps> = ({
  Icon,
  containerStyle,
  textStyle,
}) => {
  const {goBackToPreviousRoute} = useNavigationContext();

  Icon = Icon ?? ArrowLeftWhite;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={goBackToPreviousRoute}>
      <Icon />
      <Text style={[styles.text, textStyle]}>Atrás</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#676F82',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 8,
  },
});

export default BackButton;
