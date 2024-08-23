import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import ProgressBar from '../../components/atoms/ProgressBar';
import HomeIcon from '../../../../assets/svg/home.svg';
import AppsIcon from '../../../../assets/svg/apps.svg';
import CreateAccountIcon from '../../../../assets/svg/create-account.svg';
import Breadcrumb from '../../components/molecules/Breadcrumb';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';

export const HomeScreen = () => {
  const breadcrumbItems = [
    {icon: HomeIcon, text: 'Home'},
    {icon: AppsIcon, text: 'Aplicaciones'},
    {icon: CreateAccountIcon, text: 'Crear Cuenta'},
  ];

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <ProgressBar progress={10} />
        <Breadcrumb items={breadcrumbItems} />
        <TitlePrimary label="Vamos a empezar!" />
        <SubTitle label="Comencemos con su información personal para generar tu cuenta. Esto debería tomar unos minutos. Te preguntaremos datos generales, información laboral para hacerte el proceso de consultar prestamos mas fácil." />
        <PrimaryButton
          onPress={() => navigation.navigate('HomeScreen')}
          label="Buscar tu prestamo"
          icon={ArrowWhite}
          iconPosition="right"
          styles={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '60%',
  },
});
