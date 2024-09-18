import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {LobbyOnboardingScreen} from '../screens/lobby-onbording/LobbyOnbordingScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {LobbyLoanScreen} from '../screens/lobby-loan/LobbyLoanScreen';
import {PersonalLoadScreen} from '../screens/personal-loan/PersonalLoanScreen';
import {SubmmissionsScreen} from '../screens/submissions/SubmissionsScreen';
import {HomeLoanScreen} from '../screens/home-loan/HomeLoanScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
  LobbyOnboardingScreen: undefined;
  OnboardingScreen: undefined;
  LobbyLoanScreen: undefined;
  PersonalLoadScreen: undefined;
  SubmmissionsScreen: undefined;
  HomeLoanScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="LobbyOnboardingScreen"
        component={LobbyOnboardingScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="LobbyLoanScreen"
        component={LobbyLoanScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="PersonalLoadScreen"
        component={PersonalLoadScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="SubmmissionsScreen"
        component={SubmmissionsScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="HomeLoanScreen"
        component={HomeLoanScreen}
      />
    </Stack.Navigator>
  );
};
