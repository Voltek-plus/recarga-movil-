import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ¡Recarga exitosa!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        El saldo se ha acreditado a tu número correctamente.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/"
      >
        Volver al inicio
      </Button>
    </div>
  );
}