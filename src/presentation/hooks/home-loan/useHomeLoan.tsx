import {useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {baseAdapterFetcher} from '../../../config/adapters/base.adapter';
import {useHomeLoanStore} from '../../store/home-loan/useHomeLoanStore';
import {
  AcceptHomeLoanDto,
  PropertyUsageDto,
  TypeHomeDto,
  UpdateAddressHomeDto,
  UpdateAssetsDto,
  UpdateHomeLoanMounthlyDetailsDto,
  UpdateInfoAfterRejectedDto,
  UpdatePaymentInitialDto,
  UpdatePriceHomeDto,
  UpdateTermsAndConditionsDto,
} from '../../../infrastructure/dtos/home-loan/home-loan.dto';
import {ParamsDTO} from '../../../infrastructure/dtos/params.dto';

interface HomeLoanProps {
  id: string;
}

export const useHomeLoan = ({id}: HomeLoanProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {updateHomeLoan} = useHomeLoanStore();

  const loadLoanDetailsMounthly = async (
    body: UpdateHomeLoanMounthlyDetailsDto,
  ) => {
    try {
      setIsLoading(true);
      const response = await UseCases.homeLoanDetailsMounthlyUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        monthlyDebt: response?.monthlyDebt,
        monthlyIncome: response?.monthlyIncome,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePropertyUsage = async (body: PropertyUsageDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanPropertyUsageUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        id: response?.id,
        propertyUsage: response?.propertyUsage,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateTypeHome = async (body: TypeHomeDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanTypeHomeUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        typeHome: response?.typeHome,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePriceHome = async (body: UpdatePriceHomeDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanPriceHomeUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        priceHome: response?.priceHome,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePaymentInitial = async (body: UpdatePaymentInitialDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanPaymentInitialUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        percentageInitial: response?.percentageInitial,
        paymentInitial: response?.paymentInitial,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateAssets = async (body: UpdateAssetsDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanAssetsUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        assets: response?.assets,
        assetsAmount: response?.assetsAmount,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateTermsAndConditions = async (
    body: UpdateTermsAndConditionsDto,
  ) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanTermsAndConditionsUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        tc: response?.tc,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getAllHomeLoanByCustomer = async (body: ParamsDTO<any>) => {
    try {
      setIsLoading(true);
      const response = await UseCases.getAllHomeLoanByCustomer(
        baseAdapterFetcher,
        body,
      );

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getLastCreatedByCustomer = async () => {
    try {
      setIsLoading(true);
      const response = await UseCases.getLastHomeLoanCreatedByCustomer(
        baseAdapterFetcher,
        id,
      );

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateHomeLoanAddress = async (body: UpdateAddressHomeDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanAddresslUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        address: response?.address,
        state: response?.state,
        city: response?.city,
        town: response?.town,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateAcceptHomeLoan = async (body: AcceptHomeLoanDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanAccept(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateInfoAfterRejected = async (body: UpdateInfoAfterRejectedDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateHomeLoanAfterRejected(
        baseAdapterFetcher,
        id,
        body,
      );

      updateHomeLoan({
        priceHome: response?.priceHome,
        paymentInitial: response?.paymentInitial,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loadLoanDetailsMounthly,
    updatePropertyUsage,
    updateTypeHome,
    updatePriceHome,
    updatePaymentInitial,
    updateAssets,
    updateTermsAndConditions,
    isLoading,
    getAllHomeLoanByCustomer,
    getLastCreatedByCustomer,
    updateHomeLoanAddress,
    updateAcceptHomeLoan,
    updateInfoAfterRejected,
  };
};
