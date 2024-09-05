import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import PendingIcon from '../../../../assets/svg/icon-point-black.svg';
import CompletedIcon from '../../../../assets/svg/icon-point-green.svg';
import RejectedIcon from '../../../../assets/svg/icon-point-red.svg';

export type StatusType =
  | 'FAILED'
  | 'PENDING'
  | 'COMPLETED'
  | 'CREATED'
  | undefined;

export interface RowData {
  value?: string;
  status?: StatusType;
}

interface CustomTableProps {
  headers: string[];
  data: RowData[][];
}

const statusStyles: Record<
  string,
  {containerStyle: object; icon: React.FC<SvgProps> | null; textStyle: object}
> = {
  PENDING: {
    containerStyle: globalStyles.statusPending,
    icon: PendingIcon,
    textStyle: globalStyles.statusCompletedPending,
  },
  COMPLETED: {
    containerStyle: globalStyles.statusCompleted,
    icon: CompletedIcon,
    textStyle: globalStyles.statusCompletedText,
  },
  FAILED: {
    containerStyle: globalStyles.statusFailed,
    icon: RejectedIcon,
    textStyle: globalStyles.statusFailedText,
  },
};

const CustomTable: React.FC<CustomTableProps> = ({headers, data}) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        {headers.map((header, index) => (
          <Text key={index} style={styles.tableHeaderText}>
            {header}
          </Text>
        ))}
      </View>
      {data.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[styles.tableRow, rowIndex % 2 !== 0 && styles.tableRowZebra]}>
          {row.map((cell, cellIndex) => {
            if (cell.status) {
              const {
                containerStyle,
                icon: IconSVG,
                textStyle,
              } = statusStyles[cell.status] || statusStyles.PENDING;

              return (
                <View
                  key={cellIndex}
                  style={[styles.statusContainer, containerStyle]}>
                  {IconSVG && (
                    <IconSVG width={8} height={8} style={styles.icon} />
                  )}

                  <Text style={[styles.tableRowText, textStyle]}>
                    {cell.value}
                  </Text>
                </View>
              );
            }
            return (
              <Text key={cellIndex} style={styles.tableRowText}>
                {cell.value}
              </Text>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E0E8FF',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 0,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E8FF',
  },
  tableHeaderText: {
    color: '#334158',
    fontFamily: globalFontFamily.interSemiBold,
    fontSize: 12,
    fontWeight: '600',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  tableRowZebra: {
    backgroundColor: 'rgba(243, 246, 253, 0.55)',
  },
  tableRowText: {
    color: '#000',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '400',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 16,
  },
  icon: {
    marginRight: 4,
  },
});

export default CustomTable;
