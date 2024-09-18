import React from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import {globalColors} from '../../../theme/GlobalStyles';
import {SvgProps} from 'react-native-svg';

interface TextInputWithIconProps extends TextInputProps {
  label: string;
  icon: React.FC<SvgProps>;
  iconPosition: 'left' | 'right';
  onIconPress?: () => void;
}

export const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  label,
  icon: Icon,
  iconPosition,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconPosition === 'left' && <Icon style={styles.iconContainer} />}
      <TextInput
        style={[
          styles.input,
          style,
          iconPosition === 'left' ? {paddingLeft: 0} : {paddingRight: 0},
        ]}
        placeholder={label}
        placeholderTextColor={globalColors.colorPlaceholder}
        underlineColorAndroid="transparent"
        {...rest}
        autoCapitalize="none"
      />
      {iconPosition === 'right' && <Icon style={styles.iconContainer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 55,
  },
  iconContainer: {
    margin: 5,
  },
});
