// src/components/AmountSelector.jsx
import React from 'react';
import { Grid } from '@mui/material';
import AmountButton from './ui/AmountButton';

const AmountSelector = ({ amounts, selected, onSelect }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {amounts.map((amount) => (
        <Grid item key={amount} xs={12} sm={6} md={4}>
          <AmountButton
            amount={amount}
            selected={selected}
            onClick={onSelect}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AmountSelector;