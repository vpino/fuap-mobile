import {Platform} from 'react-native';
import {AxiosHttpAdapter} from './http/axios.adapter';

const baseUrl: string =
  Platform.OS === 'ios' ? 'http://localhost:3007' : 'http://10.0.2.2:3007';

export const baseAdapterFetcher = new AxiosHttpAdapter({
  baseUrl,
  params: {},
});
