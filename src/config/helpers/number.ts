export const formatAmount = (amount: string): string => {
  const number = parseFloat(amount);
  return number.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};
