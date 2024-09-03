import React, {useState} from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {Slider} from '@miblanchard/react-native-slider';
import {globalFontFamily} from '../../../theme/GlobalStyles';

interface SliderComponentProps {
  leftText: string;
  rightText: string;
  containerStyle?: ViewStyle;
  leftTextStyle?: TextStyle;
  rightTextStyle?: TextStyle;
  barStyle?: ViewStyle;
  fillStyle?: ViewStyle;
  iconSVG?: React.FC<SvgProps>;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  leftText = 'Left Text',
  rightText = 'Right Text',
  containerStyle,
  leftTextStyle,
  rightTextStyle,
  minimumValue,
  maximumValue,
  onValueChange,
}) => {
  const [valueSelected, setValueSelected] = useState(0);

  const handleSliderChange = (value: number | number[]) => {
    const newValue = Math.floor(Array.isArray(value) ? value[0] : value);
    setValueSelected(Number(Number(newValue).toFixed(2)));
    onValueChange(Number(newValue));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <Text style={[styles.leftText, leftTextStyle]}>{leftText}</Text>
        <Text style={[styles.rightText, rightTextStyle]}>
          {valueSelected} {rightText}
        </Text>
      </View>
      <Slider
        containerStyle={styles.barContainer}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor="#457EFF"
        maximumTrackTintColor={'#E2E4EA'}
        thumbTintColor={'#000'}
        thumbTouchSize={{width: 24, height: 24}}
        onValueChange={handleSliderChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    borderRadius: 6,
    borderColor: '#E2E8F0',
    borderWidth: 1,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.09,
    shadowRadius: 6,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftText: {
    color: '#676F82',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  rightText: {
    color: '#000',
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.105,
  },
  barContainer: {
    width: '100%',
  },
});

export default SliderComponent;
