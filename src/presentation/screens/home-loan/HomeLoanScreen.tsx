import React, {useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import BackButton from '../../components/molecules/BackButton';
import StepIndicator from '../../components/atoms/StepIndicator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
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
  PENDING = 10,
  IN_PROCESS = 10,
  FAILED = 10,
  COMPLETED = 10,
}

export const HomeLoanScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const {homeLoan} = useHomeLoanStore();

  const status = homeLoan.status ?? 'PROPERTY_USAGE';

  const step = StatusHomeLoanSteps[homeLoan.status ?? 'PROPERTY_USAGE'];

  console.log('status', status);

  useEffect(() => {
    // if (status === StatusHomeLoan.CREATED) {
    //   navigation.navigate('HomeScreen');
    // }
  }, [status, navigation]);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      nestedScrollEnabled={true}>
      <View style={globalStyles.container}>
        <BackButton />
        <StepIndicator
          currentStep={step}
          totalSteps={8}
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
        {status === StatusHomeLoan.PENDING && <PropertyUsageForm />}
        {status === StatusHomeLoan.IN_PROCESS && <PropertyUsageForm />}
        {status === StatusHomeLoan.FAILED && <PropertyUsageForm />}
        {status === StatusHomeLoan.COMPLETED && <PropertyUsageForm />}
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
