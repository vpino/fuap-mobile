import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SubTitle} from '../atoms/SubTitle';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {Divider, Snackbar} from 'react-native-paper';
import {globalColors, globalFontFamily} from '../../../theme/GlobalStyles';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';
import SliderComponent from './SliderComponent';
import {UpdateInfoAfterRejectedDto} from '../../../infrastructure/dtos/home-loan/home-loan.dto';

export default function HomeLoanRejected() {
  const {homeLoan} = useHomeLoanStore();

  const {updateInfoAfterRejected} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [priceHome, setPriceHome] = useState(0);
  const [paymentInitial, setPaymentInitial] = useState(0);

  const handleUpdateInfo = async (values: UpdateInfoAfterRejectedDto) => {
    setIsLoading(true);

    try {
      await updateInfoAfterRejected({
        priceHome: values.priceHome,
        paymentInitial: values.paymentInitial,
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

  return (
    <View>
      <TitlePrimary label={'Ningún partner aprobó su préstamo...'} />
      <SubTitle
        label="A continuación se detallan los términos del préstamo para los que se usaron para tu aprobación según sus respuestas y estándares de préstamo."
        styles={styles.subTitle}
      />

      <Divider style={styles.divider} />

      <Text style={styles.titleOffert}>
        Aplicar de nuevo con diferentes condiciones con tu misma informacion:
      </Text>

      <View>
        <SliderComponent
          leftText="Precio de la casa"
          rightText="$"
          minimumValue={10000}
          maximumValue={500000}
          onValueChange={values => setPriceHome(values)}
        />

        <SliderComponent
          leftText="Pago inicial | 10%"
          rightText="$"
          minimumValue={10000}
          maximumValue={500000}
          onValueChange={values => setPaymentInitial(values)}
        />

        <TouchableOpacity
          style={styles.talkButton}
          onPress={() => {
            handleUpdateInfo({priceHome, paymentInitial});
          }}>
          <Text style={styles.talkButtonText}>
            Aplicar con nuevos términos
            <View style={{paddingLeft: 5}}>
              {isLoading ? <ActivityIndicator color="#FFF" /> : <ArrowWhite />}
            </View>
          </Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <SubTitle
          label="Puedes verificar a continuación que su información sea correcta, lo que determina si está aprobado o no."
          styles={styles.subTitle}
        />
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Ajustar mi información personal</Text>
        </TouchableOpacity>
      </View>

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
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: 'rgba(26, 26, 26, 0.70))',
    fontFamily: globalFontFamily.interLight,
    fontSize: 14,
    lineHeight: 30,
  },
  titleOffert: {
    color: '#1A1A1A',
    fontFamily: globalFontFamily.manropeSemiBold,
    fontSize: 14,
    lineHeight: 30,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: '#ECECEC',
    marginVertical: 10,
    borderRadius: 12,
    height: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  activeTab: {
    borderBottomColor: '#007bff',
  },
  tabText: {
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007bff',
  },
  offerDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: '#E0E8FF',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  talkButton: {
    backgroundColor: globalColors.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  talkButtonText: {
    color: '#FFF',
  },
});
