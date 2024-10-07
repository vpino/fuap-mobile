import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TextInputForm} from '../../components/atoms/TextInputForm';
import {useNavigationContext} from '../../navigation/NavigationContext';
import {TextWithCopyIcon} from '../../components/molecules/TextWithCopyIcon';

export const ConfirmTicketScreen: React.FC<any> = ({route}) => {
  const {getCurrentRoute} = useNavigationContext();
  const navigation = useNavigation<any>();

  const currentRoute = getCurrentRoute();
  const email = route.params?.email || currentRoute?.params?.email;

  useEffect(() => {}, [navigation]);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <TitlePrimary
          label={'Confirmacion de Ticket'}
          styles={styles.textPrimary}
        />
        <SubTitle label="Aqui tienes tu confirmacion de ticket y tu direct contacto con el equipo de soporte." />

        <Divider style={styles.divider} />

        <View>
          <Text style={styles.subTitle}> Email Contactado: </Text>

          <TextInputForm
            label={email}
            value={email}
            style={styles.textInput}
            autoCapitalize="none"
            disabled={true}
          />
        </View>

        <TextWithCopyIcon text="Ticket #: sio9dfs809g7fd-dfpo9vfyd7sa-adp9" />

        <SubTitle label="También se mando un email con confirmación de tu creación de ticket, ahi puedes ver tu numero de confirmación arriba y mas información sobre como conectarte con el agente de soporte." />
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
  button: {
    marginTop: 20,
    width: '60%',
  },
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    minWidth: '55%',
  },
  mouthStyle: {
    minWidth: '40%',
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.80)',
    fontFamily: globalFontFamily.manropeRegular,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  textInput: {
    marginVertical: 10,
  },
});
