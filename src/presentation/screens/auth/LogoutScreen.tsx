import React, {useEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, ActivityIndicator} from 'react-native';
import {useAuth} from '../../hooks/auth/useAuth';
import {RootStackParams} from '../../navigation/StackNavigator';

export const LogoutScreen = () => {
  const {logout} = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigation.navigate('LoginScreen');
    };

    performLogout();
  }, [logout, navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};
