import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {SelectList} from 'react-native-dropdown-select-list';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import CustomTable, {RowData, StatusType} from './CustomTable';
import {ParamsDTO} from '../../../infrastructure/dtos/params.dto';
import {usePersonalLoan} from '../../hooks/personal-loan/usePersonalLoan';
import {formatDateTwoDigit} from '../../../config/helpers/dates';
import {formatAmount} from '../../../config/helpers/number';

interface TableSubmmissionsProps {}

const loansOptions = [
  {key: 'LOAN', value: 'Personal'},
  {key: 'HOME', value: 'Casa'},
  {key: 'CREDIT_CARD', value: 'Tarjeta de credito'},
];

const statusLoanOptions = [
  {key: 'ALL', value: 'Todos'},
  {key: 'COMPLETED', value: 'Aprobado'},
  {key: 'FAILED', value: 'Rechazado'},
  {key: 'CREATED', value: 'En Progreso'},
];

const headersTable = ['Fecha', 'Monto', 'Resultado'];

const params: ParamsDTO<any> = {
  limit: 10,
  skip: 0,
  relations: ['customer'],
};

const convertDataToTable = (data: any[]): RowData[][] => {
  if (!data || !data.map) {
    return [];
  }

  return data?.map(item => {
    const date = formatDateTwoDigit(item?.createdAt);
    const amount = formatAmount(item?.amount);
    const status = mapStatus(item?.status);

    return [{value: date}, {value: amount}, status];
  });
};

const statusMap: Record<string, {value: string; status: StatusType}> = {
  COMPLETED: {value: 'Completado', status: 'COMPLETED'},
  PENDING: {value: 'En Progreso', status: 'PENDING'},
  FAILED: {value: 'Rechazado', status: 'FAILED'},
  CREATED: {value: 'En Progreso', status: 'PENDING'},
};

const mapStatus = (status: string): {value: string; status?: StatusType} => {
  return statusMap[status] || {value: status, status: undefined};
};

type StatusMapKey = 'Aprobado' | 'En Progreso' | 'Rechazado' | 'Todos';

const reverValueToStatus: Record<StatusMapKey, string> = {
  Aprobado: 'COMPLETED',
  'En Progreso': 'CREATED',
  Rechazado: 'FAILED',
  Todos: '',
};

export const TableSubmmissions: React.FC<TableSubmmissionsProps> = ({}) => {
  const {id} = useAuthStore();
  const {getAllByCustomer} = usePersonalLoan({id: id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [dataTable, setDataTable] = useState<RowData[][]>([]);
  const [status, setStatus] = useState<string>('');
  const [typeLoan, setTypeLoan] = useState<string>('');
  // const [isLoading, setIsLoading] = useState(false);

  const handleSearchLoad = useCallback(
    async (statusLoan: string, type: string) => {
      try {
        console.log('type', type);

        params.filter = {
          customer: {id},
        };

        if (statusLoan) {
          params.filter = {
            status: statusLoan,
          };
        }

        const response = await getAllByCustomer(params);

        setDataTable(convertDataToTable(response.data));
      } catch (error: any) {
        setSnackbarMessage(
          error?.message ||
            'Hubo un error al actualizar los datos, por favor intente de nuevo.',
        );
        setSnackbarVisible(true);
      }
    },
    [id, getAllByCustomer],
  );

  const onDismissSnackBar = () => setSnackbarVisible(false);

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.rowSelects]}>
        <View style={[styles.row]}>
          <Text style={styles.label}>Prestamo:</Text>
          <SelectList
            setSelected={(value: string) => {
              setTypeLoan(value);
              handleSearchLoad(status, value);
            }}
            data={loansOptions}
            save="value"
            boxStyles={styles.inputSelect}
            dropdownStyles={styles.dropDownStyleSelect}
            placeholder="Personal"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Estatus:</Text>
          <SelectList
            setSelected={(value: StatusMapKey) => {
              setStatus(reverValueToStatus[value]);
              handleSearchLoad(reverValueToStatus[value], typeLoan);
            }}
            data={statusLoanOptions}
            save="value"
            boxStyles={styles.inputSelect}
            dropdownStyles={styles.dropDownStyleSelect}
            placeholder="Aprobado"
            searchPlaceholder="Buscar"
            notFoundText="No encontrado"
          />
        </View>
      </View>

      <CustomTable headers={headersTable} data={dataTable} />

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
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  rowSelects: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    color: '#828282',
    fontFamily: globalFontFamily.helveticaNeue,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
  },
  inputSelect: {
    display: 'flex',
    height: 32,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    gap: 4,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    marginLeft: 10,
  },
  dropDownStyleSelect: {
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    color: '#333',
    fontFamily: globalFontFamily.helveticaNeue,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
});
