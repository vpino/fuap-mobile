import {useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {baseAdapterFetcher} from '../../../config/adapters/base.adapter';
import {usePersonalLoanStore} from '../../store/personal-loan/usePersonalLoanStore';
import {
  LoanDetailsMounthlyDTO,
  UpdateAssetsDto,
  UpdateTermsAndConditionsDto,
  UpdateTermsLoanDto,
} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';

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

  return {
    loadLoanDetailsMounthly,
    updateTermsLoan,
    updateAssets,
    updateTermsAndConditions,
    isLoading,
  };
};
