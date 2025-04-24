import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceDescriptionPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Descripción del Servicio
      </Typography>

      <List sx={{ mb: 3 }}>
        <ListItem>
          <ListItemText
            primary="1. Crédito de llamadas, recargas de datos y facturas"
            secondary="Son proporcionados por los comerciantes de Tmall, operadores de telecomunicaciones y otros proveedores de servicios."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Detalles de tu pedido"
            secondary="Los detalles de tu recarga serán enviados al proveedor de servicios correspondiente a través de 'Recarga Móvil'."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. Estado de tu recarga"
            secondary="El estado se sincronizará con 'Recarga Móvil' o puedes verlo en la página de 'Transacciones' de Alipay."
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Licencia de Autorización Electrónica
      </Typography>
      <Typography variant="body1" gutterBottom>
        China Mobile
      </Typography>
      <Typography variant="body2" gutterBottom>
        Autorización oficial para recargas
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Código de canal: 100000002230300542
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

export default ServiceDescriptionPage;