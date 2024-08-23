import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {HttpAdapter} from './http.adapter';
import {StorageAdapter} from '../storage/storage-adapter';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosHttpAdapter extends HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    super();
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });

    this.axiosInstance.interceptors.request.use(async config => {
      const token = await StorageAdapter.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        options,
      );
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post<T>(
    url: string,
    body: unknown,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        body,
        options,
      );

      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put<T>(
    url: string,
    body: unknown,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        url,
        body,
        options,
      );
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(
        url,
        options,
      );
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch<T>(
    url: string,
    body: unknown,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch(
        url,
        body,
        options,
      );
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    const message = error?.response?.data?.message ?? error?.message ?? error;
    throw new Error(message);
  }
}
