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
import {OccupationDTO} from '../../../infrastructure/dtos/onboarding/onbording.dto';

interface OccupationInformationProps {
  send: (event: any) => void;
}

const occupationOptions = [
  {key: 'Empleado', value: 'Empleado'},
  {key: 'Independiente', value: 'Independiente'},
  {key: 'Empresario', value: 'Empresario'},
];

const businessTypeOptions = [
  {key: 'Tecnología', value: 'Tecnología'},
  {key: 'Educación', value: 'Educación'},
  {key: 'Salud', value: 'Salud'},
];

export const OccupationInformation: React.FC<OccupationInformationProps> = ({
  send,
}) => {
  const {id} = useAuthStore();
  const {occupationData} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOccupationInformation = async (values: OccupationDTO) => {
    setIsLoading(true);

    try {
      await occupationData(values);
      setSnackbarMessage('Información de ocupación actualizada exitosamente.');
      send({
        type: 'NEXT',
        data: {
          occupationInformation: values,
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
    occupation: Yup.string().required('La ocupación es obligatoria'),
    typeBusiness: Yup.string().required('El tipo de negocio es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        occupation: '',
        typeBusiness: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleOccupationInformation}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="Confirme su ocupación y tipo de empresa?" />
          <SubTitle
            label="Por favor selecione su ocupacion, y confirme informacion sobre la empresa."
            styles={{marginTop: 20}}
          />

          <SelectList
            setSelected={(value: string) => setFieldValue('occupation', value)}
            data={occupationOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Seleccione una ocupación"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.occupation && errors.occupation && (
            <Text style={globalStyles.errorText}>{errors.occupation}</Text>
          )}

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('typeBusiness', value)
            }
            data={businessTypeOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Tipo de Empresa"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.typeBusiness && errors.typeBusiness && (
            <Text style={globalStyles.errorText}>{errors.typeBusiness}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(!errors.occupation && !errors.typeBusiness) || isLoading
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
});
