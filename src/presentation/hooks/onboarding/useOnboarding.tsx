import {useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {baseAdapterFetcher} from '../../../config/adapters/base.adapter';
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
import {useOnboardingStore} from '../../store/onboarding/useOnboardingStore';

interface OnboardingProps {
  id: string;
}

export const useOnboarding = ({id}: OnboardingProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {updateIndividualCustomer} = useOnboardingStore();

  const loadNames = async (body: LoadNamesDTO) => {
    try {
      setIsLoading(true);

      const response = await UseCases.loadNamesUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateIndividualCustomer({
        firstName: response?.data?.firstName,
        lastName: response?.data?.lastName,
        status: response?.data?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const identityDocument = async (body: IdentityDocumentDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.identityDocumentUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateIndividualCustomer({
        country: response?.country,
        typeDocument: response?.typeDocument,
        dni: response?.dni,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const address = async (body: AddressDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.addressUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateIndividualCustomer({
        address: response?.address,
        city: response?.city,
        state: response?.state,
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

  const housingData = async (body: HousingDataDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.housingDataUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        housingType: response?.housingType,
        housingYear: response?.housingYear,
        housingMonth: response?.housingMonth,
        status: response?.status,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const educationData = async (body: EducationDataDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.educationDataUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        educationLevel: response?.educationLevel,
        educationArea: response?.educationArea,
        educationYear: response?.educationYear,
        status: response?.status,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const occupationData = async (body: OccupationDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.occupationUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        occupation: response?.occupation,
        typeBusiness: response?.typeBusiness,
        status: response?.status,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const companyData = async (body: CompanyInfoDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.companyInfoUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        companyName: response?.companyName,
        companyPhone: response?.companyPhone,
        companyAddress: response?.companyAddress,
        companyCity: response?.companyCity,
        companyState: response?.companyState,
        companyYear: response?.companyYear,
        companyMonth: response?.companyMonth,
        status: response?.status,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const contactData = async (body: ContactInfoDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.contactInfoUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      updateIndividualCustomer({
        phone: response?.phone,
        status: response?.status,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateOnboarding = async (body: any) => {
    try {
      setIsLoading(true);
      const response = await UseCases.updateOnboardingUseCase(
        baseAdapterFetcher,
        id,
        body,
      );

      console.log('response ', response);

      updateIndividualCustomer({
        phone: response?.phone,
        status: response?.status,
        firstName: response?.firstName,
        middleName: response?.middleName,
        lastName: response?.lastName,
        dateOfBirth: response?.dateOfBirth,
        country: response?.country,
        city: response?.city,
        state: response?.state,
        zipCode: response?.zipCode,
        dni: response?.dni,
        address: response?.address,
        addressExtension: response?.addressExtension,
        typeDocument: response?.typeDocument,
        town: response?.town,
        housingType: response?.housingType,
        housingYear: response?.housingYear,
        housingMonth: response?.housingMonth,
        educationLevel: response?.educationLevel,
        educationArea: response?.educationArea,
        educationYear: response?.educationYear,
        occupation: response?.occupation,
        typeBusiness: response?.typeBusiness,
        companyName: response?.companyName,
        companyPhone: response?.companyPhone,
        companyAddress: response?.companyAddress,
        companyCity: response?.companyCity,
        companyState: response?.companyState,
        companyTown: response?.companyTown,
        companyYear: response?.companyYear,
        companyMonth: response?.companyMonth,
      });

      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loadNames,
    identityDocument,
    address,
    housingData,
    educationData,
    occupationData,
    companyData,
    contactData,
    isLoading,
    updateOnboarding,
  };
};
