export interface LoginRespose {
  data: {
    status: string;
    access_token: string;
    individual?: any;
    id: string;
  };
}
