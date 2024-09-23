import {create} from 'zustand';
import {HomeLoan} from '../../../core/entities/home-loan.entity';

interface HomeLoanState {
  homeLoan: HomeLoan;
  setHomeLoan: (loan: Partial<HomeLoan>) => void;
  updateHomeLoan: (loan: Partial<HomeLoan>) => void;
  resetHomeLoan: () => void;
}

// Define el estado inicial de homeLoan
const initialHomeLoan: HomeLoan = {
  id: '',
  propertyUsage: '',
  typeHome: '',
  address: '',
  state: '',
  city: '',
  town: '',
  priceHome: 0,
  percentageInitial: '',
  paymentInitial: '',
  monthlyIncome: 0,
  monthlyDebt: 0,
  assets: null,
  assetsAmount: 0,
  tc: false,
  status: undefined,
};

export const useHomeLoanStore = create<HomeLoanState>(set => ({
  homeLoan: initialHomeLoan,
  setHomeLoan: loan =>
    set(state => ({
      homeLoan: {...state.homeLoan, ...loan},
    })),
  updateHomeLoan: loan =>
    set(state => ({
      homeLoan: {...state.homeLoan, ...loan},
    })),
  resetHomeLoan: () =>
    set(() => ({
      homeLoan: initialHomeLoan,
    })),
}));
