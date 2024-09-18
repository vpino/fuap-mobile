import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SubTitle} from '../atoms/SubTitle';
import {TitlePrimary} from '../atoms/TitlePrimary';
import {Divider} from 'react-native-paper';
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import ArrowGreen from '../../../../assets/svg/arrow-green.svg';
import MailIcon from '../../../../assets/svg/mail-icon.svg';

type OfferType = {
  id: string;
  monto: string;
  meses: string;
  pagoMensual: string;
  tasaAnual: string;
};

const offers: OfferType[] = [
  {
    id: 'A',
    monto: '$500,000.00',
    meses: '30 anos',
    pagoMensual: '$2,003.26',
    tasaAnual: '12.6% APR',
  },
  {
    id: 'B',
    monto: '$450,000.00',
    meses: '25 anos',
    pagoMensual: '$1,875.00',
    tasaAnual: '11.8% APR',
  },
  {
    id: 'C',
    monto: '$400,000.00',
    meses: '20 anos',
    pagoMensual: '$1,750.00',
    tasaAnual: '11.2% APR',
  },
];

export default function LoanApproval() {
  const {individualCustomer} = useOnboardingStore();

  const [activeTab, setActiveTab] = useState<string>('A');

  const activeOffer = offers.find(offer => offer.id === activeTab);

  return (
    <View>
      <TitlePrimary
        label={`¡Felicidades ${individualCustomer.firstName} ${individualCustomer.lastName}! `}
      />
      <SubTitle
        label="A continuación se detallan los términos del préstamo para los que califica según sus respuestas y estándares de préstamo. Podrás actualizar cualquiera de esta información en la aprobación de tu préstamo."
        styles={styles.subTitle}
      />

      <Divider style={styles.divider} />

      <Text style={styles.titleOffert}>
        Usted calificó para estas ofertas de préstamos:
      </Text>

      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {offers.map(offer => (
            <TouchableOpacity
              key={offer.id}
              style={[styles.tab, activeTab === offer.id && styles.activeTab]}
              onPress={() => setActiveTab(offer.id)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === offer.id && styles.activeTabText,
                ]}>
                Oferta {offer.id}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {activeOffer && (
          <View style={styles.offerDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Monto solicitado:</Text>
              <Text style={styles.detailValue}>{activeOffer.monto}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Meses de Plazo:</Text>
              <Text style={styles.detailValue}>{activeOffer.meses}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Pago Mensual:</Text>
              <Text style={styles.detailValue}>{activeOffer.pagoMensual}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Tasa % Anual:</Text>
              <Text style={styles.detailValue}>{activeOffer.tasaAnual}</Text>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.talkButton}>
          <Text style={styles.talkButtonText}>
            Aceptar Oferta
            <ArrowGreen />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>
            Hablar con un agente <MailIcon />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
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
    borderWidth: 1,
    borderColor: '#16AE65',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  talkButtonText: {
    color: '#219653',
    fontWeight: 'bold',
  },
});
