import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {globalColors} from './theme/GlobalStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SideMenuNavigator } from './presentation/navigation/SideMenuNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: globalColors.primary,
  },
};

const settings = {
  icon: (props: any) => <IonIcon {...props} />,
};

export const FuapMobileApp = () => {
  return (
    <PaperProvider theme={theme} settings={settings}>
      <NavigationContainer>
        <SideMenuNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
