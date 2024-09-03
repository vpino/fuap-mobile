import {StatusPersonalLoan} from '../enums/status-loan.enum';

export interface PersonalLoan {
  id: string;
  customer?: any;
  monthlyIncome?: string;
  monthlyBills?: string;
  amount?: number;
  duration?: string;
  assets?: string[];
  assetsAmount?: number;
  tc?: boolean;
  status?: StatusPersonalLoan;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
