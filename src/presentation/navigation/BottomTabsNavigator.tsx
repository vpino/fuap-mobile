import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {LobbyLoanScreen} from '../screens/lobby-loan/LobbyLoanScreen';
import {SubmmissionsScreen} from '../screens/submissions/SubmissionsScreen';
import AppsIcon from '../../../assets/svg/apps-icon-black.svg';
import HomeIcon from '../../../assets/svg/home-icon-black.svg';
import SubmissionsIcon from '../../../assets/svg/submissions-icon-black.svg';
import {StyleSheet, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {LobbyOnboardingScreen} from '../screens/lobby-onbording/LobbyOnbordingScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {PersonalLoadScreen} from '../screens/personal-loan/PersonalLoanScreen';
import {HomeLoanScreen} from '../screens/home-loan/HomeLoanScreen';
import {DetailLoanScreen} from '../screens/detail-loan/DetailLoanScreen';
import {PaymentPersonalLoanScreen} from '../screens/payment-personal-loan/PaymentPersonalLoanScreen';
import {AddPaymentAccountScreen} from '../screens/add-payment-account/AddPaymentAccountScreen';
import {PaymentStatusScreen} from '../screens/payment-status/PaymentStatusScreen';

const Tab = createBottomTabNavigator();

const ICONS: Record<
  'Home' | 'Loans' | 'SubmissionsScreen',
  React.FC<SvgProps>
> = {
  Home: HomeIcon,
  Loans: AppsIcon,
  SubmissionsScreen: SubmissionsIcon,
};

let IconComponent: React.FC<SvgProps>;

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabBar}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#457EFF',
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}) => {
          IconComponent =
            ICONS[route.name as 'Home' | 'Loans' | 'SubmissionsScreen'];

          return (
            <View style={[styles.tabIcon, focused ? styles.activeTab : null]}>
              {IconComponent ? <IconComponent /> : <HomeIcon />}
            </View>
          );
        },
        tabBarLabel: () => null,
      })}>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Loans"
        component={LobbyLoanScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="SubmissionsScreen"
        component={SubmmissionsScreen}
        options={{unmountOnBlur: true}}
      />

      <Tab.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={LoginScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="LobbyOnboardingScreen"
        component={LobbyOnboardingScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="LobbyLoanScreen"
        component={LobbyLoanScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="PersonalLoadScreen"
        component={PersonalLoadScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="HomeLoanScreen"
        component={HomeLoanScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="DetailLoanScreen"
        component={DetailLoanScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="PaymentPersonalLoanScreen"
        component={PaymentPersonalLoanScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="AddPaymentAccountScreen"
        component={AddPaymentAccountScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="PaymentStatusScreen"
        component={PaymentStatusScreen}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderRadius: 28,
    backgroundColor: '#E0E8FF',
    height: 40,
    width: 100,
  },
  tabBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
    flexShrink: 0,
    backgroundColor: '#F8F8F8',
  },
});
