import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

const loanData = {
  'Banco Mercantil': 'Cuenta Primaria',
  'Cuenta 2134': '*******2134',
  'Pago principal': '$968.67',
  'Pago de intereses': '$135.57',
  'Pago total adeudado': '$1,104.24',
  'fecha del borrador': '12 de Dec',
};

export const PaymentStatusScreen: React.FC<any> = ({route}) => {
  const {getCurrentRoute, setCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<NavigationProp<any>>();

  const currentRoute = getCurrentRoute();
  const loan = route.params?.loan || currentRoute?.params?.loan;

  const [enableStatus, setEnableStatus] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableStatus(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePayment = async () => {
    setCurrentRoute('HomeScreen');
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView>
      <View>
        <BackButton containerStyle={{marginTop: 10}} />

        <TitlePrimary label="Paga tu Préstamo" styles={styles.textPrimary} />

        <Cardloan loan={loan} />

        <Divider style={styles.divider} />

        {enableStatus && (
          <>
            <StepIndicator
              currentStep={3}
              totalSteps={3}
              containerStyle={styles.containerIndicator}
              currentStepStyle={styles.currentStep}
              totalStepsStyle={styles.totalSteps}
            />

            <View style={styles.row}>
              <Text style={styles.textTerm}>Estatus del Pago:</Text>
              <TouchableOpacity style={styles.buttonStatus} onPress={() => {}}>
                <Text style={styles.buttonStatusText}>Pendiente</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../../assets/status-pending.png')}
              style={styles.image}
            />

            <Divider style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.paymentTextTotal}>Pago total adeudado:</Text>
              <Text style={styles.paymentTextTotal}>$1,104.24</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.paymentTextBorrador}>
                fecha del borrador: 12 de Dec
              </Text>
            </View>
          </>
        )}

        {!enableStatus && (
          <>
            <View style={styles.row}>
              <Text style={styles.textTerm}>Estatus del Pago:</Text>
              <TouchableOpacity
                style={styles.buttonStatusCompleted}
                onPress={() => {}}>
                <Text style={styles.buttonStatusTextCompleted}>Completado</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.textTerm}>Detalles de Pago:</Text>
            </View>

            <LoanDetailsComponent data={loanData} />

            <PrimaryButton
              onPress={handlePayment}
              isLoading={false}
              label="Volver a Home"
              styles={styles.button}
              textStyles={styles.buttonText}
            />
          </>
        )}
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
  buttonStatus: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#676F82',
    backgroundColor: '#F3F3F3',
  },
  buttonStatusText: {
    color: '#676F82',
    fontFamily: 'Manrope',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 12,
  },
  paymentTextTotal: {
    color: '#0F172A',
    fontSize: 14,
    fontFamily: globalFontFamily.manropeBold,
    fontWeight: 600,
  },
  paymentTextBorrador: {
    color: 'rgba(15, 23, 42, 0.50)',
    fontSize: 12,
    fontFamily: globalFontFamily.manropeLight,
    fontWeight: 300,
  },
  image: {
    width: 196,
    height: 243,
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonStatusCompleted: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#16AE65',
    backgroundColor: 'rgba(22, 174, 101, 0.10)',
  },
  buttonStatusTextCompleted: {
    color: '#16AE65',
    fontFamily: 'Manrope',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 12,
  },
});
