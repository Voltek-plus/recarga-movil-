import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TransactionsPage = () => {
  const navigate = useNavigate();
  const [historial, setHistorial] = useState(null); // Estado para almacenar el historial
  const telefono = "222202350"; // Reemplaza esto con el número de teléfono del usuario

  // Función para consultar el historial de recargas
  const fetchHistorial = async () => {
    try {
      const response = await fetch(`/api/historial/${telefono}`);
      if (!response.ok) {
        throw new Error('Error al consultar el historial');
      }
      const data = await response.json();
      setHistorial(data.historial); // Actualiza el estado con el historial
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Llama a la función al cargar el componente
  useEffect(() => {
    fetchHistorial();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Historial de Recargas
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Últimas Recargas</Typography>
        <List>
          {historial ? (
            historial.map((recarga, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={`Monto: ￥${recarga.monto}`}
                  secondary={
                    <>
                      <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Fecha: {new Date(recarga.fecha).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1">Cargando...</Typography>
          )}
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

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