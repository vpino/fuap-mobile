import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {Divider} from 'react-native-paper';
import Cardloan from '../../components/organisms/CardLoan';
import LoanDetailsComponent from '../../components/organisms/LoanDetailsComponent';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import BackButton from '../../components/molecules/BackButton';

const loanData = {
  'Monto original del préstamo': '$7,000.00',
  'Tasa de interés': '12%',
  'Deuda principal': '$6,404.45',
  'Saldo de intereses': '$35.57',
  'Plazo del préstamo': '12 meses',
  'Fecha de vencimiento': '15 de Dec 2049',
  'Fecha de pago': '11 de Dec 2024',
  'LTV pendiente %': '99.08',
  'Pago total adeudado': '$1,104.24',
  'fecha del borrador': '12 de Dec',
};

export const DetailLoanScreen: React.FC<any> = ({route}) => {
  const {loan} = route.params;

  const navigation = useNavigation<NavigationProp<any>>();

  const handlePayment = async () => {
    navigation.navigate('HomeScreen');
  };

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View>
        <BackButton />
        <TitlePrimary
          label="Detalles del Préstamo"
          styles={styles.textPrimary}
        />

        <Cardloan loan={loan} />

        <Divider style={styles.divider} />

        <LoanDetailsComponent data={loanData} />

        <PrimaryButton
          onPress={() => {
            handlePayment();
          }}
          isLoading={false}
          label="Pagar mi préstamo"
          styles={styles.button}
          textStyles={styles.buttonText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 24,
    borderRadius: 12,
  },
  textPrimary: {
    marginTop: 0,
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
});
