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
import {EducationDataDTO} from '../../../infrastructure/dtos/onboarding/onbording.dto';

interface EducationInformationProps {
  send: (event: any) => void;
}

const educationLevelOptions = [
  {key: 'Secundaria', value: 'Secundaria'},
  {key: 'Universitaria', value: 'Universitaria'},
  {key: 'Posgrado', value: 'Posgrado'},
];

const educationAreaOptions = [
  {key: 'Ciencias', value: 'Ciencias'},
  {key: 'Artes', value: 'Artes'},
  {key: 'Tecnología', value: 'Tecnología'},
];

const educationYearOptions = [
  {key: '2000', value: '2000'},
  {key: '2001', value: '2001'},
];

export const EducationInformation: React.FC<EducationInformationProps> = ({
  send,
}) => {
  const {id} = useAuthStore();
  const {educationData} = useOnboarding({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEducationInformation = async (values: EducationDataDTO) => {
    setIsLoading(true);

    try {
      await educationData(values);
      setSnackbarMessage('Información educativa actualizada exitosamente.');
      send({
        type: 'NEXT',
        data: {
          educationInformation: values,
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
    educationLevel: Yup.string().required(
      'El nivel de educación es obligatorio',
    ),
    educationArea: Yup.string().required('El área de educación es obligatoria'),
    educationYear: Yup.string().required('El año de educación es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        educationLevel: '',
        educationArea: '',
        educationYear: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleEducationInformation}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="¿Cuál es tu nivel más alto completado de educación?" />
          <SubTitle
            label="Confirme la escuela, el área de estudio y la fecha de graduación. La graduación esperada está bien."
            styles={{marginTop: 20}}
          />

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('educationLevel', value)
            }
            data={educationLevelOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Nivel educativo"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.educationLevel && errors.educationLevel && (
            <Text style={globalStyles.errorText}>{errors.educationLevel}</Text>
          )}

          <SubTitle
            label="¿Cuál es tu área de estudios?"
            styles={{marginTop: 20}}
          />

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('educationArea', value)
            }
            data={educationAreaOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Área de estudios"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.educationArea && errors.educationArea && (
            <Text style={globalStyles.errorText}>{errors.educationArea}</Text>
          )}

          <SubTitle
            label="¿En qué año completaste tu nivel educativo?"
            styles={{marginTop: 20}}
          />

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('educationYear', value)
            }
            data={educationYearOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect, ...styles.halfWidth}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Año"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.educationYear && errors.educationYear && (
            <Text style={globalStyles.errorText}>{errors.educationYear}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={
              !(
                !errors.educationLevel &&
                !errors.educationArea &&
                !errors.educationYear
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
  halfWidth: {
    minWidth: '55%',
  },
});
