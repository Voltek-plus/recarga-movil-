// src/components/ui/AmountButton.jsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material'; // Añade Box aquí

const AmountButton = ({ amount, selected, onClick }) => {
  const isSelected = selected === amount;
  
  return (
    <Button
      fullWidth
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={() => onClick(amount)}
      sx={{
        height: 80,
        borderRadius: 2,
        backgroundColor: isSelected ? 'primary.main' : 'background.paper',
      }}
    >
      <Box>
        <Typography variant="h6">{amount} CNY</Typography>
        <Typography variant="caption">
          ≈ {(amount * 85.5).toFixed(2)} XAF
        </Typography>
      </Box>
    </Button>
  );
};

export default AmountButton;