import React, { useEffect, useState } from 'react';
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
  const [ultimaRecarga, setUltimaRecarga] = useState(null); // Estado para almacenar la última recarga
  const telefono = "222202350"; // Reemplaza esto con el número de teléfono del usuario

  // Función para consultar la última recarga
  const fetchUltimaRecarga = async () => {
    try {
      const response = await fetch(`/api/ultima-recarga/${telefono}`);
      if (!response.ok) {
        throw new Error('Error al consultar la última recarga');
      }
      const data = await response.json();
      setUltimaRecarga(data.ultimaRecarga); // Actualiza el estado con la última recarga
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Llama a la función al cargar el componente
  useEffect(() => {
    fetchUltimaRecarga();
  }, []);

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
              primary={ultimaRecarga ? `Última Recarga: ￥${ultimaRecarga.monto}` : "Cargando..."} 
              secondary={
                <>
                  <Typography component="span" sx={{ textDecoration: 'line-through' }}>
                    {ultimaRecarga ? new Date(ultimaRecarga.fecha).toLocaleString() : "Fecha no disponible"}
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