import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {Divider} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import BackButton from '../../components/molecules/BackButton';
import {useNavigationContext} from '../../navigation/NavigationContext';
import Cardloan from '../../components/organisms/CardLoan';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import LoanDetailsComponent from '../../components/organisms/LoanDetailsComponent';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import StepIndicator from '../../components/atoms/StepIndicator';
import {SubTitle} from '../../components/atoms/SubTitle';

const loanData = {
  'Deuda del préstamo': '$117,000.00',
  'Cantidad pagada del préstamo': '$17,000.00',
  'Tasa de interés': '12%',
  'Pago principal': '$968.67',
  'Pago de intereses': '$135.57',
  'Pago total adeudado': '$1,104.24',
  'fecha del borrador': '12 de Dec',
};

export const PaymentPersonalLoanScreen: React.FC<any> = ({route}) => {
  const {getCurrentRoute, setCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<NavigationProp<any>>();

  const currentRoute = getCurrentRoute();
  const loan = route.params?.loan || currentRoute?.params?.loan;

  const handlePayment = async () => {
    setCurrentRoute('AddPaymentAccountScreen', {loan});
    navigation.navigate('AddPaymentAccountScreen', {loan});
  };

  return (
    <ScrollView>
      <View>
        <BackButton containerStyle={{marginTop: 10}} />

        <TitlePrimary label="Paga tu Préstamo" styles={styles.textPrimary} />
        <SubTitle
          label="Estas o vas hacer un dueno que vive en esta propiedadaaaaaaaaas"
          styles={{color: 'white'}}
        />
        <Cardloan loan={loan} />

        <Divider style={styles.divider} />

        <StepIndicator
          currentStep={1}
          totalSteps={3}
          containerStyle={styles.containerIndicator}
          currentStepStyle={styles.currentStep}
          totalStepsStyle={styles.totalSteps}
        />

        <View style={styles.row}>
          <Text style={styles.textTerm}>Términos de Pago:</Text>
          <PrimaryButton
            onPress={() => {}}
            isLoading={false}
            label="Monto adecuado"
            styles={styles.buttonAmount}
            textStyles={styles.buttonAmountText}
          />
        </View>

        <LoanDetailsComponent data={loanData} />

        <PrimaryButton
          onPress={handlePayment}
          isLoading={false}
          label="Continuar al segundo paso -->"
          styles={styles.button}
          textStyles={styles.buttonText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  divider: {
    marginVertical: 24,
    borderRadius: 12,
  },
  textPrimary: {
    marginTop: 20,
  },
  button: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height: 52,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 18,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: globalFontFamily.interRegular,
  },
  scrollContainer: {flexGrow: 1},
  containerIndicator: {
    marginTop: 0,
    marginBottom: 10,
  },
  currentStep: {
    color: 'black',
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 30,
    marginRight: 5,
  },
  totalSteps: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontFamily: globalFontFamily.manropeMedium,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
  },
  buttonAmount: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 36,
    width: '35%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 0,
  },
  buttonAmountText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: globalFontFamily.manropeBold,
    fontWeight: 700,
    color: '#FFF',
  },
  textTerm: {
    color: '#0F172A',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: globalFontFamily.manropeBold,
    fontWeight: 700,
    marginTop: 6,
  },
});
