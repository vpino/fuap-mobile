import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Snackbar, Divider, Text} from 'react-native-paper';
import {useAuth} from '../../hooks/auth/useAuth';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {type RootStackParams} from '../../navigation/StackNavigator';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {TextInputWithIcon} from '../../components/atoms/TextInputWithIcon';
import {PasswordInput} from '../../components/atoms/PasswordInput';
import AccountIcon from '../../../../assets/account.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ListSocialCard from '../../components/organisms/ListSocialCard';
import GoogleLogo from '../../../../assets/google.svg';
import FacebookLogo from '../../../../assets/fb.svg';
import AppleLogo from '../../../../assets/apple.svg';
import SignupText from '../../components/molecules/SignupText';

export const LoginScreen = () => {
  const socialCards = [
    {label: 'Google', imagenSVG: GoogleLogo},
    {label: 'Facebook', imagenSVG: FacebookLogo},
    {label: 'Apple', imagenSVG: AppleLogo},
  ];

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {login, isLoading} = useAuth();
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleLogin = async (values: {email: string; password: string}) => {
    try {
      await login(values);

      setSnackbarMessage('Login Successful');

      navigation.navigate('HomeScreen');
    } catch (error: any) {
      setSnackbarMessage(
        error?.message ||
          'Contrasena y/o correo invalidos, por favor intente de nuevo',
      );
    } finally {
      setSnackbarVisible(true);
    }
  };

  const onDismissSnackBar = () => setSnackbarVisible(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Ingrese un correo electrónico válido')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
        'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, un número y un carácter especial',
      )
      .required('La contraseña es obligatoria'),
  });

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary label="Ingrese a su cuenta" />
        <SubTitle label="Vamos a validar tu credenciales para conectarte a tus prestamos digitales" />
        <Divider style={styles.divider} />

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInputWithIcon
                label="Correo electrónico"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                icon={AccountIcon}
                iconPosition="left"
                style={[globalStyles.input]}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <PasswordInput
                label="Contraseña"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={[globalStyles.input]}
                error={
                  touched.password && errors.password
                    ? errors.password
                    : undefined
                }
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <PrimaryButton
                onPress={handleSubmit as any}
                isLoading={isLoading}
                label="Iniciar"
                icon={require('../../../../assets/icon18.png')}
                iconPosition="right"
                disabled={isLoading || !!(errors.email || errors.password)}
              />
            </>
          )}
        </Formik>

        <Divider style={styles.divider} />

        <ListSocialCard items={socialCards} />

        <SignupText
          primaryText="Crear tu cuenta."
          linkText="Signup"
          navigationRoute="RegisterScreen"
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
    </ScrollView>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  divider: {
    marginVertical: 24,
    borderRadius: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
