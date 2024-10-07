import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {Divider, Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {SelectList} from 'react-native-dropdown-select-list';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {TextInputForm} from '../../components/atoms/TextInputForm';
import {TextAreaForm} from '../../components/atoms/TextAreaForm';
import {useNavigationContext} from '../../navigation/NavigationContext';

const reasonOptions = [
  {key: 'Reason 1', value: 'Reason 1'},
  {key: 'Reason 2', value: 'Reason 2'},
];

export const SupportScreen = () => {
  const {setCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<any>();

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSupport = async (values: any) => {
    setIsLoading(true);

    try {
      setSnackbarMessage('Información de vivienda actualizada exitosamente.');

      console.log('values', values);
      setCurrentRoute('ConfirmTicketScreen', {email: values.email});
      navigation.navigate('ConfirmTicketScreen', {email: values.email});
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
    email: Yup.string()
      .email('Ingrese un correo electrónico válido')
      .required('El correo electrónico es obligatorio'),
    reason: Yup.string().required('La razon es obligatoria'),
    message: Yup.string().required('El mensaje es obligatorio'),
  });

  useEffect(() => {}, [navigation]);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary
          label={'Contactar a soporte'}
          styles={styles.textPrimary}
        />
        <SubTitle label="Aquí puedes crear un ticket para contactar a soporte directamente. Ayuda describir el tipo de caso, la razón por el ticket, y confirme tu datos personal abajo." />

        <Divider style={styles.divider} />

        <Formik
          initialValues={{
            email: '',
            reason: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSupport}>
          {({
            handleSubmit,
            setFieldValue,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <View>
              <Text style={styles.subTitle}> Email </Text>

              <TextInputForm
                label="JohnDoe@gmail.com"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                style={styles.textInput}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.subTitle}> Razon </Text>

              <SelectList
                setSelected={(value: string) => setFieldValue('reason', value)}
                data={reasonOptions}
                save="value"
                boxStyles={{...globalStyles.inputSelect}}
                dropdownStyles={globalStyles.dropDownStyleSelect}
                placeholder="Selecciona la razón "
                searchPlaceholder="Buscar"
                notFoundText="No encontrado"
              />
              {touched.reason && errors.reason && (
                <Text style={globalStyles.errorText}>{errors.reason}</Text>
              )}

              <Text style={[styles.subTitle, {marginTop: 10}]}>Mensaje:</Text>

              <TextAreaForm
                label="Explicacion del caso..."
                value={values.message}
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                style={styles.textInput}
              />
              {touched.message && errors.message && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}

              <PrimaryButton
                onPress={handleSubmit as any}
                label="Continuar"
                icon={ArrowWhite}
                iconPosition="right"
                styles={styles.button}
                disabled={
                  !(!errors.email && !errors.reason && !errors.message) ||
                  isLoading
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 24,
    borderRadius: 12,
  },
  textPrimary: {
    marginTop: 0,
  },
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
  subTitle: {
    color: 'rgba(0, 0, 0, 0.80)',
    fontFamily: globalFontFamily.manropeRegular,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  textInput: {
    marginVertical: 10,
  },
});
