import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import {TypeHomeDto} from '../../../infrastructure/dtos/home-loan/home-loan.dto';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';

interface TypeHomeFormProps {}

const typeHomeOptions = [
  {key: 'Casa', value: 'Casa'},
  {key: 'Apartamento', value: 'Apartamento'},
  {key: 'Townhouse', value: 'Townhouse'},
];

export const TypeHomeForm: React.FC<TypeHomeFormProps> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updateTypeHome} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTypeHomeForm = async (values: TypeHomeDto) => {
    setIsLoading(true);

    try {
      await updateTypeHome(values);
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
    typeHome: Yup.string().required('El campo es obligatorio'),
  });

  return (
    <Formik
      initialValues={{
        typeHome: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleTypeHomeForm}>
      {({handleSubmit, setFieldValue, touched, errors}) => (
        <View>
          <TitlePrimary label="Que tipo de casa es que quieres comprar?" />
          <SubTitle
            label="Es una casa, apartamento, o townhouse? Dejanos saber."
            styles={styles.subTitle}
          />

          <SelectList
            setSelected={(value: string) => setFieldValue('typeHome', value)}
            data={typeHomeOptions}
            save="value"
            boxStyles={{...globalStyles.inputSelect}}
            dropdownStyles={globalStyles.dropDownStyleSelect}
            placeholder="Tipo de casa"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
          {touched.typeHome && errors.typeHome && (
            <Text style={globalStyles.errorText}>{errors.typeHome}</Text>
          )}

          <PrimaryButton
            onPress={handleSubmit as any}
            label="Continuar"
            icon={ArrowWhite}
            iconPosition="right"
            styles={styles.button}
            disabled={!!errors.typeHome || isLoading}
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
