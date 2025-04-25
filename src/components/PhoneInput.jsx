import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

const PhoneInput = ({ phone, onPhoneChange }) => {
  const [openContacts, setOpenContacts] = useState(false);

  // Manejar la selección de contacto
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
      <IconButton onClick={() => {
        if (navigator.contacts) {
          navigator.contacts.pick((contacts) => {
            if (contacts) {
              handleContactSelection(contacts[0].tel[0].value);
            }
          });
        } else {
          alert('La API de contactos no está disponible en este navegador.');
        }
      }}>
        <ContactsIcon color="primary" />
      </IconButton>
    </Box>
  );
};

export default PhoneInput;