import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { convertToXAF } from '../services/currency';

const PaymentDialog = ({ open, onClose, phone, amount }) => {
  const paymentMethods = [
    'Tarjeta Visa/Mastercard',
    'PayPal',
    'Orange Money',
    'MTN Mobile Money'
  ];

  const handlePayment = () => {
    // Lógica para procesar pago
    console.log(`Pago de ${amount} CNY para ${phone}`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Método de pago</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Número: {phone}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
          Monto: {amount} CNY (~{convertToXAF(amount)} XAF)
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Seleccione método de pago:
        </Typography>
        
        <List>
          {paymentMethods.map((method, index) => (
            <ListItem button key={index}>
              <ListItemText primary={method} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button 
          variant="contained" 
          onClick={handlePayment}
          disabled={!amount}
        >
          Confirmar Pago
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;