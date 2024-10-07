import React from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface TextAreaFormProps extends TextInputProps {
  label: string;
  icon?: React.FC<SvgProps>;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
}

export const TextAreaForm: React.FC<TextAreaFormProps> = ({
  label,
  icon: Icon,
  iconPosition = 'left',
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {Icon && iconPosition === 'left' && (
        <View style={styles.iconWrapper}>
          <Icon style={styles.icon} />
        </View>
      )}
      <TextInput
        style={[
          styles.input,
          styles.textArea,
          iconPosition === 'left' ? {paddingLeft: 20} : {paddingRight: 20},
        ]}
        placeholder={label}
        placeholderTextColor="#676F82"
        underlineColorAndroid="transparent"
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        {...rest}
        autoCapitalize="none"
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
    alignItems: 'flex-start',
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    backgroundColor: '#FFF',
    color: '#676F82',
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
  },
  textArea: {
    minHeight: 100,
    padding: 10,
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
