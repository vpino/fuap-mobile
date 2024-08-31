import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {TextInputForm} from '../atoms/TextInputForm';
import {useOnboarding} from '../../hooks/onboarding/useOnboarding'; // Import your custom hook
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface LoadNamesProps {
  send: (event: any) => void;
}

export const LoadNames: React.FC<LoadNamesProps> = ({send}) => {
  const {id} = useAuthStore();
  const {individualCustomer} = useOnboardingStore();

  const {loadNames} = useOnboarding({id: id ?? ''});

  useEffect(() => {}, [individualCustomer]);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadNames = async (values: {
    firstName: string;
    lastName: string;
  }) => {
    setIsLoading(true);

    try {
      await loadNames({firstName: values.firstName, lastName: values.lastName});
      setSnackbarMessage('Nombre y apellidos actualizados exitosamente.');
      send({type: 'NEXT', data: {loadNames: values}});
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
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        firstName: individualCustomer.firstName || '',
        lastName: individualCustomer.lastName || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleLoadNames}>
      {({handleSubmit, handleChange, handleBlur, values, errors, touched}) => (
        <View>
          <TitlePrimary label="Cual es tu nombre oficial?" />
          <SubTitle label="Por favor comparta el nombre en su licencia, pasaporte, o cualquier documento gubernamental." />

          <TextInputForm
            label="Nombres"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            style={styles.textInput}
          />
          {touched.firstName && errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          <TextInputForm
            label="Apellidos"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            style={styles.textInput}
          />
          {touched.lastName && errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(
                touched.firstName &&
                !errors.firstName &&
                touched.lastName &&
                !errors.lastName
              ) || isLoading
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
  textInput: {
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
