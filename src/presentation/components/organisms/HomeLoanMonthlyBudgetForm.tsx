import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import {UpdateHomeLoanMounthlyDetailsDto} from '../../../infrastructure/dtos/home-loan/home-loan.dto';

interface HomeLoanMonthlyBudgetFormProps {}

const monthlyIncomeOptions = [
  {key: 'Menos de $1,000', value: 'Menos de $1,000'},
  {key: '$1,000 - $2,000', value: '$1,000 - $2,000'},
  {key: '$2,000 - $3,000', value: '$2,000 - $3,000'},
  {key: '$3,000 - $4,000', value: '$3,000 - $4,000'},
  {key: '$4,000 - $5,000', value: '$4,000 - $5,000'},
  {key: '$5,000 - $6,000', value: '$5,000 - $6,000'},
  {key: '$6,000 - $7,000', value: '$6,000 - $7,000'},
  {key: '$7,000 - $8,000', value: '$7,000 - $8,000'},
  {key: '$8,000 - $10,000', value: '$8,000 - $10,000'},
  {key: 'Más de $10,000', value: 'Más de $10,000'},
];

const monthlyDebtOptions = [
  {key: 'Menos de $100', value: 'Menos de $100'},
  {key: '$100 - $200', value: '$100 - $200'},
  {key: '$200 - $300', value: '$200 - $300'},
  {key: '$300 - $400', value: '$300 - $400'},
  {key: '$400 - $500', value: '$400 - $500'},
  {key: '$500 - $600', value: '$500 - $600'},
  {key: '$600 - $700', value: '$600 - $700'},
  {key: '$700 - $800', value: '$700 - $800'},
  {key: '$800 - $1,000', value: '$800 - $1,000'},
  {key: 'Más de $1,000', value: 'Más de $1,000'},
];

export const HomeLoanMonthlyBudgetForm: React.FC<
  HomeLoanMonthlyBudgetFormProps
> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {loadLoanDetailsMounthly} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleMonthlyBudgetForm = async (
    values: UpdateHomeLoanMounthlyDetailsDto,
  ) => {
    setIsLoading(true);

    try {
      await loadLoanDetailsMounthly(values);
      setSnackbarMessage('Información de finanzas actualizada exitosamente.');
    } catch (error: any) {
      setSnackbarMessage(
        error?.message ||
          'Hubo un error al actualizar los datos, por favor intente de nuevo.',
      );
    } finally {
      setSnackbarVisible(true);
      setIsLoading(false);
    }
  };

  const onDismissSnackBar = () => setSnackbarVisible(false);

  const validationSchema = Yup.object().shape({
    monthlyIncome: Yup.string().required('El ingreso mensual es obligatorio'),
    monthlyDebt: Yup.string().required(
      'Las facturas mensuales son obligatorias',
    ),
  });

  return (
    <Formik
      initialValues={{
        monthlyIncome: 0,
        monthlyDebt: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleMonthlyBudgetForm}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="Por favor confirme detalles de tus finanzas mensuales" />
          <SubTitle
            label="¿Cuánto es tu ingreso mensual y a cuánto ascienden tus facturas mensuales?"
            styles={styles.subTitle}
          />

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('monthlyIncome', value)
            }
            data={monthlyIncomeOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Ingreso mensual"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.monthlyIncome && errors.monthlyIncome && (
            <Text style={globalStyles.errorText}>{errors.monthlyIncome}</Text>
          )}

          <SelectList
            setSelected={(value: string) => setFieldValue('monthlyDebt', value)}
            data={monthlyDebtOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect, marginTop: 20}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Facturas mensuales"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.monthlyDebt && errors.monthlyDebt && (
            <Text style={globalStyles.errorText}>{errors.monthlyDebt}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(!errors.monthlyIncome && !errors.monthlyDebt) || isLoading
            }
            isLoading={isLoading}
          />

          <Snackbar
            visible={snackbarVisible}
            onDismiss={onDismissSnackBar}
            duration={3000}
            action={{
              label: 'Dismiss',
              onPress: () => {
                onDismissSnackBar();
              },
            }}>
            {snackbarMessage}
          </Snackbar>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '40%',
  },

  subTitle: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: globalFontFamily.manropeLight,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 30,
  },
});
