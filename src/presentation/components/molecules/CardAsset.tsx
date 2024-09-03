import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface CardAssetProps {
  icon: React.FC<SvgProps>;
  label?: string;
  containerStyle?: TextStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

const CardAsset: React.FC<CardAssetProps> = ({
  icon: IconSVG,
  label,
  containerStyle,
  textStyle,
  onPress,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          isSelected ? styles.selected : {},
          containerStyle,
        ]}>
        <IconSVG />
        <Text style={[styles.label, textStyle]} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#828282',
    backgroundColor: '#FFF',
    width: 115,
    height: 118,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginRight: 6,
    marginBottom: 12,
  },
  selected: {
    borderColor: '#77B1FF',
    shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  label: {
    color: 'rgba(26, 26, 26, 0.70)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default CardAsset;
