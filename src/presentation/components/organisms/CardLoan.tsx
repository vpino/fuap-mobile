import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {Divider} from 'react-native-paper';
import {ILoanPreview} from '../../../infrastructure/interfaces/home/loan-preview';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../atoms/PrimaryButton';
import {formatDayMonth} from '../../../config/helpers/dates';
import {useNavigationContext} from '../../navigation/NavigationContext';

interface CardloanProps {
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  secondaryText?: TextStyle;
  subTileStyle?: TextStyle;
  subTileTextStyle?: TextStyle;
  loan: ILoanPreview;
}

const Cardloan: React.FC<CardloanProps> = ({
  containerStyle,
  titleStyle,
  secondaryText,
  subTileStyle,
  subTileTextStyle,
  loan,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {setCurrentRoute} = useNavigationContext();

  const handlePayment = async (route: string) => {
    setCurrentRoute(route, loan);

    navigation.navigate(route ?? 'HomeScreen', {loan});
  };

  const today = new Date();
  const paymentDate = new Date(loan?.datePayment || today);

  const isOverdue = paymentDate < today;
  const daysOverdue = isOverdue
    ? Math.ceil(
        (today.getTime() - paymentDate?.getTime()) / (1000 * 60 * 60 * 24),
      )
    : 0;

  const statusTable = {
    overdue: {
      text: `Atrasado (${daysOverdue} días)`,
      style: styles.overdueText,
    },
    pending: {
      text: 'Pendiente',
      style: styles.pendingText,
    },
  };

  const statusKey = isOverdue ? 'overdue' : 'pending';
  const status = statusTable[statusKey];

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.titleStyle, titleStyle]}>
        {`${loan?.title ?? ''}`}
      </Text>

      <Text style={[styles.secondaryText, secondaryText]}>
        {`${loan?.idLoan ?? ''}`}
      </Text>

      <Divider style={styles.divider} />

      <View style={styles.containerTexts}>
        <View>
          <Text
            style={[styles.secondaryText, styles.subTileStyle, subTileStyle]}>
            Fecha de pago:
          </Text>
          <View style={styles.containerRow}>
            <Text style={[styles.subTileTextStyle, subTileTextStyle]}>
              {formatDayMonth(loan?.datePayment)}
            </Text>
            <Text style={[status.style, styles.status, status.style]}>
              {status.text}
            </Text>
          </View>
        </View>

        <PrimaryButton
          onPress={() => {
            handlePayment(loan?.route ?? 'HomeScreen');
          }}
          isLoading={false}
          label="Pagar mi préstamo"
          styles={styles.button}
          textStyles={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    padding: 16,
    marginTop: 10,
  },
  titleStyle: {
    color: '#000',
    textAlign: 'left',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 2,
  },
  secondaryText: {
    color: '#676F82',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    fontStyle: 'normal',
  },
  divider: {
    backgroundColor: '#ECECEC',
    marginVertical: 10,
    borderRadius: 12,
    height: 2,
  },
  containerTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTileStyle: {
    fontSize: 10,
  },
  subTileTextStyle: {
    color: '#000',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
  },
  containerRow: {
    flexDirection: 'row',
  },
  status: {
    marginLeft: 10,
  },
  overdueText: {
    color: '#F14336',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
  },
  pendingText: {
    color: '#676F82',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
  },
  button: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height: 36,
    width: '50%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 0,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: globalFontFamily.interRegular,
  },
});

export default Cardloan;
