export interface ILoanPreview {
  title: string;
  idLoan: string;
  datePayment: string | Date;
  status: string;
  route?: string;
  type?: string;
}
