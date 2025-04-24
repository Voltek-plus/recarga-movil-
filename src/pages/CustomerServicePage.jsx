import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Divider,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomerServicePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Atención al Cliente
      </Typography>

      <Typography variant="h6" gutterBottom>
        Línea directa de Alipay: 
        <Link href="tel:0571-26886000" sx={{ ml: 1 }}>
          0571-26886000
        </Link>
      </Typography>

      <List sx={{ mb: 3 }}>
        <ListItem>
          <ListItemText
            primary="1. Cómo recargar mi teléfono móvil"
            secondary="Guía paso a paso para realizar recargas"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Por qué no puedo elegir denominaciones pequeñas"
            secondary="Restricciones de los operadores telefónicos"
          />
        </ListItem>
      </List>

      <Box sx={{ mt: 3 }}>
        <Typography 
          variant="body2" 
          color="primary" 
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(-1)}
        >
          Volver
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerServicePage;