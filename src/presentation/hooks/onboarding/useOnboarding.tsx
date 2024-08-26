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
        firstName: response.data.firstName,
        lastName: response.data.lastName,
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
      updateIndividualCustomer({typeDocument: body.typeDocument});
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
        address: body.address,
        city: body.city,
        state: body.state,
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
        housingType: body.housingType,
        housingYear: body.housingYear,
        housingMonth: body.housingMonth,
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
        educationLevel: body.educationLevel,
        educationArea: body.educationArea,
        educationYear: body.educationYear,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const occupation = async (body: OccupationDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.occupationUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({occupation: body.occupation});
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const companyInfo = async (body: CompanyInfoDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.companyInfoUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        companyName: body.companyName,
        companyPhone: body.companyPhone,
        companyAddress: body.companyAddress,
        companyCity: body.companyCity,
        companyState: body.companyState,
        companyYear: body.companyYear,
        companyMonth: body.companyMonth,
      });
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = async (body: ContactInfoDTO) => {
    try {
      setIsLoading(true);
      const response = await UseCases.contactInfoUseCase(
        baseAdapterFetcher,
        id,
        body,
      );
      updateIndividualCustomer({
        phone: body.phone,
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
    occupation,
    companyInfo,
    contactInfo,
    isLoading,
  };
};
