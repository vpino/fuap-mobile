import {create} from 'zustand';
import {HomeLoan} from '../../../core/entities/home-loan.entity';

interface HomeLoanState {
  homeLoan: HomeLoan;
  setHomeLoan: (loan: Partial<HomeLoan>) => void;
  updateHomeLoan: (loan: Partial<HomeLoan>) => void;
}

export const useHomeLoanStore = create<HomeLoanState>(set => ({
  homeLoan: {
    id: '',
  },
  setHomeLoan: loan =>
    set(state => ({
      homeLoan: {...state.homeLoan, ...loan},
    })),
  updateHomeLoan: loan =>
    set(state => ({
      homeLoan: {...state.homeLoan, ...loan},
    })),
}));
