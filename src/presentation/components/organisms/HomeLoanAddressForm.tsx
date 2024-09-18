import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TextInputForm} from '../atoms/TextInputForm';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import ArrowRigthBlue from '../../../../assets/svg/arrow-rigth-blue.svg';

interface HomeLoanAddressFormProps {}

const stateOptions = [
  {key: '1', value: 'State 1'},
  {key: '2', value: 'State 2'},
];

const cityOptions = [
  {key: '1', value: 'City 1'},
  {key: '2', value: 'City 2'},
];

const townOptions = [
  {key: '1', value: 'Town 1'},
  {key: '2', value: 'Town 2'},
];

export const HomeLoanAddressForm: React.FC<HomeLoanAddressFormProps> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updateHomeLoanAddress} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleHomeLoanAddressForm = async (values: {
    street: string;
    aptNumber: string;
    state: string;
    city: string;
    town: string;
  }) => {
    setIsLoading(true);

    try {
      const fullAddress = `${values.street}, Apt. ${values.aptNumber}`;

      await updateHomeLoanAddress({
        address: fullAddress,
        state: values.state,
        city: values.city,
        town: values.town,
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
    street: Yup.string().required('La calle es obligatoria'),
    aptNumber: Yup.string().required('El número de apt es obligatorio'),
    state: Yup.string().required('El estado es obligatorio'),
    city: Yup.string().required('La ciudad es obligatoria'),
    town: Yup.string().required('El municipio es obligatorio'),
  });

  const handleNotAvailable = async () => {
    await handleHomeLoanAddressForm({
      street: '',
      aptNumber: '',
      state: '',
      city: '',
      town: '',
    });
  };

  return (
    <Formik
      initialValues={{
        street: '',
        aptNumber: '',
        state: '',
        city: '',
        town: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleHomeLoanAddressForm}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        setFieldValue,
        values,
        touched,
        errors,
      }) => (
        <View>
          <TitlePrimary label="Por favor confirme la direcion que quieres comprar?" />
          <SubTitle
            label="Confirme el numero de telefono y la dirrecion sobre la casa."
            styles={{marginTop: 10}}
          />

          <View style={styles.rowContainer}>
            <TextInputForm
              label="Calle y Numero"
              value={values.street}
              onChangeText={handleChange('street')}
              onBlur={handleBlur('street')}
              style={{width: '70%'}}
            />
            {touched.street && errors.street && (
              <Text style={globalStyles.errorText}>{errors.street}</Text>
            )}

            <TextInputForm
              label="Apt N."
              value={values.aptNumber}
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
          />
          {touched.town && errors.town && (
            <Text style={globalStyles.errorText}>{errors.town}</Text>
          )}

          <View style={styles.buttons}>
            <PrimaryButton
              onPress={handleSubmit as any}
              label="Continuar"
              icon={ArrowWhite}
              iconPosition="right"
              styles={styles.button}
              disabled={Object.keys(errors).length > 0 || isLoading}
              isLoading={isLoading}
            />

            <PrimaryButton
              onPress={handleNotAvailable}
              label="No disponible"
              icon={ArrowRigthBlue}
              iconPosition="right"
              styles={{...styles.button, ...styles.buttonNotAvailable}}
              textStyles={styles.textNotAvailable}
              isLoading={isLoading}
            />
          </View>

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
    width: '45%',
  },
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  rowContainerSelect: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    minWidth: '55%',
  },
  mouthStyle: {
    minWidth: '40%',
  },
  dropdownStyle: {
    maxWidth: '100%',
  },
  searchStyle: {
    maxWidth: '100%',
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

  buttonNotAvailable: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#457EFF',
    textAlign: 'center',
    width: '50%',
  },

  textNotAvailable: {
    color: '#457EFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
