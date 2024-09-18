import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Snackbar, Divider, Text} from 'react-native-paper';
import {useAuth} from '../../hooks/auth/useAuth';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
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
import {ScrollView} from 'react-native-gesture-handler';

export const RegisterScreen = () => {
  const socialCards = [
    {label: 'Google', imagenSVG: GoogleLogo},
    {label: 'Facebook', imagenSVG: FacebookLogo},
    {label: 'Apple', imagenSVG: AppleLogo},
  ];

  const navigation = useNavigation<NavigationProp<any>>();
  const {signUp, isLoading} = useAuth();
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleSignUp = async (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      if (values.password !== values.confirmPassword) {
        setSnackbarMessage('Las contraseñas no coinciden');
        setSnackbarVisible(true);
        return;
      }

      await signUp(values);

      setSnackbarMessage('Registro Exitoso');
      navigation.navigate('BottomNavigator', {
        screen: 'LoginScreen',
      });
    } catch (error: any) {
      console.log('error.message', error?.message);
      setSnackbarMessage(error?.message || 'Sign Up Failed. Please try again.');
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir')
      .required('Confirmar la contraseña es obligatorio'),
  });

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary label="Crea tu cuenta" />
        <SubTitle label="Vamos a crear tu cuenta para conectarte a tus prestamos digitales" />
        <Divider style={styles.divider} />

        <Formik
          initialValues={{email: '', password: '', confirmPassword: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}>
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

              <PasswordInput
                label="Confirmar Contraseña"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                style={[globalStyles.input]}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <PrimaryButton
                onPress={handleSubmit as any}
                isLoading={isLoading}
                label="Registrar"
                icon={require('../../../../assets/icon18.png')}
                iconPosition="right"
                disabled={
                  isLoading ||
                  !!(errors.email || errors.password || errors.confirmPassword)
                }
              />
            </>
          )}
        </Formik>

        <Divider style={styles.divider} />
        <ListSocialCard items={socialCards} />

        <SignupText
          primaryText="¿Ya tienes una cuenta? "
          linkText="Iniciar sesión"
          navigationRoute="LoginScreen"
        />

        <Snackbar
          wrapperStyle={styles.snackBar}
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

export default RegisterScreen;

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
  snackBar: {
    top: 0,
  },
});
