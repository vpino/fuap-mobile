import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {useOnboarding} from '../../hooks/onboarding/useOnboarding';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {globalStyles} from '../../../theme/GlobalStyles';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

interface ContactInformationProps {
  send: (event: any) => void;
}

export const ContactInformation: React.FC<ContactInformationProps> = () => {
  const {id} = useAuthStore();
  const {contactData} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<any>('+54');
  const [phone, setPhone] = useState<any>('');

  const handleContactInformation = async (values: {
    dialCode: string;
    phone: string;
  }) => {
    setIsLoading(true);

    try {
      const fullPhone = `${values.dialCode}${values.phone}`;

      await contactData({
        phone: fullPhone,
      });
      setSnackbarMessage('Información de contacto actualizada exitosamente.');
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
    dialCode: Yup.string().required('El dialcode es requerido'),
    phone: Yup.string().required('El estado es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        dialCode: '+54',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleContactInformation}>
      {({handleSubmit, setFieldValue, errors}) => (
        <View>
          <TitlePrimary label="Por favor comparte su informacion de contacto" />
          <SubTitle
            label="Por favor comparta su numero de telfono y su correo electronico para mandarle su confirmacion de prestamo"
            styles={{marginTop: 20, marginBottom: 20}}
          />

          <CountryCodeDropdownPicker
            selected={selected}
            setSelected={setSelected}
            phone={phone}
            setPhone={(value: any) => {
              setFieldValue('phone', value);
              setPhone(value);
            }}
            setCountryDetails={(value: any) => {
              setFieldValue('dialCode', value.dial_code);
            }}
            phoneStyles={styles.inputPhone}
            countryCodeTextStyles={{
              fontSize: 13,
            }}
            dropdownStyles={{
              ...globalStyles.dropdownStyle,
            }}
            searchStyles={{
              ...globalStyles.searchStyle,
            }}
          />

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
    width: '40%',
  },
  inputPhone: {
    height: 55,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    backgroundColor: '#FFF',
    color: '#676F82',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
  },
});
