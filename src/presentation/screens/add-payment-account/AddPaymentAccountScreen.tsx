import React, {useState} from 'react';
import {
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
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import StepIndicator from '../../components/atoms/StepIndicator';
import ArrowBlack from '../../../../assets/svg/arrow-black.svg';
import CenteredTextButton from '../../components/molecules/CenteredTextButton';
import {SelectList} from 'react-native-dropdown-select-list';
import Bank from '../../../../assets/svg/bank.svg';
import {TextInputForm} from '../../components/atoms/TextInputForm';
import AccountBank from '../../../../assets/svg/account-bank.svg';
import BankAccountItem from '../../components/organisms/BankAccountItem';
import AddGray from '../../../../assets/svg/add-gray.svg';
import {SubTitle} from '../../components/atoms/SubTitle';

const percentageOptions = [{key: '1', value: 'Banco Mercantil'}];

export const AddPaymentAccountScreen: React.FC<any> = ({route}) => {
  const {getCurrentRoute, setCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<NavigationProp<any>>();

  const currentRoute = getCurrentRoute();
  const loan = route.params?.loan || currentRoute?.params?.loan;

  const [addAccount, setAddAccount] = useState<boolean>(false);
  const [bank, setBank] = useState<string>('');
  const [bankNumber, setBankNumber] = useState<string>('');
  const [accounts, setAccounts] = useState<any[]>([]);

  const handlePayment = async (routeGo?: string, account?: any) => {
    if (routeGo) {
      setCurrentRoute(routeGo ?? '', {loan});
      navigation.navigate(routeGo ?? '', {loan});
      return;
    }

    if (account) {
      const updatedAccounts = [...accounts, account];

      setAccounts(updatedAccounts);
      setAddAccount(false);

      return;
    }
  };

  const enableAddAccount = () => {
    console.log(bank);
    setAddAccount(true);
  };

  const removeAccount = (index: number) => {
    if (index >= 0 && index < accounts.length) {
      const updatedAccounts = [...accounts];
      updatedAccounts.splice(index, 1);

      setAccounts(updatedAccounts);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View style={globalStyles.container}>
          <BackButton containerStyle={{marginTop: 10}} />
          <TitlePrimary label="Paga tu Préstamo" styles={styles.textPrimary} />

          <SubTitle
            label="Puedes aplicar para cualquier producto ofrecido abajo o realizar cualquier informacion asociado a su cuenta."
            styles={styles.subTitle}
          />

          <Cardloan loan={loan} type={loan.type} />

          <Divider style={styles.divider} />

          <StepIndicator
            currentStep={2}
            totalSteps={3}
            containerStyle={styles.containerIndicator}
            currentStepStyle={styles.currentStep}
            totalStepsStyle={styles.totalSteps}
          />

          {accounts.length <= 0 && !addAccount && (
            <>
              <TouchableOpacity onPress={enableAddAccount}>
                <View style={styles.row}>
                  <Text style={styles.textTerm}>Cuenta bancaria</Text>
                </View>
                <CenteredTextButton
                  text="¡Todavía te falta conectar tu cuenta bancaria!"
                  buttonText="Agregar nueva cuenta"
                  iconSVG={ArrowBlack}
                  iconPosition="right"
                  onPress={enableAddAccount}
                />
              </TouchableOpacity>
            </>
          )}

          {addAccount && (
            <>
              <Text style={styles.textAccount}>
                Conectar tu cuenta bancaria
              </Text>
              <Text style={styles.subTextAccount}>
                Confirme tu cuenta bancaria, número de cuenta, y tu Código de
                Cuenta Interbancario para retirar su fondo.
              </Text>

              <View style={styles.selectContainer}>
                <Bank style={styles.icon} />
                <SelectList
                  setSelected={(value: string) => {
                    setBank(value);
                  }}
                  data={percentageOptions}
                  save="value"
                  boxStyles={styles.inputSelect}
                  dropdownStyles={styles.dropDownStyleSelect}
                  placeholder="Selecciona tu banco"
                  searchPlaceholder="Buscar"
                  notFoundText="No encontrado"
                />
              </View>

              <TextInputForm
                label=""
                onChangeText={(value: string) => {
                  setBankNumber(value);
                }}
                onBlur={(value: any) => {
                  setBankNumber(value);
                }}
                icon={AccountBank}
                placeholder="Cuenta Bancaria"
                style={styles.inputText}
              />

              <Text style={styles.subTextAccount}>
                Cuenta asociado con tu banco seleccionado.
              </Text>
            </>
          )}

          {accounts.length > 0 && !addAccount && (
            <>
              <View style={styles.row}>
                <Text>Cuenta Bancaria</Text>
                <TouchableOpacity onPress={enableAddAccount}>
                  <View style={[styles.row, styles.addNewAccount]}>
                    <AddGray />
                    <Text style={styles.textAddNewAccount}>
                      Agregar nueva cuenta
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}

          {!addAccount &&
            accounts.length > 0 &&
            accounts.map((account, index) => (
              <BankAccountItem
                key={index}
                bankName={account.bankName}
                accountNumber={account.accountNumber}
                onIconPress={() => {
                  removeAccount(index);
                }}
              />
            ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <PrimaryButton
          onPress={() => {
            if (accounts.length > 0) {
              handlePayment('PaymentStatusScreen', {
                bankName: bank,
                accountNumber: bankNumber,
              });

              return;
            }

            if (!bank || !bankNumber) {
              return;
            }

            handlePayment(undefined, {
              bankName: bank,
              accountNumber: bankNumber,
            });
          }}
          isLoading={false}
          label={
            addAccount
              ? 'Conectar mi cuenta -->'
              : accounts.length > 0
              ? 'Continuar al último paso -->'
              : 'Pagar mi préstamo'
          }
          styles={bank && bankNumber ? styles.buttonEnabled : styles.button}
          textStyles={styles.buttonText}
          disabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    backgroundColor: 'gray',
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
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
  textTerm: {
    color: '#0F172A',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: globalFontFamily.manropeBold,
    fontWeight: 700,
    marginTop: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
  },
  inputSelect: {
    display: 'flex',
    padding: 0,
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    width: '95%',
    borderRadius: 0,
    borderWidth: 0,
    shadowColor: 'transparent',
  },
  dropDownStyleSelect: {
    color: '#333',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    borderRadius: 0,
    borderWidth: 0,
  },
  inputText: {
    display: 'flex',
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    marginTop: 10,
    shadowColor: '0px 0px 5px 0px rgba(18, 18, 32, 0.14)',
  },
  textAccount: {
    color: '#0F172A',
    fontFamily: globalFontFamily.manropeRegular,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  subTextAccount: {
    color: '#808080',
    fontFamily: globalFontFamily.helvetica,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 300,
    marginVertical: 10,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '0px 0px 5px 0px rgba(18, 18, 32, 0.14)',
    borderColor: 'gray',
  },
  icon: {
    marginRight: 10,
  },
  buttonEnabled: {
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
  addNewAccount: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  textAddNewAccount: {
    color: '#000',
    fontFamily: globalFontFamily.manropeMedium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
  },
  subTitle: {
    color: 'white',
    marginBottom: 0,
    marginTop: -19,
  },
});

export default AddPaymentAccountScreen;
