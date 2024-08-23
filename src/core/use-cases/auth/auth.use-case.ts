import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {StorageAdapter} from '../../../config/adapters/storage/storage-adapter';
import {LoginDto} from '../../../infrastructure/dtos/auth/login.dto';
import {LoginRespose} from '../../../infrastructure/interfaces/auth/login.response';
import {SignupResponse} from '../../../infrastructure/interfaces/auth/sign-up.response';
import {Customer} from '../../entities/customer.entity';

export const loginUseCase = async (
  fetcher: HttpAdapter,
  body: LoginDto,
): Promise<Customer> => {
  try {
    const login = await fetcher.post<LoginRespose>('/auth/login', body);

    return {
      status: login?.data?.status,
      token: login?.data?.access_token,
    };
  } catch (error: any) {
    console.log(`Error fetching login - loginUserCase ${error}`);
    throw new Error(error);
  }
};

export const signUpUseCase = async (
  fetcher: HttpAdapter,
  body: LoginDto,
): Promise<SignupResponse> => {
  try {
    return await fetcher.post<SignupResponse>('/auth/sign-up', body);
  } catch (error: any) {
    console.log(`Error fetching login - signUpUseCase ${error}`);
    throw new Error(error);
  }
};

export const logout = async (): Promise<boolean> => {
  await StorageAdapter.removeItem('token');
  return true;
};
