import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import TwoTextRow from '../../components/molecules/TwoTextRow';
import {Divider} from 'react-native-paper';
import CenteredTextButton from '../../components/molecules/CenteredTextButton';
import ArrowBlack from '../../../../assets/svg/arrow-black.svg';
import {StatusOnboarding} from '../../../core/enums/status-onboarding.enum';
import CardInfoPersonal from '../../components/organisms/CardInfoPersonal';
import Cardloan from '../../components/organisms/CardLoan';
import {ILoanPreview} from '../../../infrastructure/interfaces/home/loan-preview';
import ArrowSimpleBlack from '../../../../assets/svg/arrow-simple-black.svg';
import {usePersonalLoan} from '../../hooks/personal-loan/usePersonalLoan';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {useNavigation} from '@react-navigation/native';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';

const formatLoanPersonal = (loan: any, type?: string): ILoanPreview => {
  const idLastFourDigits = loan.id.slice(-4);
  return {
    title: type === 'home' ? 'Préstamo de Casa ' : 'Préstamo Personal',
    idLoan: `${idLastFourDigits} | Banco Mercantil`,
    datePayment: loan.createdAt,
    status: loan.status,
    route: 'DetailLoanScreen',
    type,
  };
};

export const HomeScreen = () => {
  const {id} = useAuthStore();
  const {individualCustomer} = useOnboardingStore();
  const {getLastCreatedByCustomer} = usePersonalLoan({id: id ?? ''});
  const {getLastHomeCreatedByCustomer} = useHomeLoan({id: id ?? ''});
  const [loans, setLoans] = useState<ILoanPreview[]>([]);
  const navigation = useNavigation<any>();
  const [homeLoan, setHomeLoan] = useState<ILoanPreview>();

  const fullName = `${individualCustomer.firstName ?? 'Customer'} ${
    individualCustomer.lastName ?? ''
  }`;

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const personalLoan = await getLastCreatedByCustomer();

        if (personalLoan.data) {
          const loanP = formatLoanPersonal(personalLoan.data, 'personal');
          setLoans([loanP]);
        }

        const lastHomeLoan = await getLastHomeCreatedByCustomer();

        if (lastHomeLoan.data) {
          const homeLoanFormatted = formatLoanPersonal(
            lastHomeLoan.data,
            'home',
          );
          setHomeLoan(homeLoanFormatted);
        }
      } catch (error) {
        console.error('Error fetching personal loan: ', error);
      }
    };

    fetchLoan();

    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'flex'}, tabBarVisible: true});
  }, [navigation]);

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
          iconSVG={ArrowSimpleBlack}
          containerStyle={styles.containerTextLoadActive}
          secondTextStyle={styles.secondText}
          secondTextRoute="SubmissionsScreen"
        />

        {loans.length > 0 && (
          <>
            {loans.map((loan, key) => (
              <Cardloan key={key} loan={loan} />
            ))}
          </>
        )}

        {homeLoan && (
          <>
            <Cardloan loan={homeLoan} />
          </>
        )}

        {loans.length <= 0 && !homeLoan && (
          <>
            <CenteredTextButton
              text="¡Todavía no tienes un préstamo activo!"
              buttonText="Aplicar ahora"
              iconSVG={ArrowBlack}
              iconPosition="right"
              containerStyle={styles.containerCenteredText}
              routeRedirection="Loans"
            />
          </>
        )}

        <Divider style={styles.divider} />

        <TwoTextRow
          firstText="Información Personal"
          secondText="Cambiar Datos"
          iconSVG={ArrowSimpleBlack}
          containerStyle={styles.containerTextInfoPersonal}
          secondTextStyle={styles.secondText}
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
  secondText: {
    color: '#000',
  },
  containerTextLoadActive: {
    marginTop: 25,
  },
  containerCenteredText: {
    marginTop: 0,
  },
  containerTextInfoPersonal: {
    marginTop: 5,
  },
});
