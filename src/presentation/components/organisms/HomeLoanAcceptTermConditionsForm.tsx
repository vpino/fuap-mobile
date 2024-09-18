import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {UpdateTermsAndConditionsDto} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';
import CheckBox from '@react-native-community/checkbox';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';

interface HomeLoanAcceptTermConditionsFormProps {}

export const HomeLoanAcceptTermConditionsForm: React.FC<
  HomeLoanAcceptTermConditionsFormProps
> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updateTermsAndConditions} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAcceptTermConditionsForm = async (
    values: UpdateTermsAndConditionsDto,
  ) => {
    setIsLoading(true);

    try {
      await updateTermsAndConditions(values);

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
    tc: Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),
  });

  return (
    <Formik
      initialValues={{
        tc: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleAcceptTermConditionsForm}>
      {({handleSubmit, setFieldValue, values, errors, touched}) => (
        <View>
          <TitlePrimary label="Confirme para mandar tu aplicación" />

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={values.tc}
              onValueChange={newValue => setFieldValue('tc', newValue)}
              style={styles.checkbox}
              tintColors={{true: '#1064CA', false: 'black'}}
            />
            <TouchableOpacity onPress={() => setFieldValue('tc', !values.tc)}>
              <Text style={styles.checkboxLabel}>
                <Text style={styles.textPrimary}>
                  Al hacer clic, acepta nuestros{' '}
                </Text>
                <Text style={styles.textLink}>Términos y condiciones</Text>
              </Text>
            </TouchableOpacity>
          </View>
          {touched.tc && errors.tc && (
            <Text style={styles.errorText}>{errors.tc}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Confirmar y Aplicar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={!!errors.tc || isLoading}
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
    width: '55%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginRight: 20,
  },
  checkbox: {
    padding: 5,
    borderRadius: 4,
    shadowColor: '0px 1px 3px 0px rgba(0, 0, 0, 0.08)',
  },
  checkboxLabel: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  textPrimary: {
    color: 'rgba(26, 26, 26, 0.70)',
    fontFamily: globalFontFamily.manropeLight,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
  },
  textLink: {
    color: '#3F8CEC',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  subTitle: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: globalFontFamily.manropeExtraLight,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
  },
});
