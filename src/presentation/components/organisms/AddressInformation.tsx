import React, {useState} from 'react';
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
import {SelectList} from 'react-native-dropdown-select-list';
import {globalStyles} from '../../../theme/GlobalStyles';

interface AddressInformationProps {
  send: (event: any) => void;
}

const stateOptions = [
  {key: 'State 1', value: 'State 1'},
  {key: 'State 2', value: 'State 2'},
];

const cityOptions = [
  {key: 'City 1', value: 'City 1'},
  {key: 'City 2', value: 'City 2'},
];

const townOptions = [
  {key: 'Town 1', value: 'Town 1'},
  {key: 'Town 2', value: 'Town 2'},
];

export const AddressInformation: React.FC<AddressInformationProps> = ({
  send,
}) => {
  const {id} = useAuthStore();
  const {individualCustomer} = useOnboardingStore();
  const {address} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [streetPart, aptPart] = individualCustomer?.address?.split(',') ?? '';

  const handleAddressInformation = async (values: {
    street: string;
    aptNumber: string;
    state: string;
    city: string;
    town: string;
  }) => {
    setIsLoading(true);

    const fullAddress = `${values.street}, Apt. ${values.aptNumber}`;

    try {
      await address({
        address: fullAddress,
        state: values.state,
        city: values.city,
        town: values.town,
      });
      setSnackbarMessage('Dirección actualizada exitosamente.');
      send({
        type: 'NEXT',
        data: {
          addressInformation: {
            address: fullAddress,
            state: values.state,
            city: values.city,
            town: values.town,
          },
        },
      });
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
    street: Yup.string().required('La calle es obligatoria'),
    aptNumber: Yup.string().required('El número de apt es obligatorio'),
    state: Yup.string().required('El estado es obligatorio'),
    city: Yup.string().required('La ciudad es obligatoria'),
    town: Yup.string().required('El municipio es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        street: streetPart || '',
        aptNumber: aptPart || '',
        state: individualCustomer.state || '',
        city: individualCustomer.city || '',
        town: individualCustomer.town || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleAddressInformation}>
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
          <TitlePrimary label="Por favor confirma tu dirección principal" />
          <SubTitle label="Por favor comparta calle y numero, número de apt, Estado, Ciudad y Municipio" />

          <View style={styles.rowContainer}>
            <TextInputForm
              label="Calle y Numero"
              value={values.street || streetPart}
              onChangeText={handleChange('street')}
              onBlur={handleBlur('street')}
              style={{width: '70%'}}
            />
            {touched.street && errors.street && (
              <Text style={globalStyles.errorText}>{errors.street}</Text>
            )}

            <TextInputForm
              label="Apt N."
              value={values.aptNumber || aptPart}
              onChangeText={handleChange('aptNumber')}
              onBlur={handleBlur('aptNumber')}
              style={{width: '27.5%'}}
            />
            {touched.aptNumber && errors.aptNumber && (
              <Text style={globalStyles.errorText}>{errors.aptNumber}</Text>
            )}
          </View>

          <SelectList
            setSelected={(value: string) => setFieldValue('state', value)}
            data={stateOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Estado"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
            defaultOption={{
              key: individualCustomer.state,
              value: individualCustomer.state,
            }}
          />
          {touched.state && errors.state && (
            <Text style={globalStyles.errorText}>{errors.state}</Text>
          )}

          <SelectList
            setSelected={(value: string) => setFieldValue('city', value)}
            data={cityOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Ciudad"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
            defaultOption={{
              key: individualCustomer.city,
              value: individualCustomer.city,
            }}
          />
          {touched.city && errors.city && (
            <Text style={globalStyles.errorText}>{errors.city}</Text>
          )}

          <SelectList
            setSelected={(value: string) => setFieldValue('town', value)}
            data={townOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Municipio"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
            defaultOption={{
              key: individualCustomer.town,
              value: individualCustomer.town,
            }}
          />
          {touched.town && errors.town && (
            <Text style={globalStyles.errorText}>{errors.town}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(
                touched.street &&
                !errors.street &&
                touched.aptNumber &&
                !errors.aptNumber &&
                !errors.state &&
                !errors.city &&
                !errors.town
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

  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
});
