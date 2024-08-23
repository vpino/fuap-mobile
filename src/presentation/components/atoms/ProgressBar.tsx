import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

interface ProgressBarProps {
  progress: number; // 0 to 100
  width?: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
}

export default function ProgressBar({
  progress,
  width,
  height = 16,
  backgroundColor = '#E2E4EA',
  progressColor = '#333',
}: ProgressBarProps) {
  const dimensions = useWindowDimensions();

  width = width ?? dimensions.width;
  const progressWidth = (progress / 100) * width;

  return (
    <View
      style={[styles.container, {height, backgroundColor}]}
      accessibilityRole="progressbar"
      accessibilityValue={{min: 0, max: 100, now: progress}}>
      <View
        style={[
          styles.progress,
          {
            width: progressWidth,
            height,
            backgroundColor: progressColor,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 80,
    overflow: 'hidden',
    marginRight: 20,
    width: '100%',
  },
  progress: {
    borderRadius: 80,
  },
});
