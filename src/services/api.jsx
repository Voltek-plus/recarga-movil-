// Simulación de API para recargas
export const processPayment = async (paymentData) => {
    // En una implementación real, harías una llamada HTTP aquí
    console.log('Procesando pago:', paymentData);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, transactionId: 'TRX' + Date.now() });
      }, 1500);
    });
  };
  
  // Obtener historial de recargas
  export const getTopUpHistory = async () => {
    return [
      { date: '2023-05-15', amount: 100, phone: '156 2307 5825' },
      { date: '2023-04-28', amount: 50, phone: '156 2307 5825' }
    ];
  };