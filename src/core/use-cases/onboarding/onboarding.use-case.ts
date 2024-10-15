import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  LoadNamesDTO,
  IdentityDocumentDTO,
  AddressDTO,
  HousingDataDTO,
  EducationDataDTO,
  OccupationDTO,
  CompanyInfoDTO,
  ContactInfoDTO,
} from '../../../infrastructure/dtos/onboarding/onbording.dto';
import {IndividualCustomer} from '../../entities/individual-customer.entity';

export const getIndividualByCustomerId = async (
  fetcher: HttpAdapter,
  customerId: string,
): Promise<IndividualCustomer> => {
  try {
    const response = await fetcher.get<any>(
      `/individual-customer/customer/${customerId}`,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      `Error in getCustomerByCustomerId - onboardingUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const loadNamesUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: LoadNamesDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(`/customer/${id}/load-names`, body);
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching load names - loadNamesUseCase: ${error}`);
    throw new Error(error);
  }
};

export const identityDocumentUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: IdentityDocumentDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/identity-document`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      `Error fetching identity document - identityDocumentUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const addressUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: AddressDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/address`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching address - addressUseCase: ${error}`);
    throw new Error(error);
  }
};

export const housingDataUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: HousingDataDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/housing-data`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching housing data - housingDataUseCase: ${error}`);
    throw new Error(error);
  }
};

export const educationDataUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: EducationDataDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/education-data`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      `Error fetching education data - educationDataUseCase: ${error}`,
    );
    throw new Error(error);
  }
};

export const occupationUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: OccupationDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/occupation`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching occupation - occupationUseCase: ${error}`);
    throw new Error(error);
  }
};

export const companyInfoUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: CompanyInfoDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/company-info`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching company info - companyInfoUseCase: ${error}`);
    throw new Error(error);
  }
};

export const contactInfoUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: ContactInfoDTO,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(
      `/individual-customer/${id}/contact-info`,
      body,
    );
    return response.data;
  } catch (error: any) {
    console.log(`Error fetching contact info - contactInfoUseCase: ${error}`);
    throw new Error(error);
  }
};

export const updateOnboardingUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  body: any,
): Promise<any> => {
  try {
    const response = await fetcher.put<any>(`/individual-customer/${id}`, body);
    return response.data;
  } catch (error: any) {
    console.log(
      `Error fetching onboarding info - updateOnboardingUseCase: ${error}`,
    );
    throw new Error(error);
  }
};
