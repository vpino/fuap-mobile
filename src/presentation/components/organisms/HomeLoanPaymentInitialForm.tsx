import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {TextInputForm} from '../atoms/TextInputForm';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import {SelectList} from 'react-native-dropdown-select-list';

interface HomeLoanPaymentInitialFormProps {}

const percentageOptions = [
  {key: '1', value: '1%'},
  {key: '2', value: '25%'},
  {key: '3', value: '50%'},
  {key: '4', value: '75%'},
  {key: '5', value: '100%'},
];

export const HomeLoanPaymentInitialForm: React.FC<
  HomeLoanPaymentInitialFormProps
> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updatePaymentInitial} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleHomeLoanPaymentInitialForm = async (values: {
    percentageInitial: string;
    paymentInitial: number;
  }) => {
    setIsLoading(true);

    try {
      await updatePaymentInitial({
        percentageInitial: values.percentageInitial,
        paymentInitial: Number(values.paymentInitial),
      });

      setSnackbarMessage('Información actualizada exitosamente.');
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
    percentageInitial: Yup.string().required(
      'El porcentaje inicial es obligatoria',
    ),
    paymentInitial: Yup.number().required('El pago inicial es obligatoria'),
  });

  return (
    <Formik
      initialValues={{
        percentageInitial: homeLoan.percentageInitial ?? '25%',
        paymentInitial: isNaN(Number(homeLoan.paymentInitial))
          ? 0
          : Number(homeLoan.paymentInitial) ?? 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleHomeLoanPaymentInitialForm}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        touched,
        errors,
        setFieldValue,
      }) => (
        <View>
          <TitlePrimary label="Por favor confirme la direcion que quieres comprar?" />
          <SubTitle
            label="Confirme el numero de telefono y la dirrecion sobre la casa."
            styles={{marginTop: 10}}
          />

          <View style={styles.rowContainer}>
            <SelectList
              setSelected={(value: string) =>
                setFieldValue('percentageInitial', value)
              }
              data={percentageOptions}
              save="value"
              boxStyles={styles.inputSelect}
              dropdownStyles={styles.dropDownStyleSelect}
              placeholder="25%"
              searchPlaceholder="Buscar"
              notFoundText="No encontrado"
            />
            {touched.percentageInitial && errors.percentageInitial && (
              <Text style={globalStyles.errorText}>
                {errors.percentageInitial}
              </Text>
            )}

            <TextInputForm
              label="Pago inicial"
              value={String(values.paymentInitial)}
              onChangeText={handleChange('paymentInitial')}
              onBlur={handleBlur('paymentInitial')}
              style={styles.inputText}
            />
          </View>

          {touched.paymentInitial && errors.paymentInitial && (
            <Text style={globalStyles.errorText}>{errors.paymentInitial}</Text>
          )}
          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={Object.keys(errors).length > 0 || isLoading}
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
    width: '45%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  inputSelect: {
    display: 'flex',
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    alignItems: 'center',
    marginTop: 10,
  },
  dropDownStyleSelect: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    color: '#333',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  inputText: {
    display: 'flex',
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    marginTop: 10,
    width: '75%',
  },
});
