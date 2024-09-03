import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {IndividualCustomer} from '../../../core/entities/individual-customer.entity';
import {Divider} from 'react-native-paper';
import {formatDateTwoDigit} from '../../../config/helpers/dates';

interface CardInfoPersonalProps {
  individual: IndividualCustomer;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  secondaryText?: TextStyle;
  subTileStyle?: TextStyle;
  subTileTextStyle?: TextStyle;
}

const CardInfoPersonal: React.FC<CardInfoPersonalProps> = ({
  individual,
  containerStyle,
  titleStyle,
  secondaryText,
  subTileStyle,
  subTileTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.titleStyle, titleStyle]}>
        {`${individual?.firstName ?? ''} ${individual?.lastName ?? ''}`}
      </Text>

      <Text style={[styles.secondaryText, secondaryText]}>
        {` ${formatDateTwoDigit(individual?.createdAt)} | ${
          individual?.address ?? ''
        } ${individual?.addressExtension ?? ''}`}
      </Text>

      <Divider style={styles.divider} />

      <View style={styles.containerTexts}>
        <View>
          <Text
            style={[styles.secondaryText, styles.subTileStyle, subTileStyle]}>
            Nivel de Educación:
          </Text>
          <Text style={[styles.subTileTextStyle, subTileTextStyle]}>
            {`${individual?.educationLevel ?? ''}`}
          </Text>
        </View>

        <View>
          <Text
            style={[styles.secondaryText, styles.subTileStyle, subTileStyle]}>
            Estatus de propiedad:
          </Text>
          <Text style={[styles.subTileTextStyle, subTileTextStyle]}>
            {`${individual?.housingType ?? ''}`}
          </Text>
        </View>
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
    marginVertical: 20,
  },
  titleStyle: {
    color: '#000',
    textAlign: 'left',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 2,
    marginLeft: 4,
  },
  secondaryText: {
    color: '#676F82',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: 400,
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
});

export default CardInfoPersonal;
