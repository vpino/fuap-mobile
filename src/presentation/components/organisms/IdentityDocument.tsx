import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {TextInputForm} from '../atoms/TextInputForm';
import {useOnboarding} from '../../hooks/onboarding/useOnboarding';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';
import {LogBox} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalStyles} from '../../../theme/GlobalStyles';

interface IdentityDocumentProps {
  send: (event: any) => void;
}

const typeDocuments = [
  {key: 'DNI', value: 'DNI'},
  {key: 'PASSPORT', value: 'PASSPORT'},
];

export const IdentityDocument: React.FC<IdentityDocumentProps> = ({send}) => {
  const {id} = useAuthStore();
  const {individualCustomer} = useOnboardingStore();
  const {identityDocument} = useOnboarding({id: id ?? ''});

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [individualCustomer]);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<any>('+54');

  const handleIdentityDocument = async (values: {
    country: string;
    typeDocument: string;
    dni: string;
  }) => {
    setIsLoading(true);

    try {
      await identityDocument({
        country: values.country,
        typeDocument: values.typeDocument,
        dni: values.dni,
      });
      setSnackbarMessage('Documento de identidad actualizado exitosamente.');
      send({type: 'NEXT', data: {identityDocument: values}});
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
    country: Yup.string().required('El país es obligatorio'),
    typeDocument: Yup.string().required('El tipo de documento es obligatorio'),
    dni: Yup.string().required('El número de documento es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        country: individualCustomer.country || '',
        typeDocument: individualCustomer.typeDocument || '',
        dni: individualCustomer.dni || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleIdentityDocument}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View>
          <TitlePrimary label="Cual tipo de documento es mas fácil para usted?" />
          <SubTitle label="Por favor comparta el tipo de documento que tu puedes verificar con numero" />

          <View style={globalStyles.containerCountrySelect}>
            <Text style={globalStyles.selectCountryText}> Localización:</Text>
            <CountryCodeDropdownPicker
              selected={selected}
              setSelected={setSelected}
              setCountryDetails={(value: any) => {
                setFieldValue('country', value.code);
              }}
              countryCodeTextStyles={{fontSize: 13}}
              dropdownStyles={{
                ...globalStyles.dropdownStyle,
                ...styles.dropdownStyle,
              }}
              searchStyles={{
                ...globalStyles.searchStyle,
                ...globalStyles.searchStyle,
              }}
            />
          </View>

          {touched.country && errors.country && (
            <Text style={globalStyles.errorText}>{errors.country}</Text>
          )}

          <SelectList
            setSelected={(value: string) => {
              console.log('value', value);
              setFieldValue('typeDocument', value);
            }}
            data={typeDocuments}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Tipo de documento"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
            defaultOption={{
              key: individualCustomer.typeDocument,
              value: individualCustomer.typeDocument,
            }}
          />

          <TextInputForm
            label="Número de Documento"
            value={values.dni}
            onChangeText={handleChange('dni')}
            onBlur={handleBlur('dni')}
            style={styles.textInput}
          />
          {touched.dni && errors.dni && (
            <Text style={globalStyles.errorText}>
              {errors.dni} - {errors.country} - {errors.typeDocument}
            </Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(
                !errors.country &&
                !errors.typeDocument &&
                touched.dni &&
                !errors.dni
              ) || isLoading
            }
            isLoading={isLoading}
          />

          {Object.keys(errors).length > 0 && (
            <View style={{marginTop: 20}}>
              {Object.keys(errors).map(key => (
                <Text key={key} style={globalStyles.errorText}>
                  {errors[key as keyof typeof errors]}
                </Text>
              ))}
            </View>
          )}

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
  dropdownStyle: {
    maxWidth: '70%',
  },
  searchStyle: {
    maxWidth: '70%',
  },
});
