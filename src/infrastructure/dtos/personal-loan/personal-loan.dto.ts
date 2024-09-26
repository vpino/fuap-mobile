export interface LoanDetailsMounthlyDTO {
  monthlyIncome: string;
  monthlyBills: string;
}

export interface UpdateTermsLoanDto {
  amount: number;
  duration: string;
}

export interface UpdateAssetsDto {
  assets: string[];
  assetsAmount: number;
}

export interface EmploymentDetailsDTO {
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  companyCity: string;
  companyState: string;
  companyYear: number;
  companyMonth: number;
}

export interface UpdateTermsAndConditionsDto {
  tc: boolean;
}

export interface AcceptPersonalLoanDto {
  condition: boolean;
}

export interface UpdateInfoAfterRejectedDto {
  amount: number;
  duration: string;
}
