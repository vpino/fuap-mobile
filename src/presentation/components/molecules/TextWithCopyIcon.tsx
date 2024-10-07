import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CopyBlue from '../../../../assets/svg/copy-icon-blue.svg';
import Clipboard from '@react-native-clipboard/clipboard';

interface TextWithCopyIconProps {
  text: string;
  style?: object;
}

export const TextWithCopyIcon: React.FC<TextWithCopyIconProps> = ({
  text,
  style,
}) => {
  const handleCopy = () => {
    Clipboard.setString(text);
    console.log('Texto copiado al portapapeles');
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={handleCopy}>
        <CopyBlue style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Asegura que los elementos estén alineados horizontalmente
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F8F8F8',
  },
  text: {
    color: '#0F172A',
    fontFamily: 'Manrope',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32, // 246.154%
  },
  icon: {
    width: 24,
    height: 24,
  },
});
