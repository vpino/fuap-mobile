import {create} from 'zustand';
import {IndividualCustomer} from '../../../core/entities/individual-customer.entity';

interface OnboardingState {
  individualCustomer: IndividualCustomer;
  setIndividualCustomer: (customer: Partial<IndividualCustomer>) => void;
  updateIndividualCustomer: (customer: Partial<IndividualCustomer>) => void;
}

export const useOnboardingStore = create<OnboardingState>(set => ({
  individualCustomer: {
    id: '',
  },
  setIndividualCustomer: customer =>
    set(state => ({
      individualCustomer: {...state.individualCustomer, ...customer},
    })),
  updateIndividualCustomer: customer =>
    set(state => ({
      individualCustomer: {...state.individualCustomer, ...customer},
    })),
}));
