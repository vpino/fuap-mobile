import React from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import ProgressBar from '../../components/atoms/ProgressBar';
import Breadcrumb from '../../components/molecules/Breadcrumb';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {RootStackParams} from '../../navigation/StackNavigator';
import {LoadNames} from '../../components/organisms/LoadNames';
import {useMachine} from '@xstate/react';
import {onboardingMachine} from '../../machines/onboarding/OnboardingMachine';

export const OnboardingScreen = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [state, send] = useMachine(onboardingMachine);
  const currentState = state.value;
  console.log('currentState', currentState);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <ProgressBar progress={10} />
        <Breadcrumb />
        {currentState === 'loadNames' && <LoadNames send={send} />}
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     marginTop: 20,
//     width: '60%',
//   },
// });
