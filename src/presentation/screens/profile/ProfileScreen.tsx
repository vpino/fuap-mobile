import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {Divider} from 'react-native-paper';
import ProfileEditDetail from '../../components/organisms/ProfileEditDetail';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import {useNavigationContext} from '../../navigation/NavigationContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {individualCustomer} = useOnboardingStore();
  const {setCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<NavigationProp<any>>();

  const address = `${individualCustomer?.address ?? ''} `;
  const addressExtension = `${individualCustomer?.addressExtension ?? ''}`;
  const state = `${individualCustomer?.state ?? ''}`;
  const town = `${individualCustomer?.town ?? ''}`;
  const mainAddress = `${address} ${addressExtension} ${state} ${town}`;

  const occupation = `${individualCustomer?.occupation} | ${individualCustomer?.typeBusiness}`;
  const companyInfo = `${individualCustomer?.companyName} | ${individualCustomer?.companyPhone}`;
  const companyAddress = `${individualCustomer?.companyAddress} ${individualCustomer?.companyState} ${individualCustomer?.city} ${individualCustomer?.town}`;
  const companyTime = `${individualCustomer?.companyYear} ${individualCustomer?.companyMonth}`;

  const handlePayment = async (routeGo: string, status: string) => {
    setCurrentRoute(routeGo || 'Login', {statusOnboarding: status});
    navigation.navigate(routeGo || 'Login', {statusOnboarding: status});
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <TitlePrimary label="Editar Perfil" styles={styles.textPrimary} />

        <SubTitle label="Aquí puedes editar los detalles de tu perfil y tu configuración de la plataforma" />

        <Divider style={styles.divider} />

        <ProfileEditDetail
          title="Detalles Personal"
          subTtitle={`${individualCustomer?.firstName ?? ''} ${
            individualCustomer?.lastName ?? ''
          }`}
          description={`${individualCustomer?.email ?? ''} | ${
            individualCustomer?.phone ?? ''
          }`}
          onSvgPress={() => handlePayment('OnboardingScreen', 'LOAD_NAMES')}
        />

        <ProfileEditDetail
          title="Detalles Documental"
          subTtitle={`${individualCustomer?.typeDocument ?? ''}`}
          description={`# ${individualCustomer?.dni ?? ''}`}
          onSvgPress={() =>
            handlePayment('OnboardingScreen', 'IDENTITY_DOCUMENT')
          }
        />

        <ProfileEditDetail
          title="Direccion Principal"
          subTtitle={mainAddress}
          description={`${individualCustomer?.housingType ?? ''} | ${
            individualCustomer?.housingYear ?? ''
          } ${individualCustomer?.housingMonth ?? ''}`}
          onSvgPress={() => handlePayment('OnboardingScreen', 'ADDRESS')}
        />

        <ProfileEditDetail
          title="Detalles De Educación"
          subTtitle={`${individualCustomer?.educationLevel ?? ''}`}
          description={`${individualCustomer?.educationArea ?? ''} | ${
            individualCustomer?.educationYear ?? ''
          }`}
          onSvgPress={() => handlePayment('OnboardingScreen', 'EDUCATION')}
        />

        <ProfileEditDetail
          title="Detalles De Ocupación y Empleo"
          subTtitle={occupation}
          description={`${companyInfo}\n${companyAddress}\n${companyTime}`}
          onSvgPress={() => handlePayment('OnboardingScreen', 'OCCUPATION')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  divider: {
    marginVertical: 24,
    borderRadius: 12,
  },
  textPrimary: {
    marginTop: 0,
  },
});
