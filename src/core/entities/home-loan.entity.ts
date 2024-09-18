import {StatusHomeLoan} from '../enums/status-home-loan.enum';

export interface HomeLoan {
  id?: string;
  propertyUsage?: string;
  typeHome?: string;
  address?: string;
  state?: string;
  city?: string;
  town?: string;
  priceHome?: number;
  percentageInitial?: string;
  paymentInitial?: string;
  monthlyIncome?: number;
  monthlyDebt?: number;
  assets?: any;
  assetsAmount?: number;
  tc?: boolean;
  status?: StatusHomeLoan;
}
