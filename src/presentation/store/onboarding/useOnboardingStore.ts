import {create} from 'zustand';
import {IndividualCustomer} from '../../../core/entities/individual-customer.entity';

interface OnboardingState {
  individualCustomer: IndividualCustomer;
  setIndividualCustomer: (customer: Partial<IndividualCustomer>) => void;
  updateIndividualCustomer: (customer: Partial<IndividualCustomer>) => void;
  resetIndividualCustomer: () => void;
}

const initialIndividualCustomer: IndividualCustomer = {
  id: '',
};

export const useOnboardingStore = create<OnboardingState>(set => ({
  individualCustomer: initialIndividualCustomer,
  setIndividualCustomer: customer =>
    set(state => ({
      individualCustomer: {...state.individualCustomer, ...customer},
    })),
  updateIndividualCustomer: customer =>
    set(state => ({
      individualCustomer: {...state.individualCustomer, ...customer},
    })),
  resetIndividualCustomer: () =>
    set({
      individualCustomer: initialIndividualCustomer,
    }),
}));
