import {useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {baseAdapterFetcher} from '../../../config/adapters/base.adapter';
import {usePersonalLoanStore} from '../../store/personal-loan/usePersonalLoanStore';
import {
  AcceptPersonalLoanDto,
  LoanDetailsMounthlyDTO,
  UpdateAssetsDto,
  UpdateInfoAfterRejectedDto,
  UpdateTermsAndConditionsDto,
  UpdateTermsLoanDto,
} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';
import {ParamsDTO} from '../../../infrastructure/dtos/params.dto';

interface PersonalLoanProps {
  id: string;
}

export const usePersonalLoan = ({id}: PersonalLoanProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {updatePersonalLoan} = usePersonalLoanStore();

  const loadLoanDetailsMounthly = async (body: LoanDetailsMounthlyDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.loanDetailsMounthlyUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
        id: response?.id,
        monthlyBills: response?.monthlyBills,
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

  const updateTermsLoan = async (body: UpdateTermsLoanDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateTermsLoanUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
        amount: response?.amount,
        duration: response?.duration,
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
      const response = await UseCases.updateAssetsUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
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
      const response = await UseCases.updateTermsAndConditionsUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
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

  const getAllByCustomer = async (body: ParamsDTO<any>) => {
    try {
      setIsLoading(true);
      const response = await UseCases.getAllByCustomer(
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
      const response = await UseCases.getLastCreatedByCustomer(
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

  const updateAcceptPersonalLoan = async (body: AcceptPersonalLoanDto) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updatePersonalLoanAccept(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
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
      const response = await UseCases.updatePersonalLoanAfterRejected(
        baseAdapterFetcher,
        id,
        body,
      );

      updatePersonalLoan({
        amount: response?.amount,
        duration: response?.duration,
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
    updateTermsLoan,
    updateAssets,
    updateTermsAndConditions,
    isLoading,
    getAllByCustomer,
    getLastCreatedByCustomer,
    updateAcceptPersonalLoan,
    updateInfoAfterRejected,
  };
};
