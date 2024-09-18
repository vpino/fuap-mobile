import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {SubTitle} from '../atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TextInputForm} from '../atoms/TextInputForm';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';

interface HomeLoanPriceFormProps {}

export const HomeLoanPriceForm: React.FC<HomeLoanPriceFormProps> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updatePriceHome} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleHomeLoanPriceForm = async (values: {priceHome: number}) => {
    setIsLoading(true);

    try {
      await updatePriceHome({
        priceHome: Number(values.priceHome),
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
    priceHome: Yup.number().required('El precio es obligatoria'),
  });

  return (
    <Formik
      initialValues={{
        priceHome: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleHomeLoanPriceForm}>
      {({handleChange, handleSubmit, handleBlur, values, touched, errors}) => (
        <View>
          <TitlePrimary label="¿Cual es el precio de la casa?" />
          <SubTitle
            label="Por favor confirme el precio de la casa o cuanto tu piensas ofrecer"
            styles={{marginTop: 10}}
          />

          <TextInputForm
            label="precio"
            value={String(values.priceHome)}
            onChangeText={handleChange('priceHome')}
            onBlur={handleBlur('priceHome')}
            style={styles.input}
          />
          {touched.priceHome && errors.priceHome && (
            <Text style={globalStyles.errorText}>{errors.priceHome}</Text>
          )}

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
    width: '45%',
  },
  input: {
    marginTop: 20,
  },
});
