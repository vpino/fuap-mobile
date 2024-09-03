import React, {useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import BackButton from '../../components/molecules/BackButton';
import StepIndicator from '../../components/atoms/StepIndicator';
import {MonthlyBudgetForm} from '../../components/organisms/MonthlyBudgetForm';
import {usePersonalLoanStore} from '../../store/personal-loan/usePersonalLoanStore';
import {StatusPersonalLoan} from '../../../core/enums/status-loan.enum';
import {TermsPersonalLoanForm} from '../../components/organisms/TermsPersonalLoanForm';
import {AssetsPersonalLoanForm} from '../../components/organisms/AssetsPersonalLoanForm';
import {AcceptTermConditionsForm} from '../../components/organisms/AcceptTermConditionsForm';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';

enum StatusPersonalLoanSteps {
  MOUNTHLY_BUDGET = 1,
  TEMRS_LOAN = 2,
  ASSETS = 3,
  TC = 4,
  CREATED = 4,
}

export const PersonalLoadScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const {personalLoan} = usePersonalLoanStore();

  const status = personalLoan.status ?? 'MOUNTHLY_BUDGET';

  const step =
    StatusPersonalLoanSteps[personalLoan.status ?? 'MOUNTHLY_BUDGET'];

  useEffect(() => {
    if (status === StatusPersonalLoan.CREATED) {
      navigation.navigate('HomeScreen');
    }
  }, [status, navigation]);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      nestedScrollEnabled={true}>
      <View style={globalStyles.container}>
        <BackButton />
        <StepIndicator
          currentStep={step}
          totalSteps={4}
          containerStyle={styles.containerIndicator}
        />
        {status === StatusPersonalLoan.MOUNTHLY_BUDGET && <MonthlyBudgetForm />}
        {status === StatusPersonalLoan.TEMRS_LOAN && <TermsPersonalLoanForm />}
        {status === StatusPersonalLoan.ASSETS && <AssetsPersonalLoanForm />}
        {status === StatusPersonalLoan.TC && <AcceptTermConditionsForm />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerIndicator: {
    marginTop: 2,
  },
});
