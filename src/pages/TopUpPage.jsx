import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import PhoneInput from '../components/PhoneInput';
import AmountSelector from '../components/AmountSelector';
import HistorySection from '../components/HistorySection';
import PaymentDialog from '../components/PaymentDialog';

const TopUpPage = () => {
  const [phone, setPhone] = useState('156 2307 5825');
  const [amount, setAmount] = useState(null);
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Header title="Recarga Móvil" />
      
      <PhoneInput phone={phone} onPhoneChange={setPhone} />
      
      <Typography variant="subtitle1" sx={{ mt: 3, mb: 2 }}>
        Seleccione monto (CNY)
      </Typography>
      
      <AmountSelector 
        amounts={[50, 100, 200, 300, 500]} 
        selected={amount}
        onSelect={setAmount}
      />
      
      <HistorySection />
      
      <PaymentDialog
        open={openPayment}
        onClose={() => setOpenPayment(false)}
        phone={phone}
        amount={amount}
      />
    </Container>
  );
};

export default TopUpPage;