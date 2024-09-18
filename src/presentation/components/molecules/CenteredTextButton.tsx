import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface CenteredTextButtonProps {
  containerStyle?: ViewStyle;
  text: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonText: string;
  buttonTextStyle?: TextStyle;
  iconSVG?: React.FC<SvgProps>;
  iconPosition?: 'left' | 'right';
  routeRedirection?: string;
}

const CenteredTextButton: React.FC<CenteredTextButtonProps> = ({
  containerStyle,
  text,
  textStyle,
  buttonStyle,
  buttonText,
  buttonTextStyle,
  iconSVG: IconSVG,
  iconPosition = 'left',
  routeRedirection,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    if (routeRedirection) {
      navigation.navigate('BottomNavigator', {
        screen: routeRedirection,
      });
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={handlePress}>
        {iconPosition === 'left' && IconSVG && <IconSVG style={styles.icon} />}
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
        {iconPosition === 'right' && IconSVG && <IconSVG style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontFamily: globalFontFamily.interLight,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    backgroundColor: '#E0E8FF',
    width: '100%',
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default CenteredTextButton;
