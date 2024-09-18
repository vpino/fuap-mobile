import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import CardLoadAction from '../../components/molecules/CardLoadAction';

export const LobbyLoanScreen = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary
          label="Obtenga la aprobacion en menos de 5 minutos!"
          styles={styles.textPrimary}
        />

        <SubTitle label="Puedes aplicar para cualquier producto ofrecido abajo. Te preguntaremos datros generales, informacion laboral y preguntas sobre tu prestamo." />

        <CardLoadAction
          title="Prestamo Personal"
          subtitle="Un prestamo personal para sus necesidades personales! Consulta tu tarifa en 5 minutos y recibe tus fondos en tan solo 24 horas**. Tasas fijas bajas desde 5.2% TAE**"
          buttonText="Aplicar Ahora"
          ButtonIcon={ArrowWhite}
          textRoute="PersonalLoadScreen"
          containerStyle={styles.containerCard}
        />

        <CardLoadAction
          title="Prestamo de Casa"
          subtitle="Financia la casa de tu suenos o repara la que ya posees con una primera hipoteca, una linea de creidto sobre el valor de la vivienda, una segunda hipoteca tradicional de tasa fija, ARM o hipoteca inversa."
          buttonText="Aplicar Ahora"
          ButtonIcon={ArrowWhite}
          textRoute="HomeLoanScreen"
          containerStyle={styles.containerCard}
        />

        <CardLoadAction
          title="Tarjeta de Credito"
          subtitle="0% APR inicial y ofertas de bonificacion: cero intereses por hasta 21 meses y reembolso en efectivo ilimitado. Solicita las mejores tarjetas de credito! Obten una Tarjeta 0% TAE hasta 2026, Nuestro Expertos encontraron las mejores Oferas de Tarjetas de Creditos."
          buttonText="Aplicar Ahora"
          ButtonIcon={ArrowWhite}
          textRoute="HomeScreen"
          containerStyle={styles.containerCard}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textPrimary: {
    marginTop: 0,
  },
  button: {
    marginTop: 20,
    width: '60%',
  },
  containerCard: {
    marginTop: 20,
  },
});
