// src/components/ui/ContactDialog.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContactDialog = ({ open, onClose, onSelect }) => {
  const contacts = [
    { name: 'China Unicom', phone: '156 2307 5825' },
    { name: 'Usuario Ejemplo', phone: '189 1234 5678' }
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <IconButton onClick={onClose} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Seleccionar contacto</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <List>
          {contacts.map((contact, index) => (
            <ListItem 
              button 
              key={index}
              onClick={() => {
                onSelect(contact.phone);
                onClose();
              }}
            >
              <ListItemText 
                primary={contact.name} 
                secondary={contact.phone} 
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;