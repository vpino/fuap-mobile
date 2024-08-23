import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 20,
      }}>
      <Text> ProfileScreen </Text>
    </View>
  );
};
