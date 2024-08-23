import {useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {baseAdapterFetcher} from '../../../config/adapters/base.adapter';
import {LoginDto} from '../../../infrastructure/dtos/auth/login.dto';
import {SignupResponse} from '../../../infrastructure/interfaces/auth/sign-up.response';
import {SignUpDto} from '../../../infrastructure/dtos/auth/sign-up.dto';
import {StorageAdapter} from '../../../config/adapters/storage/storage-adapter';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface AuthProps {
  email: string;
  password: string;
  type?: string;
}

export const useAuth = () => {
  const {onLogin} = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({email, password}: AuthProps) => {
    const dataLogin: LoginDto = {email, password};

    try {
      setIsLoading(true);
      const customerLogin = await UseCases.loginUseCase(
        baseAdapterFetcher,
        dataLogin,
      );

      onLogin(customerLogin);

      return customerLogin;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async ({email, password, type = 'INDIVIDUAL'}: AuthProps) => {
    const customerData: SignUpDto = {email, password, type};

    try {
      setIsLoading(true);
      const customerRegister: SignupResponse = await UseCases.signUpUseCase(
        baseAdapterFetcher,
        customerData,
      );

      return customerRegister;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await StorageAdapter.removeItem('token');
  };

  return {
    login,
    signUp,
    logout,
    isLoading,
  };
};
