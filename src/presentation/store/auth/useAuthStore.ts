import {create} from 'zustand';
import {Customer} from '../../../core/entities/customer.entity';
import {AuthStatus} from '../../../infrastructure/interfaces/auth/auth.status';
import {StorageAdapter} from '../../../config/adapters/storage/storage-adapter';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  customer?: Customer;

  onLogin: (customer: Customer) => Promise<boolean>;
  onLogout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: 'checking',
  token: undefined,
  customer: undefined,

  onLogin: async (customer: Customer) => {
    set({status: 'authenticated', token: customer.token, customer: customer});

    return true;
  },

  onLogout: async () => {
    await StorageAdapter.removeItem('token');
    set({status: 'unauthenticated', token: undefined, customer: undefined});
  },
}));
