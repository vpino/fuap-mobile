import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface SocialCardProps {
  label: string;
  imagenSVG: React.FC<SvgProps>;
}

const SocialCard: React.FC<SocialCardProps> = ({
  label,
  imagenSVG: ImagenSVG,
}) => {
  return (
    <View style={styles.container}>
      <ImagenSVG width={32} height={32} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    width: 110,
  },
  label: {
    color: '#7D7D7D',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 28,
  },
});

export default SocialCard;
