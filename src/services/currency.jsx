const EXCHANGE_RATES = {
    CNY_TO_XAF: 85.5
  };
  
  export const convertToXAF = (cny) => {
    return (cny * EXCHANGE_RATES.CNY_TO_XAF).toFixed(2);
  };
  
  export const formatCurrency = (amount, currency) => {
    return currency === 'XAF' 
      ? `${amount} XAF` 
      : `${amount} XAF (≈${convertToXAF(amount)} XAF)`;
  };