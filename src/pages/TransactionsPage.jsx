import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TransactionsPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Transacciones Móviles
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Abril</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Chip label="Gastos: ￥50.00" color="error" variant="outlined" />
          <Chip label="Ingresos: ￥0.00" color="success" variant="outlined" />
        </Box>

        <List sx={{ mb: 3 }}>
          <ListItem>
            <ListItemText 
              primary="Recarga para 15623075825" 
              secondary={
                <>
                  <Typography component="span" sx={{ textDecoration: 'line-through' }}>
                    04-04 21:10
                  </Typography>
                  <Typography component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                    Recargas
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" color="text.secondary">
        Solo se muestran registros del último año. Especifique un rango de tiempo para buscar más registros.
      </Typography>

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

export default TransactionsPage;