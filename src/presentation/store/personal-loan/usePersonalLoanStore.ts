import {create} from 'zustand';
import {PersonalLoan} from '../../../core/entities/personal-loan.entity';

interface PersonalLoanState {
  personalLoan: PersonalLoan;
  setPersonalLoan: (loan: Partial<PersonalLoan>) => void;
  updatePersonalLoan: (loan: Partial<PersonalLoan>) => void;
  resetPersonalLoan: () => void;
}

const initialPersonalLoan: PersonalLoan = {
  id: '',
  customer: undefined,
  monthlyIncome: undefined,
  monthlyBills: undefined,
  amount: undefined,
  duration: undefined,
  assets: [],
  assetsAmount: undefined,
  tc: undefined,
  status: undefined,
  isActive: undefined,
  isDeleted: undefined,
  createdAt: undefined,
  updatedAt: undefined,
};

export const usePersonalLoanStore = create<PersonalLoanState>(set => ({
  personalLoan: initialPersonalLoan,
  setPersonalLoan: loan =>
    set(state => ({
      personalLoan: {...state.personalLoan, ...loan},
    })),
  updatePersonalLoan: loan =>
    set(state => ({
      personalLoan: {...state.personalLoan, ...loan},
    })),
  resetPersonalLoan: () =>
    set(() => ({
      personalLoan: initialPersonalLoan,
    })),
}));
