import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {ParamsDTO} from '../../../infrastructure/dtos/params.dto';
import {
  AcceptPersonalLoanDto,
  LoanDetailsMounthlyDTO,
  UpdateAssetsDto,
  UpdateInfoAfterRejectedDto,
  UpdateTermsAndConditionsDto,
  UpdateTermsLoanDto,
} from '../../../infrastructure/dtos/personal-loan/personal-loan.dto';
import {PersonalLoan} from '../../entities/personal-loan.entity';

export const getLoanDetailsUseCase = async (
  fetcher: HttpAdapter,
  loanId: string,
): Promise<PersonalLoan> => {
  try {
    const response = await fetcher.get<any>(`/personal-loan/${loanId}`);
    return response.data;
  } catch (error: any) {
    console.log(
      `Error fetching loan details - getLoanDetailsUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const loanDetailsMounthlyUseCase = async (
  fetcher: HttpAdapter,
  customerId: string,
  body: LoanDetailsMounthlyDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${customerId}/details-mounthly`,
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

export const updateTermsLoanUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateTermsLoanDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${id}/update-terms`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error submitting loan application - updateTermsLoanUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const updateAssetsUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateAssetsDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${id}/update-assets`,
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

export const updateTermsAndConditionsUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateTermsAndConditionsDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${id}/accept-tc`,
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

export const getAllByCustomer = async (
  fetcher: HttpAdapter,
  body: ParamsDTO<any>,
): Promise<any> => {
  try {
    const response = await fetcher.post<any>(
      '/personal-loan/get-all-by-customer',
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

export const getLastCreatedByCustomer = async (
  fetcher: HttpAdapter,
  id: string,
): Promise<any> => {
  try {
    const response = await fetcher.get<any>(
      `/personal-loan/${id}/get-last-created`,
    );
    return response;
  } catch (error: any) {
    console.log(`Error fetching loans by customer - getLastCreated: ${error}`);
    throw new Error(error);
  }
};

export const updatePersonalLoanAccept = async (
  fetcher: HttpAdapter,
  id: string,
  body: AcceptPersonalLoanDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${id}/accept-personal-loan`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error submitting expense details - updatePersonalLoanAccept: ${error}`,
    );
    throw new Error(error);
  }
};

export const updatePersonalLoanAfterRejected = async (
  fetcher: HttpAdapter,
  id: string,
  body: UpdateInfoAfterRejectedDto,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/personal-loan/${id}/update-info-rejected`,
      body,
    );
    return response;
  } catch (error: any) {
    console.log(
      `Error updating the personal - updatePersonalLoanAfterRejected: ${error}`,
    );
    throw new Error(error);
  }
};
