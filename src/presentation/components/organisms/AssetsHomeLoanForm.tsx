import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TitlePrimary} from '../../components/atoms/TitlePrimary';
import {SubTitle} from '../../components/atoms/SubTitle';
import ArrowWhite from '../../../../assets/svg/arrow-white.svg';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {Snackbar} from 'react-native-paper';
import {globalFontFamily, globalStyles} from '../../../theme/GlobalStyles';
import {UpdateAssetsDto} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';
import CarAsset from '../../../../assets/svg/car-white.svg';
import InvetoryAsset from '../../../../assets/svg/invetory-white.svg';
import PropertyAsset from '../../../../assets/svg/property-white.svg';
import InvoiceAsset from '../../../../assets/svg/invoice-white.svg';
import MachineAsset from '../../../../assets/svg/machine-white.svg';
import InvestmentAsset from '../../../../assets/svg/investment-white.svg';
import ListCardAssets from './ListCardAssets';
import {TextInputForm} from '../atoms/TextInputForm';
import DollarSvg from '../../../../assets/svg/dollar.svg';
import ArrowRigthBlue from '../../../../assets/svg/arrow-rigth-blue.svg';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {useHomeLoan} from '../../hooks/home-loan/useHomeLoan';

interface AssetsHomeLoanFormProps {}

export const AssetsHomeLoanForm: React.FC<AssetsHomeLoanFormProps> = () => {
  const {homeLoan} = useHomeLoanStore();
  const {updateAssets} = useHomeLoan({id: homeLoan.id ?? ''});

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const data = [
    {icon: CarAsset, label: 'Automóvil'},
    {icon: InvetoryAsset, label: 'Inventario'},
    {icon: PropertyAsset, label: 'Propiedad'},
    {icon: InvoiceAsset, label: 'Facturas'},
    {icon: MachineAsset, label: 'Maquinaria'},
    {icon: InvestmentAsset, label: 'Inversiones'},
  ];

  const handleAssetsHomeLoanForm = async (values: UpdateAssetsDto) => {
    setIsLoading(true);

    try {
      values.assetsAmount = Number(values.assetsAmount);

      await updateAssets(values);
      setSnackbarMessage(
        '¿Tiene algún activo para poder garantizar el préstamo?',
      );
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

  const validationSchema = Yup.object().shape({
    assets: Yup.array().of(
      Yup.string().required('Cada asset debe ser una cadena de texto'),
    ),
    assetsAmount: Yup.number().required(
      'Las facturas mensuales son obligatorias',
    ),
  });

  return (
    <Formik
      initialValues={{
        assets: [],
        assetsAmount: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleAssetsHomeLoanForm}>
      {({
        handleSubmit,
        setFieldValue,
        errors,
        values,
        handleChange,
        handleBlur,
        touched,
      }) => (
        <View>
          <TitlePrimary label="¿Tiene algún activo para poder garantizar el préstamo?" />
          <SubTitle
            label="Por favor confirme si tienes algun activo para ayudar garantizar tu préstamo, en el caso de que incumplas."
            styles={styles.subTitle}
          />

          <ListCardAssets
            data={data}
            onSelectedItemsChange={value => setFieldValue('assets', value)}
          />

          <SubTitle
            label="¿Cual es la cantidad estimada de tus activos que pueden ayudar garantizar tu préstamo?"
            styles={{...styles.subTitle, ...styles.subTitleTwo}}
          />

          <TextInputForm
            label=""
            value={values.assetsAmount.toString()}
            onChangeText={handleChange('assetsAmount')}
            onBlur={handleBlur('assetsAmount')}
            style={styles.input}
            icon={DollarSvg}
          />
          {touched.assetsAmount && errors.assetsAmount && (
            <Text style={globalStyles.errorText}>{errors.assetsAmount}</Text>
          )}

          <View style={styles.buttons}>
            <PrimaryButton
              onPress={handleSubmit as any}
              label="Continuar"
              icon={ArrowWhite}
              iconPosition="right"
              styles={styles.button}
              disabled={
                Object.keys(errors).length > 0 ||
                isLoading ||
                Number(values.assetsAmount) <= 0
              }
              isLoading={isLoading}
            />
            <PrimaryButton
              onPress={handleSubmit as any}
              label="No disponible"
              icon={ArrowRigthBlue}
              iconPosition="right"
              styles={{...styles.button, ...styles.buttonNotAvailable}}
              textStyles={styles.textNotAvailable}
              disabled={
                Object.keys(errors).length > 0 ||
                isLoading ||
                Number(values.assetsAmount) <= 0
              }
              isLoading={isLoading}
            />
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
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '45%',
  },

  buttonNotAvailable: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#457EFF',
    textAlign: 'center',
    width: '50%',
  },
  textNotAvailable: {
    color: '#457EFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },

  subTitle: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: globalFontFamily.manropeLight,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 30,
  },

  subTitleTwo: {
    marginTop: 0,
  },

  input: {
    marginTop: 20,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
