import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import BackButton from '../../components/molecules/BackButton';
import StepIndicator from '../../components/atoms/StepIndicator';
import {StatusHomeLoan} from '../../../core/enums/status-home-loan.enum';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {PropertyUsageForm} from '../../components/organisms/PropertyUsageForm';
import {TypeHomeForm} from '../../components/organisms/TypeHomeForm';
import {HomeLoanAddressForm} from '../../components/organisms/HomeLoanAddressForm';
import {HomeLoanPriceForm} from '../../components/organisms/HomeLoanPriceForm';
import {HomeLoanPaymentInitialForm} from '../../components/organisms/HomeLoanPaymentInitialForm';
import {HomeLoanMonthlyBudgetForm} from '../../components/organisms/HomeLoanMonthlyBudgetForm';
import {AssetsHomeLoanForm} from '../../components/organisms/AssetsHomeLoanForm';
import {HomeLoanAcceptTermConditionsForm} from '../../components/organisms/HomeLoanAcceptTermConditionsForm';
import HomeLoanRejected from '../../components/organisms/HomeLoanRejected';
import LoanApproval from '../../components/organisms/LoanApproval';

enum StatusHomeLoanSteps {
  PROPERTY_USAGE = 1,
  TYPE_HOME = 2,
  ADDRESS = 3,
  PRICE = 4,
  PAYMENT_INITIAL = 5,
  MOUNTLY_FINANCE = 6,
  ASSETS = 7,
  TC = 8,
  CREATED = 9,
  PENDING = 9,
  IN_PROCESS = 9,
  FAILED = 9,
  COMPLETED = 9,
}

export const HomeLoanScreen = () => {
  const {homeLoan} = useHomeLoanStore();

  const status = homeLoan.status ?? 'PROPERTY_USAGE';

  const step = StatusHomeLoanSteps[homeLoan.status ?? 'PROPERTY_USAGE'];

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      nestedScrollEnabled={true}>
      <View style={globalStyles.container}>
        <BackButton />
        <StepIndicator
          currentStep={step}
          totalSteps={9}
          containerStyle={styles.containerIndicator}
        />
        {status === StatusHomeLoan.PROPERTY_USAGE && <PropertyUsageForm />}
        {status === StatusHomeLoan.TYPE_HOME && <TypeHomeForm />}
        {status === StatusHomeLoan.ADDRESS && <HomeLoanAddressForm />}
        {status === StatusHomeLoan.PRICE && <HomeLoanPriceForm />}
        {status === StatusHomeLoan.PAYMENT_INITIAL && (
          <HomeLoanPaymentInitialForm />
        )}
        {status === StatusHomeLoan.MOUNTLY_FINANCE && (
          <HomeLoanMonthlyBudgetForm />
        )}
        {status === StatusHomeLoan.ASSETS && <AssetsHomeLoanForm />}
        {status === StatusHomeLoan.TC && <HomeLoanAcceptTermConditionsForm />}
        {status === StatusHomeLoan.CREATED && <LoanApproval />}
        {status === StatusHomeLoan.IN_PROCESS && <LoanApproval />}
        {status === StatusHomeLoan.FAILED && <HomeLoanRejected />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerIndicator: {
    marginTop: 2,
    marginBottom: 0,
  },
});
