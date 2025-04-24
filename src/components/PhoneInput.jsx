import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactDialog from './ui/ContactDialog';

const PhoneInput = ({ phone, onPhoneChange }) => {
  const [openContacts, setOpenContacts] = React.useState(false);

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
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {phone || 'Seleccione un número'}
      </Typography>
      <IconButton onClick={() => setOpenContacts(true)}>
        <ContactsIcon color="primary" />
      </IconButton>
      
      <ContactDialog
        open={openContacts}
        onClose={() => setOpenContacts(false)}
        onSelect={onPhoneChange}
      />
    </Box>
  );
};

export default PhoneInput;