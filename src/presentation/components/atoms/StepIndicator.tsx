import React from 'react';
import {Text, StyleSheet, View, TextStyle, ViewStyle} from 'react-native';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  currentStepStyle?: TextStyle;
  totalStepsStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  currentStepStyle,
  totalStepsStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.currentStep, currentStepStyle]}>
        Paso {currentStep}
      </Text>
      <Text style={[styles.totalSteps, totalStepsStyle]}>de {totalSteps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  currentStep: {
    color: '#005FF9',
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    marginRight: 5,
  },
  totalSteps: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
  },
});

export default StepIndicator;
