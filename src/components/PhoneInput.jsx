import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

const PhoneInput = ({ phone, onPhoneChange }) => {
  const [openContacts, setOpenContacts] = useState(false);

  // Simular acceso al sistema de contactos
  const handleContactSelection = (selectedPhone) => {
    onPhoneChange(selectedPhone); // Notificar al padre sobre el número seleccionado
    setOpenContacts(false);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: 'background.paper',
      p: 2,
      borderRadius: 1,
      boxShadow: 1,
      mb: 3
    }}>
      {/* Campo de entrada para el número de teléfono */}
      <TextField
        value={phone || ''}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="Ingrese un número"
        fullWidth
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ flexGrow: 1, mr: 2 }}
      />
      
      {/* Botón para abrir los contactos */}
      <IconButton onClick={() => setOpenContacts(true)}>
        <ContactsIcon color="primary" />
      </IconButton>

      {/* Simulación del sistema de contactos */}
      {openContacts && (
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 2,
          boxShadow: 3,
          zIndex: 1000,
        }}>
          <Typography variant="h6" gutterBottom>
            Contactos
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <button onClick={() => handleContactSelection("222202350")}>Contacto 1: 222202350</button>
            <button onClick={() => handleContactSelection("987654321")}>Contacto 2: 987654321</button>
          </Box>
          <button onClick={() => setOpenContacts(false)} style={{ marginTop: '10px' }}>
            Cerrar
          </button>
        </Box>
      )}
    </Box>
  );
};

export default PhoneInput;