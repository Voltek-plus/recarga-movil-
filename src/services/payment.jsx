import axios from 'axios';

export default {
  async processPayment(data) {
    try {
      const response = await axios.post('https://tu-backend.com/api/recargas', data);
      return response.data.success;
    } catch (error) {
      console.error('Error en el pago:', error);
      return false;
    }
  },

  initPayPal(amount, onSuccess) {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount.toString()
            }
          }]
        });
      },
      onApprove: async (data, actions) => {
        await actions.order.capture();
        onSuccess();
      }
    }).render('#paypal-button-container');
  }
};