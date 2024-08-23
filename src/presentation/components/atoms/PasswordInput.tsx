import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import {globalColors} from '../../../theme/GlobalStyles';
import PasswordSvg from '../../../../assets/password.svg';

interface PasswordInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  style,
  ...rest
}) => {
  const [secureText, _] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <PasswordSvg style={styles.icon} />
      <TextInput
        placeholder={label}
        placeholderTextColor={globalColors.colorPlaceholder}
        style={[styles.input, style]}
        secureTextEntry={secureText}
        underlineColorAndroid="transparent"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    margin: 5,
  },
});
