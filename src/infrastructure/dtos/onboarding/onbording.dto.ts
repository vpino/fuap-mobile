// Primer estado: Cargar Nombres
export interface LoadNamesDTO {
  firstName: string;
  lastName: string;
}

// Segundo paso: Documento de identidad
export interface IdentityDocumentDTO {
  country: string;
  typeDocument: string;
  dni: string;
}

// Tercer paso: Dirección
export interface AddressDTO {
  address: string;
  state: string;
  city: string;
  town: string;
}

// Cuarto paso: Datos de la vivienda
export interface HousingDataDTO {
  housingType: string;
  housingYear: string;
  housingMonth: string;
}

// Quinto paso: Datos de estudios
export interface EducationDataDTO {
  educationLevel: string;
  educationArea: string;
  educationYear: string;
}

// Sexto paso: Ocupación
export interface OccupationDTO {
  occupation: string;
  typeBusiness: string;
}

// Séptimo paso: Información de la empresa
export interface CompanyInfoDTO {
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  companyCity: string;
  companyState: string;
  companyYear: string;
  companyMonth: string;
}

// Octavo paso: Información de contacto
export interface ContactInfoDTO {
  phone: string;
}
