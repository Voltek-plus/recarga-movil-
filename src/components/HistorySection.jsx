import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Typography,
  ListItemButton,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HistorySection = () => {
  const navigate = useNavigate();

  return (
    <>
      <Divider sx={{ my: 3 }} />
      
      <List sx={{ 
        backgroundColor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
        mb: 3
      }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/transactions')}>
            <ListItemText 
              primary="Historial de recargas" 
              secondary="Ver todas las transacciones"
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/service-description')}>
            <ListItemText primary="Descripción del servicio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/customer-service')}>
            <ListItemText primary="Atención al cliente" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default HistorySection;