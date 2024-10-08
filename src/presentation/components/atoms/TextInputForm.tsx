import React from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface TextInputFormProps extends TextInputProps {
  label: string;
  icon?: React.FC<SvgProps>;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
  disabled?: boolean;
}

export const TextInputForm: React.FC<TextInputFormProps> = ({
  label,
  icon: Icon,
  iconPosition = 'left',
  style,
  disabled,
  ...rest
}) => {
  return (
    <View
      style={[styles.container, style, disabled && styles.disabledContainer]}>
      {Icon && iconPosition === 'left' && (
        <View style={styles.iconWrapper}>
          <Icon style={styles.icon} />
        </View>
      )}
      <TextInput
        style={[
          styles.input,
          iconPosition === 'left' ? {paddingLeft: 20} : {paddingRight: 20},
          disabled && styles.disabledInput,
        ]}
        placeholder={label}
        placeholderTextColor="#676F82"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        editable={!disabled}
        {...rest}
      />
      {Icon && iconPosition === 'right' && (
        <View style={styles.iconWrapper}>
          <Icon style={styles.icon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    backgroundColor: '#FFF',
    color: '#676F82',
  },
  disabledContainer: {
    backgroundColor: '#f0f0f0',
    borderColor: '#d0d0d0',
  },
  input: {
    flex: 1,
    height: 55,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
  },
  disabledInput: {
    color: '#a0a0a0',
  },
  iconWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
