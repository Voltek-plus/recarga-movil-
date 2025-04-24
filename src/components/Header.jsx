import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({ title }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Número predeterminado (China Unicom)
      </Typography>
    </Box>
  );
};

export default Header;