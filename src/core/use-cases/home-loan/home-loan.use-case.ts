import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  PropertyUsageDto,
  TypeHomeDto,
  UpdateAddressHomeDto,
  UpdateAssetsDto,
  UpdateHomeLoanMounthlyDetailsDto,
  UpdatePaymentInitialDto,
  UpdatePriceHomeDto,
  UpdateTermsAndConditionsDto,
} from '../../../infrastructure/dtos/home-loan/home-loan.dto';
import {ParamsDTO} from '../../../infrastructure/dtos/params.dto';

import {HomeLoan} from '../../entities/home-loan.entity';

export const getHomeLoanDetailsUseCase = async (
  fetcher: HttpAdapter,
  loanId: string,
): Promise<HomeLoan> => {
  try {
    const response = await fetcher.get<any>(`/home-loan/${loanId}`);
    return response.data;
  } catch (error: any) {
    console.log(
      `Error fetching loan details - getLoanDetailsUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const homeLoanDetailsMounthlyUseCase = async (
  fetcher: HttpAdapter,
  customerId: string,
  body: UpdateHomeLoanMounthlyDetailsDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${customerId}/mounthly-details`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error updating loan details - loanDetailsMounthlyUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanAssetsUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateAssetsDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${id}/update-assets`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error submitting income details - updateAssetsUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanTermsAndConditionsUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateTermsAndConditionsDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${id}/terms-and-conditions`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error submitting expense details - updateTermsAndConditionsUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const getAllHomeLoanByCustomer = async (
  fetcher: HttpAdapter,
  body: ParamsDTO<any>,
): Promise<any> => {
  try {
    const response = await fetcher.post<any>(
      '/home-loan/get-all-by-customer',
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error fetching loans by customer - getAllByCustomer: ${error}`,
    );
    throw new Error(error);
  }
};

export const getLastHomeLoanCreatedByCustomer = async (
  fetcher: HttpAdapter,
  id: string,
): Promise<any> => {
  try {
    const response = await fetcher.get<any>(
      `/home-loan/${id}/get-last-created`,
    );
    return response;
  } catch (error: any) {
    console.log(`Error fetching loans by customer - getLastCreated: ${error}`);
    throw new Error(error);
  }
};

export const updateHomeLoanPropertyUsageUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: PropertyUsageDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${id}/property-usage`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error updating property usage - updatePropertyUsageUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanTypeHomeUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: TypeHomeDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(`/home-loan/${id}/type-home`, body);
    return response;
  } catch (error: any) {
    console.log(
      `Error updating type of home - updateTypeHomeUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanPriceHomeUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdatePriceHomeDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${id}/price-home`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error updating price of the home - updatePriceHomeUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanPaymentInitialUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdatePaymentInitialDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/home-loan/${id}/payment-initial`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error updating payment initial - updatePaymentInitialUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateHomeLoanAddresslUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateAddressHomeDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(`/home-loan/${id}/address`, body);
    return response;
  } catch (error: any) {
    console.log(
      `Error updating payment initial - updatePaymentInitialUseCase: ${error}`,
    );
    throw new Error(error);
  }
};
