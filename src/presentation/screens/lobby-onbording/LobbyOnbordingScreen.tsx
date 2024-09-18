import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import ProgressBar from '../../components/atoms/ProgressBar';
import Breadcrumb from '../../components/molecules/Breadcrumb';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const LobbyOnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <ProgressBar progress={10} />
        <Breadcrumb />
        <TitlePrimary label="Vamos a empezar!" />
        <SubTitle label="Comencemos con su información personal para generar tu cuenta. Esto debería tomar unos minutos. Te preguntaremos datos generales, información laboral para hacerte el proceso de consultar prestamos mas fácil." />
        <PrimaryButton
          onPress={() => navigation.navigate('OnboardingScreen')}
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
