import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import {Divider} from 'react-native-paper';

interface LoanDetailsProps {
  data: {
    [key: string]: string | number;
  };
}

export default function LoanDetailsComponent({data}: LoanDetailsProps) {
  const renderItem = (
    label: string,
    value: string | number,
    style: 'normal' | 'bold' | 'light' = 'normal',
    isTotal: boolean = false,
  ) => (
    <View style={[styles.row, isTotal && styles.totalRow]} key={label}>
      <Text
        style={[
          styles.label,
          style === 'bold' && styles.boldText,
          style === 'light' && styles.lightText,
        ]}>
        {label}
      </Text>
      <Text
        style={[
          styles.value,
          style === 'bold' && styles.boldText,
          style === 'light' && styles.lightText,
        ]}>
        {value}
      </Text>
    </View>
  );

  return (
    <View>
      {Object.entries(data).map(([key, value], index) => {
        if (key === 'Pago total adeudado') {
          return (
            <React.Fragment key={`${key}-${index}`}>
              <Divider style={styles.divider} />
              {renderItem(key, value, 'bold', true)}
            </React.Fragment>
          );
        }
        if (key !== 'fecha del borrador') {
          return (
            <React.Fragment key={`${key}-${index}`}>
              {renderItem(key, value)}
            </React.Fragment>
          );
        }
        return null;
      })}
      {data['fecha del borrador'] && (
        <Text style={styles.draftDate} key="fecha-del-borrador">
          {`fecha del borrador: ${data['fecha del borrador']}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    marginTop: 10,
  },
  label: {
    color: 'rgba(15, 23, 42, 0.50)',
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
  },
  value: {
    color: 'rgba(15, 23, 42, 0.50)',
    fontFamily: globalFontFamily.manropeBold,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'right',
  },
  boldText: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '600',
  },
  lightText: {
    fontWeight: '300',
  },
  draftDate: {
    color: 'rgba(15, 23, 42, 0.50)',
    fontFamily: globalFontFamily.manropeLight,
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 24,
  },
  divider: {
    marginTop: 10,
    borderRadius: 12,
  },
});
