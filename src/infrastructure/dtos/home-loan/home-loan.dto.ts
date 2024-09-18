export interface PropertyUsageDto {
  propertyUsage: string;
}

export interface TypeHomeDto {
  typeHome: string;
}

export interface UpdatePriceHomeDto {
  priceHome: number;
}

export interface UpdatePaymentInitialDto {
  percentageInitial: string;
  paymentInitial: number;
}

export interface UpdateAddressHomeDto {
  address: string;
  state: string;
  city: string;
  town: string;
}

export interface UpdateHomeLoanMounthlyDetailsDto {
  monthlyIncome: number;
  monthlyDebt: number;
}

export interface UpdateTermsAndConditionsDto {
  tc: boolean;
}

export interface UpdateAssetsDto {
  assets: string[];
  assetsAmount: number;
}
