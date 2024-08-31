import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {useOnboarding} from '../../hooks/onboarding/useOnboarding';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalStyles} from '../../../theme/GlobalStyles';
import {HousingDataDTO} from '../../../infrastructure/dtos/onboarding/onbording.dto';

interface HousingInformationProps {
  send: (event: any) => void;
}

const housingTypeOptions = [
  {key: 'Alquiler', value: 'Alquiler'},
  {key: 'Propietario', value: 'Propietario'},
];

const yearOptions = [
  {key: '1 Años', value: '1 Años'},
  {key: '2 Años', value: '2 Años'},
];

const monthOptions = [
  {key: '1 meses', value: '1 meses'},
  {key: '2 meses', value: '2 meses'},
];

export const HousingInformation: React.FC<HousingInformationProps> = ({
  send,
}) => {
  const {id} = useAuthStore();
  const {housingData} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleHousingInformation = async (values: HousingDataDTO) => {
    setIsLoading(true);

    try {
      await housingData(values);
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
    housingType: Yup.string().required('El tipo de vivienda es obligatorio'),
    housingYear: Yup.string().required('El año de adquisición es obligatorio'),
    housingMonth: Yup.string().required('El mes de adquisición es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        housingType: '',
        housingYear: '',
        housingMonth: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleHousingInformation}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="¿Cuál es el tipo de vivienda?" />
          <SubTitle
            label="¿Estás alquilando o eres dueño de la propiedad?"
            styles={{marginTop: 20}}
          />

          <SelectList
            setSelected={(value: string) => setFieldValue('housingType', value)}
            data={housingTypeOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Tipo de vivienda"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.housingType && errors.housingType && (
            <Text style={globalStyles.errorText}>{errors.housingType}</Text>
          )}

          <SubTitle
            label="¿Cuanto tiempo has vivido aquí?"
            styles={{marginTop: 20}}
          />

          <View style={styles.rowContainer}>
            <SelectList
              setSelected={(value: string) =>
                setFieldValue('housingYear', value)
              }
              data={yearOptions}
              save="value"
              boxStyles={{...globalStyles.inputSelect, ...styles.halfWidth}}
              dropdownStyles={globalStyles.dropDownStyleSelect}
              placeholder="Año de adquisición"
              searchPlaceholder="Buscar"
              notFoundText="No encontrado"
            />
            {touched.housingYear && errors.housingYear && (
              <Text style={globalStyles.errorText}>{errors.housingYear}</Text>
            )}

            <SelectList
              setSelected={(value: string) =>
                setFieldValue('housingMonth', value)
              }
              data={monthOptions}
              save="value"
              boxStyles={{...globalStyles.inputSelect, ...styles.mouthStyle}}
              dropdownStyles={globalStyles.dropDownStyleSelect}
              placeholder="Mes"
              searchPlaceholder="Buscar"
              notFoundText="No encontrado"
            />
            {touched.housingMonth && errors.housingMonth && (
              <Text style={globalStyles.errorText}>{errors.housingMonth}</Text>
            )}
          </View>

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(
                !errors.housingType &&
                !errors.housingYear &&
                !errors.housingMonth
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
    width: '60%',
  },
  rowContainer: {
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
});
