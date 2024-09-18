import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import {PropertyUsageDto} from '../../../infrastructure/dtos/home-loan/home-loan.dto';

interface PropertyUsageFormProps {}

const monthlyIncomeOptions = [
  {key: 'Casa primaria', value: 'Casa primaria'},
  {key: 'Alquiler', value: 'Alquiler'},
  {key: 'Business', value: 'Business'},
];

export const PropertyUsageForm: React.FC<PropertyUsageFormProps> = () => {
  const {id} = useAuthStore();
  const {updatePropertyUsage} = useHomeLoan({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePropertyUsageForm = async (values: PropertyUsageDto) => {
    setIsLoading(true);

    try {
      await updatePropertyUsage(values);
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
    propertyUsage: Yup.string().required('El campo es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        propertyUsage: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handlePropertyUsageForm}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="Como vas a usar la propiedad que quieres comprar? " />
          <SubTitle
            label="Estas alquilando o vas hacer un dueno que vive en esta propiedad?"
            styles={styles.subTitle}
          />

          <SelectList
            setSelected={(value: string) =>
              setFieldValue('propertyUsage', value)
            }
            data={monthlyIncomeOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Propiedad"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.propertyUsage && errors.propertyUsage && (
            <Text style={globalStyles.errorText}>{errors.propertyUsage}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={!!errors.propertyUsage || isLoading}
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

  subTitle: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: globalFontFamily.manropeLight,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 30,
  },
});
