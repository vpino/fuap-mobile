import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {useOnboarding} from '../../hooks/onboarding/useOnboarding';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TextInputForm} from '../atoms/TextInputForm';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

interface CompanyInformationProps {
  send: (event: any) => void;
}

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
const yearOptions = [
  {key: '1 Años', value: '1 Años'},
  {key: '2 Años', value: '2 Años'},
];

const monthOptions = [
  {key: '1 meses', value: '1 meses'},
  {key: '2 meses', value: '2 meses'},
];

export const CompanyInformation: React.FC<CompanyInformationProps> = ({
  send,
}) => {
  const {id} = useAuthStore();
  const {companyData} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<any>('+54');
  const [phone, setPhone] = useState<any>('');

  const handleCompanyInformation = async (values: {
    companyName: string;
    dialCode: string;
    companyPhone: string;
    street: string;
    aptNumber: string;
    companyState: string;
    companyCity: string;
    companyTown: string;
    companyYear: string;
    companyMonth: string;
  }) => {
    setIsLoading(true);

    try {
      const fullAddress = `${values.street}, Apt. ${values.aptNumber}`;
      const fullPhone = `${values.dialCode}${values.companyPhone}`;

      await companyData({
        companyName: values.companyName,
        companyPhone: fullPhone,
        companyAddress: fullAddress,
        companyState: values.companyState,
        companyCity: values.companyCity,
        companyTown: values.companyTown,
        companyYear: values.companyYear,
        companyMonth: values.companyMonth,
      });
      setSnackbarMessage('Información de vivienda actualizada exitosamente.');
      send({
        type: 'NEXT',
        data: {
          housingInformation: values,
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
    companyName: Yup.string().required('El nombre de la empresa es requerido'),
    dialCode: Yup.string().required('El dialcode es requerido'),
    companyPhone: Yup.string().required('El estado es obligatorio'),
    street: Yup.string().required('La calle es obligatoria'),
    aptNumber: Yup.string().required('El número de apt es obligatorio'),
    companyState: Yup.string().required('El estado es obligatorio'),
    companyCity: Yup.string().required('La ciudad es obligatoria'),
    companyTown: Yup.string().required('El municipio es obligatorio'),
    companyYear: Yup.string().required('El anio es requerido'),
    companyMonth: Yup.string().required('El mes es requerido'),
  });

  return (
    <Formik
      initialValues={{
        companyName: '',
        dialCode: '+54',
        companyPhone: '',
        street: '',
        aptNumber: '',
        companyState: '',
        companyCity: '',
        companyTown: '',
        companyYear: '',
        companyMonth: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleCompanyInformation}>
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
          <TitlePrimary label="Confirme informacion sobre la empresa" />
          <SubTitle
            label="Confirme el nombre y el numero de telefono de la empresa."
            styles={{marginTop: 20}}
          />

          <TextInputForm
            label="Nombre de Empresa"
            value={values.companyName}
            onChangeText={handleChange('companyName')}
            onBlur={handleBlur('companyName')}
            style={{marginTop: 20}}
          />
          {touched.companyName && errors.companyName && (
            <Text style={globalStyles.errorText}>{errors.companyName}</Text>
          )}

          <CountryCodeDropdownPicker
            selected={selected}
            setSelected={setSelected}
            phone={phone}
            setPhone={(value: any) => {
              setFieldValue('companyPhone', value);
              setPhone(value);
            }}
            setCountryDetails={(value: any) => {
              setFieldValue('dialCode', value);
            }}
            phoneStyles={styles.inputPhone}
            countryCodeTextStyles={{
              fontSize: 13,
            }}
            dropdownStyles={{
              ...globalStyles.dropdownStyle,
              ...styles.dropdownStyle,
            }}
            searchStyles={{
              ...globalStyles.searchStyle,
              ...globalStyles.searchStyle,
            }}
          />

          <SubTitle
            label="Confirme la direccion de la empresa"
            styles={{marginTop: 20}}
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
            setSelected={(value: string) =>
              setFieldValue('companyState', value)
            }
            data={stateOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Estado"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.companyState && errors.companyState && (
            <Text style={globalStyles.errorText}>{errors.companyState}</Text>
          )}

          <SelectList
            setSelected={(value: string) => setFieldValue('companyCity', value)}
            data={cityOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Ciudad"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.companyCity && errors.companyCity && (
            <Text style={globalStyles.errorText}>{errors.companyCity}</Text>
          )}

          <SelectList
            setSelected={(value: string) => setFieldValue('companyTown', value)}
            data={townOptions}
            save="value"
            boxStyles={globalStyles.inputSelect}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Municipio"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.companyTown && errors.companyTown && (
            <Text style={globalStyles.errorText}>{errors.companyTown}</Text>
          )}

          <SubTitle
            label="¿Cuanto tiempo con esta empresa?"
            styles={{marginTop: 20}}
          />

          <View style={styles.rowContainer}>
            <SelectList
              setSelected={(value: string) =>
                setFieldValue('companyYear', value)
              }
              data={yearOptions}
              save="value"
              boxStyles={{...globalStyles.inputSelect, ...styles.halfWidth}}
              dropdownStyles={globalStyles.dropDownStyleSelect}
              placeholder="Años"
              searchPlaceholder="Buscar"
              notFoundText="No encontrado"
            />
            {touched.companyYear && errors.companyYear && (
              <Text style={globalStyles.errorText}>{errors.companyYear}</Text>
            )}

            <SelectList
              setSelected={(value: string) =>
                setFieldValue('companyMonth', value)
              }
              data={monthOptions}
              save="value"
              boxStyles={{...globalStyles.inputSelect, ...styles.mouthStyle}}
              dropdownStyles={globalStyles.dropDownStyleSelect}
              placeholder="Meses"
              searchPlaceholder="Buscar"
              notFoundText="No encontrado"
            />
            {touched.companyMonth && errors.companyMonth && (
              <Text style={globalStyles.errorText}>{errors.companyMonth}</Text>
            )}
          </View>

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={Object.keys(errors).length > 0 || isLoading}
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
    width: '60%',
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
});
