import { useState } from 'react';
import { Button, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import PaymentService from '../services/payment';

export default function PaymentMethod({ phone, amount, onSuccess }) {
  const [method, setMethod] = useState('visa');

  const handlePayment = async () => {
    const success = await PaymentService.processPayment({
      phone,
      amount,
      method
    });
    if (success) onSuccess();
  };
  useEffect(() => {
    if (method === 'paypal') {
      PaymentService.initPayPal(amount, onSuccess);
    }
  }, [method, amount]);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Método de pago
      </Typography>
      <RadioGroup value={method} onChange={(e) => setMethod(e.target.value)}>
        <FormControlLabel value="visa" control={<Radio />} label="Tarjeta Visa/Mastercard" />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel value="voucher" control={<Radio />} label="Vales electrónicos" />
      </RadioGroup>
      
      {/* Integración con PayPal Button */}
      {method === 'paypal' && (
        <div id="paypal-button-container" style={{ marginTop: '20px' }}></div>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 4 }}
        onClick={handlePayment}
        disabled={method === 'paypal'} // PayPal maneja su propio botón
      >
        Pagar ${amount}
      </Button>
    </div>
  );
}