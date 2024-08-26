import {IndividualCustomer} from './individual-customer.entity';

export interface Customer {
  id?: string;
  email?: string;
  status: string;
  token: string;
  invidualCustomer?: IndividualCustomer;
}
