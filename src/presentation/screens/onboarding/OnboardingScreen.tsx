import React from 'react';
import {View, ScrollView} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import ProgressBar from '../../components/atoms/ProgressBar';
import Breadcrumb from '../../components/molecules/Breadcrumb';
import {LoadNames} from '../../components/organisms/LoadNames';
import {useMachine} from '@xstate/react';
import {onboardingMachine} from '../../machines/onboarding/OnboardingMachine';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import {IdentityDocument} from '../../components/organisms/IdentityDocument';
import {AddressInformation} from '../../components/organisms/AddressInformation';

enum StatusOnboarding {
  LOAD_NAMES = 'loadNames',
  IDENTITY_DOCUMENT = 'document',
  ADDRESS = 'address',
  HOUSING = 'housing',
  EDUCATION = 'education',
  OCCUPATION = 'occupation',
  COMPANY = 'company',
  CONTACT = 'contact',
}

enum ProgressBarEnum {
  LOAD_NAMES = 12.5,
  IDENTITY_DOCUMENT = 25,
  ADDRESS = 37.5,
  HOUSING = 50,
  EDUCATION = 62.5,
  OCCUPATION = 75,
  COMPANY = 87.5,
  CONTACT = 100,
}

export const OnboardingScreen = () => {
  const [state, send] = useMachine(onboardingMachine);
  const {individualCustomer} = useOnboardingStore();

  const status = StatusOnboarding[individualCustomer.status ?? 'LOAD_NAMES'];
  const progressBar =
    ProgressBarEnum[individualCustomer.status ?? 'LOAD_NAMES'];

  const currentState = status !== 'loadNames' ? status : state.value;

  console.log('currentState', currentState);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      nestedScrollEnabled={true}>
      <View style={globalStyles.container}>
        <ProgressBar progress={progressBar} />
        <Breadcrumb />
        {currentState === 'loadNames' && <LoadNames send={send} />}
        {currentState === 'document' && <IdentityDocument send={send} />}
        {currentState === 'address' && <AddressInformation send={send} />}
      </View>
    </ScrollView>
  );
};
