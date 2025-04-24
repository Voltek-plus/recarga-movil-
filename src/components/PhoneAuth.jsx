import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react'; // Añade esta línea

export default function PhoneAuth({ onNext }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (phone.length >= 10) {
      onNext({ phone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Ingresa tu número de teléfono
      </Typography>
      <TextField
        label="Número de teléfono"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        inputProps={{ inputMode: 'tel' }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Continuar
      </Button>
    </form>
  );
}