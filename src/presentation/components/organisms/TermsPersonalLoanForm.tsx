import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {usePersonalLoan} from '../../hooks/personal-loan/usePersonalLoan';
import {UpdateTermsLoanDto} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';
import SliderComponent from './SliderComponent';
import {usePersonalLoanStore} from '../../store/personal-loan/usePersonalLoanStore';

interface TermsPersonalLoanFormProps {}

export const TermsPersonalLoanForm: React.FC<
  TermsPersonalLoanFormProps
> = () => {
  const {personalLoan} = usePersonalLoanStore();
  const {updateTermsLoan} = usePersonalLoan({id: personalLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTermsPersonalLoanForm = async (values: UpdateTermsLoanDto) => {
    setIsLoading(true);

    try {
      values.duration = `${values.duration} months`;

      await updateTermsLoan(values);

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
    amount: Yup.string().required('El ingreso mensual es obligatorio'),
    duration: Yup.string().required('Las facturas mensuales son obligatorias'),
  });

  return (
    <Formik
      initialValues={{
        amount: 0,
        duration: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleTermsPersonalLoanForm}>
      {({handleSubmit, setFieldValue, errors}) => (
        <View>
          <TitlePrimary label="Cuales son los términos que te interesan?" />
          <SubTitle
            label="Por favor confirme el monto que solicites a prestar, y cuantos meses le gustaría tener para pagar el préstamo."
            styles={styles.subTitle}
          />

          <SliderComponent
            leftText="Cantidad de prestamo"
            rightText="$"
            minimumValue={0}
            maximumValue={10000}
            onValueChange={value => setFieldValue('amount', value)}
          />

          <SliderComponent
            leftText="Duración del prestamo"
            rightText="Months"
            minimumValue={1}
            maximumValue={12}
            onValueChange={value => setFieldValue('duration', value)}
          />

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={!(!errors.amount && !errors.duration) || isLoading}
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
