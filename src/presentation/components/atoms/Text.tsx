import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  variant?: 'header' | 'body' | 'caption';
}

export const Text: React.FC<CustomTextProps> = ({ variant = 'body', style, ...props }) => {
  const variantStyles = {
    header: { fontSize: 24, fontWeight: 'bold' },
    body: { fontSize: 16 },
    caption: { fontSize: 14, color: '#666' },
  };

  return <RNText style={[variantStyles[variant], style]} {...props} />;
};
