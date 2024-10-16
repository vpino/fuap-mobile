import React from 'react';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SupportScreen} from '../screens/support/SupportScreen';
import {globalColors, globalFontFamily} from '../../theme/GlobalStyles';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import Header from '../components/organisms/Header';
import LoginScreen from '../screens/auth/LoginScreen';
import {BottomTabNavigator} from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerLeft: () => <Header />,
        headerRight: props => <DrawerToggleButton {...props} />,
        drawerType: dimensions.width >= 758 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.secondary,
        drawerLabelStyle: styles.drawerLabel,
        drawerActiveTintColor: globalColors.primary,
      }}>
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomTabNavigator}
        options={{
          drawerItemStyle: {display: 'none'},
          headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="Editar Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={require('../../../assets/solidicon7.png')}
              style={{width: size, height: size}}
            />
          ),
          headerTitle: '',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={require('../../../assets/solidicon8.png')}
              style={{width: size, height: size}}
            />
          ),
          headerTitle: '',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Cerrar Sesión"
        component={LoginScreen}
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={require('../../../assets/solidicon9.png')}
              style={{width: size, height: size}}
            />
          ),
          headerTitle: '',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export const styles = StyleSheet.create({
  drawerLabel: {
    color: globalColors.gray1,
    fontFamily: globalFontFamily.interLight,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
