import {create} from 'zustand';
import {PersonalLoan} from '../../../core/entities/personal-loan.entity';

interface PersonalLoanState {
  personalLoan: PersonalLoan;
  setPersonalLoan: (loan: Partial<PersonalLoan>) => void;
  updatePersonalLoan: (loan: Partial<PersonalLoan>) => void;
}

export const usePersonalLoanStore = create<PersonalLoanState>(set => ({
  personalLoan: {
    id: '',
  },
  setPersonalLoan: loan =>
    set(state => ({
      personalLoan: {...state.personalLoan, ...loan},
    })),
  updatePersonalLoan: loan =>
    set(state => ({
      personalLoan: {...state.personalLoan, ...loan},
    })),
}));
