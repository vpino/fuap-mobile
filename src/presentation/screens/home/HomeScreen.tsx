import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import TwoTextRow from '../../components/molecules/TwoTextRow';
import ArrowBlue from '../../../../assets/svg/arrow-blue.svg';
import {Divider} from 'react-native-paper';
import CenteredTextButton from '../../components/molecules/CenteredTextButton';
import ArrowBlack from '../../../../assets/svg/arrow-black.svg';
import {StatusOnboarding} from '../../../core/enums/status-onboarding.enum';
import CardInfoPersonal from '../../components/organisms/CardInfoPersonal';

export const HomeScreen = () => {
  const {individualCustomer} = useOnboardingStore();

  const fullName = `${individualCustomer.firstName ?? 'Customer'} ${
    individualCustomer.lastName ?? ''
  }`;

  useEffect(() => {}, []);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary
          label={`Bienvenido, ${fullName}`}
          styles={styles.textPrimary}
        />
        <SubTitle label="Puedes aplicar para cualquier producto ofrecido abajo o realizar cualquier informacion asociado a su cuenta." />

        <TwoTextRow
          firstText="Mis préstamos activos"
          secondText="Ver todos"
          iconSVG={ArrowBlue}
          containerStyle={styles.containerTextLoadActive}
        />

        <CenteredTextButton
          text="¡Todavía no tienes un préstamo activo!"
          buttonText="Aplicar ahora"
          iconSVG={ArrowBlack}
          iconPosition="right"
          containerStyle={styles.containerCenteredText}
          routeRedirection="LobbyLoadScreen"
        />

        <Divider style={styles.divider} />

        <TwoTextRow
          firstText="Información Personal"
          secondText="Cambiar Datos"
          iconSVG={ArrowBlue}
          containerStyle={styles.containerTextInfoPersonal}
        />

        {individualCustomer.status === StatusOnboarding.COMPLETED && (
          <CardInfoPersonal individual={individualCustomer} />
        )}

        {individualCustomer.status !== StatusOnboarding.COMPLETED && (
          <CenteredTextButton
            text="¡Todavía no he terminado tu onboarding!"
            buttonText="Confirmar información"
            iconSVG={ArrowBlack}
            iconPosition="right"
            containerStyle={styles.containerCenteredText}
            routeRedirection="LobbyOnboardingScreen"
          />
        )}
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
  containerTextLoadActive: {
    marginTop: 25,
  },
  containerCenteredText: {
    marginTop: 20,
  },
  containerTextInfoPersonal: {
    marginTop: 5,
  },
});
