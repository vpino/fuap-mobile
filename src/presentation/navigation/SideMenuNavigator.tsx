import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SupportScreen} from '../screens/support/SupportScreen';
import {globalColors, globalFontFamily} from '../../theme/GlobalStyles';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen';
import Header from '../components/organisms/Header';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => <Header />,
        headerRight: props => <DrawerToggleButton {...props} />,
        drawerType: (dimensions.width >= 758) ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.secondary,
        drawerLabelStyle: styles.drawelLabel,
        drawerActiveTintColor: globalColors.primary,
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
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
        }}
      />
    </Drawer.Navigator>
  );
};

export const styles = StyleSheet.create({
  drawelLabel: {
    color: globalColors.gray1,
    fontFamily: globalFontFamily.interLight,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
