import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {TableSubmmissions} from '../../components/organisms/TableSubmmissions';

export const SubmmissionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary label={'Solicitudes'} styles={styles.textPrimary} />
        <SubTitle label="Aquí están tus solicitudes de préstamos asociados a tu cuenta. Tenemos tu pendiente, aprobado, y prestamos rechazados abajo." />

        <TableSubmmissions />
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
