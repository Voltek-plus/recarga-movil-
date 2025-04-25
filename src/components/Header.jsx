import React, { useState } from 'react';
import { Typography, Box, Select, MenuItem } from '@mui/material';

const Header = ({ title, onCompanyChange }) => {
  const [company, setCompany] = useState('Muni'); // Estado inicial: Muni

  // Manejar el cambio de compañía
  const handleChange = (event) => {
    const selectedCompany = event.target.value;
    setCompany(selectedCompany);
    onCompanyChange(selectedCompany); // Notificar al padre sobre el cambio
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Seleccione la compañía:
      </Typography>
      <Select
        value={company}
        onChange={handleChange}
        variant="outlined"
        size="small"
        sx={{ mt: 1 }}
      >
        <MenuItem value="Muni">Muni</MenuItem>
        <MenuItem value="Getesa">Getesa</MenuItem>
      </Select>
    </Box>
  );
};

export default Header;