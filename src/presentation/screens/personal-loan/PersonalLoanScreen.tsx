import React from 'react';
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
import PersonalLoanApproval from '../../components/organisms/PersonalLoanApproval';
import PersonalLoanRejected from '../../components/organisms/PersonalLoanRejected';

enum StatusPersonalLoanSteps {
  MOUNTHLY_BUDGET = 1,
  TEMRS_LOAN = 2,
  ASSETS = 3,
  TC = 4,
  CREATED = 5,
  IN_PROCESS = 5,
  FAILED = 5,
}

export const PersonalLoadScreen = () => {
  const {personalLoan} = usePersonalLoanStore();

  const status = personalLoan.status ?? 'MOUNTHLY_BUDGET';

  const step =
    StatusPersonalLoanSteps[personalLoan.status ?? 'MOUNTHLY_BUDGET'];

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      nestedScrollEnabled={true}>
      <View style={globalStyles.container}>
        <BackButton />
        <StepIndicator
          currentStep={step}
          totalSteps={5}
          containerStyle={styles.containerIndicator}
        />
        {status === StatusPersonalLoan.MOUNTHLY_BUDGET && <MonthlyBudgetForm />}
        {status === StatusPersonalLoan.TEMRS_LOAN && <TermsPersonalLoanForm />}
        {status === StatusPersonalLoan.ASSETS && <AssetsPersonalLoanForm />}
        {status === StatusPersonalLoan.TC && <AcceptTermConditionsForm />}
        {status === StatusPersonalLoan.CREATED && <PersonalLoanApproval />}
        {status === StatusPersonalLoan.IN_PROCESS && <PersonalLoanApproval />}
        {status === StatusPersonalLoan.FAILED && <PersonalLoanRejected />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerIndicator: {
    marginTop: 2,
  },
});
