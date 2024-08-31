import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {globalFontFamily} from '../../../theme/GlobalStyles';

interface TwoTextRowProps {
  firstText: string;
  secondText: string;
  secondTextRoute?: keyof RootStackParams;
  FirstTextStyle?: TextStyle;
  secondTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconSVG?: React.FC<SvgProps>;
}

const TwoTextRow: React.FC<TwoTextRowProps> = ({
  firstText,
  secondText,
  secondTextRoute,
  FirstTextStyle,
  secondTextStyle,
  containerStyle,
  iconSVG: IconSVG,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handlePress = () => {
    if (secondTextRoute) {
      navigation.navigate(secondTextRoute);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.firstText, FirstTextStyle]}>{firstText}</Text>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.secondTextContainer}>
        <Text style={[styles.secondText, secondTextStyle]}>{secondText}</Text>
        {IconSVG && <IconSVG width={16} height={16} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstText: {
    color: '#000',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  secondTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondText: {
    color: '#457EFF',
    textAlign: 'right',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
  icon: {
    marginLeft: 4,
  },
});

export default TwoTextRow;
