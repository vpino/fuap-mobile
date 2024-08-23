import { HttpAdapter } from './http.adapter';

export class FetchHttpAdapter extends HttpAdapter {

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, method: 'GET' });
      if (!response.ok) {throw new Error(response.statusText);}
      return response.json() as Promise<T>;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, method: 'POST', body: JSON.stringify(body) });
      if (!response.ok) {throw new Error(response.statusText);}
      return response.json() as Promise<T>;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, method: 'PUT', body: JSON.stringify(body) });
      if (!response.ok) {throw new Error(response.statusText);}
      return response.json() as Promise<T>;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, method: 'DELETE' });
      if (!response.ok) {throw new Error(response.statusText);}
      return response.json() as Promise<T>;
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, method: 'PATCH', body: JSON.stringify(body) });
      if (!response.ok) {throw new Error(response.statusText);}
      return response.json() as Promise<T>;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    throw new Error(`HTTP request failed: ${error}`);
  }
}
