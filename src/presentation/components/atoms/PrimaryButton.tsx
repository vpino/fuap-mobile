import React from 'react';
import {Button, Text} from 'react-native-paper';
import {globalStyles} from '../../../theme/GlobalStyles';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  icon?: any;
  styles?: StyleProp<ViewStyle>;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

export const PrimaryButton = ({
  onPress,
  label,
  isLoading,
  icon,
  styles,
  iconPosition = 'left',
  disabled,
}: Props) => {
  return (
    <Button
      onPress={() => onPress()}
      loading={isLoading}
      disabled={disabled}
      style={[globalStyles.primaryButton, styles]}
      icon={icon}
      contentStyle={{
        flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
      }}
      labelStyle={{color: 'white', fontSize: 18}}>
      <Text style={globalStyles.textPrimaryButton}>{label}</Text>
    </Button>
  );
};
