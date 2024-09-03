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
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {globalFontFamily} from '../../../theme/GlobalStyles';

interface CardLoadActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  ButtonIcon: React.FC<SvgProps>;
  textRoute?: keyof RootStackParams;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

const CardLoadAction: React.FC<CardLoadActionProps> = ({
  title,
  subtitle,
  buttonText,
  ButtonIcon,
  textRoute,
  containerStyle,
  titleStyle,
  subtitleStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handlePress = () => {
    if (textRoute) {
      navigation.navigate(textRoute);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={handlePress}>
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
        <ButtonIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
  title: {
    color: '#000',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  subtitle: {
    color: '#676F82',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  button: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    borderRadius: 6,
    backgroundColor: '#333',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: globalFontFamily.interRegular,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
});

export default CardLoadAction;
